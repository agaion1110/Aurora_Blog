---
icon: edit
date: 2023-06-02
category:
  - vue
tag:
  - 笔记
  - 前端考核题
  - 面试题
star: false
sticky: false
copy.disableCopy: true
---

# Vue中计算属性computed

## 什么是计算属性

在Vue中，computed属性用于计算某个属性的值，以响应式地更新视图。computed属性是基于它们的依赖进行缓存的，也就是说只有依赖发生变化时，computed属性才会重新计算。

computed属性通常是一个函数，在Vue实例中定义为一个对象的属性。以下是computed属性的用法示例：

```javascript
new Vue({
  data: {
    number1: 10,
    number2: 5
  },
  computed: {
    // 计算number1加number2的结果
    sum: function() {
      return this.number1 + this.number2;
    },
    // 计算number1减number2的结果
    difference: function() {
      return this.number1 - this.number2;
    }
  }
});
```

在上述示例中，我们定义了两个computed属性sum和difference，分别计算number1加number2和number1减number2的结果。在模板中使用这两个computed属性时，可以直接通过属性名来获取它们的计算结果：

```html
<div>
  Sum: {{ sum }}
</div>
<div>
  Difference: {{ difference }}
</div>
```

在模板中，{{ sum }}和{{ difference }}会根据number1和number2的值实时更新，并显示最新的计算结果。

需要注意的是，computed属性的值是只读的，不应该尝试在computed属性中修改它们的依赖值。如果想要修改数据，应该使用methods方法，或者添加set方法：

## 计算属性的 Setter

计算属性默认只有 getter，不过也可以去设置一个 setter，像下面一样：

```vue
computed: {
  fullName: {
    // getter
    get() {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set(newValue) {
      const names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```

当我们运行 `this.fullName = '张 三'` 时，setter 会被调用，`this.firstName` 和 `this.lastName` 也会相应地被更新。

## 为什么要用computed计算属性

在Vue中，我们可以轻松的实现数据到DOM映射，使用模板内的表达式也很方便，但如果在模板内写入太多的逻辑的话就会让模板难以维护。

```vue
<template>
  <div :title="msg">
    {{ msg }}
    {{ msg.length }}  <!-- 这里简单计算了msg的长度不用计算属性也能达到目的 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello World',
    }
  },
}
</script>
```

但当我们有一个列表，我们通过数量来显示不同的状态信息，请看下面的例子：

```vue
<template>
  <div class="status">
    {{ List.length > 0 ? '有货' : '无货'}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: [{
        type: '西瓜',
      }],
    }
  },
}
</script>
```

此时，模板已经不再是简单的了，我们必须得看一下模板内的表达式才能知道它的状态是取决于`List.length`。那么如果在模板中有多个地方需要同样状态，我们就必须写多份同样的代码，这样模板就会变得更加的糟糕了。

所以，当我们需要处理一些响应式数据的复杂逻辑时，我们就应该去使用计算属性`computed`。看下面的例子：

```vue
<template>
  <div class="status">
    {{ Status }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: [{
        type: '西瓜',
      }],
    }
  },
  computed: {
    Status() {
      return this.List.length > 0 ? '有货' : '无货'
    },
  },
}
</script>
```

这里我们声明了一个计算属性`Status`。

如果我们去更改List数组的值，那么将会看到Status也会相应的进行修改。

我们可以像绑定普通属性一样将计算属性绑定到模板中。Vue在内部知道Status依赖于List，所以当List发生变化时，所有依赖Status的绑定也都会更新。最巧妙的是我们已经通过声明的方式创建了这个依赖方式，而且计算属性的getter函数没有副作用，使得更加容易测试。

##  computed（计算属性） VS  methods（方法）

上面的代码我们也可以通过方法的形式来实现它，例如：

```html
<template>
  <div class="status">
    {{ getStatus() }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      tList: [{
        type: '西瓜',
      }],
    }
  },
  methods: {
    getStatus() {
      return this.List.length > 0 ? '有货' : '无货'
    },
  },
}
</script>
```

我们将相同的逻辑定义为一个函数，而不是计算属性。可以看到两种方式实现的结果是完全相同的。那么有什么不同呢？

**不同的地方是：**

计算属性是基于**响应依赖关系缓存的**，计算属性只有在响应式依赖发生改变时才会重新求值，也就是说如果productList永远不发生改变的话，那么每次访问上面的productStatus计算属性都会返回之前计算好的结果，而不必再次去执行函数进行运算。也就是说计算属性会有缓存数据的功能。

比如下面的代码的计算属性将永远不会更新，因为 Date.now () 不是响应式依赖：

```js
computed: {
  now() {
    return Date.now()
  }
}
```

相比计算属性，使用方法的方式，每当触发重新渲染的时候，方法就总会再次被执行。如果模板中有N个方法调用，那么将调用N次。

**那么计算属性的缓存有什么优势呢？**

> 假设我们有一个性能开销比较大的计算属性 `list`，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 `list`。如果没有缓存，我们将不可避免的多次执行 `list` 的 getter！

这样在性能上就会好很多。