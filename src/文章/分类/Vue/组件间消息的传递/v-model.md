---
icon: edit
date: 2023-07-27
category:
  - vue
tag:
  - 笔记
  - 面试题
star: false
sticky: false
copy.disableCopy: true
---

# 组件v-mdodel传数据

## v-model在原生元素上的用法

`v-model` 可以在组件上使用以实现双向数据绑定。

首先让我们回忆一下 `v-model` 在原生元素上的用法：

```vue
<input v-model="searchText" />
```

它会被vue框架展开为下面的形式：

```vue
<input
  :value="searchText"
  @input="searchText = $event.target.value"
/>
```

<!-- more -->

## v-model在组件上的运用（父子组件间数据传递）

### 父组件中绑定`v-model`：

```vue
<Child v-model="money"></Child>
<!-- 下面代码在展开式中展示 -->
```

它将同样被展开成：

```vue
<template>
  <Child :modelValue="money" @update:modelValue="handler"></Child>
</template>
<script setup>
import Child from "./Child.vue";
import { ref, reactive } from "vue";
let money = ref(1000)
const handler = (value)=>{
    money.value = value//当子组件触发update:modelValue事件后触发hanler函数，并在函数中修改父组件money值
}
</script>
```

即要让这个例子实际工作起来，`<Child>` 组件内部需要做两件事：

1. 将`<Child>`内部元素的 `money` 属性绑定到 `modelValue` prop
2. 当原生的 `input` 事件触发时，触发一个携带了新值的 `update:modelValue` 自定义事件

### 子组件接收父组件传递的props和自定义事件

```vue

<template>
  <h3>money:{{ modelValue }}</h3>
  <button @click="handler2">在子组件中改变money值</button>
</template>
<!-- Child.vue -->
<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const handler2 = ()=>{
    //触发自定义事件,传回给父组件的值是每次加1000
    emit('update:modelValue',props.modelValue+1000)
}
</script>

```

## `v-model` 的参数

默认情况下，`v-model` 在组件上都是使用 `modelValue` 作为 prop，并以 `update:modelValue` 作为对应的事件。我们可以通过给 `v-model` 指定一个参数来更改这些名字：

```vue
<Child v-model:title="bookTitle" />		
```

在这个例子中，子组件应声明一个 `title` prop，并通过触发 `update:title` 事件更新父组件值：

```vue
<template>
  <!-- 给input标签双向绑定一个值为父组件传给子组件的props值，绑定一个原生事件input事件，事件触发后执行的函数时父组件传给子组件的自定义函数 -->
  <input type="text" :value="title" @input="$emit('update:title', $event.target.value)" />
</template>
<!-- MyComponent.vue -->
<script setup>
defineProps(['title'])
defineEmits(['update:title'])
</script>
```

