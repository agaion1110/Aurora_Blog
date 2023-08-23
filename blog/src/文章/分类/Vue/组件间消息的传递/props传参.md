---
icon: edit
date: 2023-07-26
category:
  - vue
tag:
  - 笔记
  - 面试题
star: false
sticky: false
copy.disableCopy: true
---

# Props传参

组件化编程作是Vue框架优势之一，而组件实例对象是相互独立的，这就意味着不同组件之间的数据无法直接引用。因此组件间通信成为学习使用Vue框架开发项目必不可少的技术点。Props 就是组件间传递消息的一种方式。

注意：props传递的数据在接收的一方是不能修改的。

<!-- more -->

## 父传子

1. Props 声明：子组件通过defineProps（）来声明和确定外部传入的是哪些props，而这些props是数据类型又是什么。
2. 父组件直接在被导入的子组件上添加自定义属性

子组件：

```vue
<script setup>
//需要使用到defineProps方法去接受父组件传递过来的数据
//defineProps是Vue3提供方法,不需要引入直接使用
const props = defineProps(['people'])//子组件中用defineProps声明了，传入的props数据是people。并用props接收传入的值
</script>
```

父组件：

```vue
<template>
  <Child :people="p" /><!-- 传递的people中是一个p对象数组 -->
</template>
<script setup>
import Child from "./Child.vue";
import { ref, reactive } from "vue";
const p = reactive([{name: "John",age: 21},{name: "张三",age: 22}])
</script>
```

## 子传父

在父组件中定义一个函数，并传递给子组件，当子组件调用时，即可将参数传递到父组件函数中执行处理。

父组件：

```vue
<template>
  <Child :foo="foo" />//传递的people中是一个foo函数
</template>
<script setup>
import Child from "./Child.vue";
function fun(v: any) {
 console.log("父组件收到了来自子组件传递的参数：",v);//当子组件调用foo函数时，v就是子组件中执行该函数时传递的参数
}
</script>
```

子组件：

```vue
<script setup>
const props = defineProps(['foo'])//子组件中用defineProps声明了，传入的props数据是foo。并用props接收传入的值
props.foo('我是子组件里的数据')//将要传递的值当作参数，并执行传入的foo函数
</script>
```

