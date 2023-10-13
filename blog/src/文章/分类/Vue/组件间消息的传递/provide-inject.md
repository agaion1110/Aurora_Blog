---
icon: edit
date: 2023-07-27
category:
  - vue
tag:
  - 笔记
  - 面试题
star: 30727
sticky: false
copy.disableCopy: true
---

# 依赖注入（Provide—Inject）

`provide` 和 `inject` 通常成对一起使用，使一个祖先组件作为其后代组件的依赖注入方，无论这个组件的层级有多深都可以注入成功，只要他们处于同一条组件链上。

<!-- more -->

## Prop 逐级透传问题

通常情况下，当我们需要从父组件向子组件传递数据时，会使用 `props`。想象一下这样的结构：有一些多层级嵌套的组件，形成了一颗巨大的组件树，而某个深层的子组件需要一个较远的祖先组件中的部分数据。在这种情况下，如果仅使用 props 则必须将其沿着组件链逐级传递下去，这会非常麻烦：

![](https://cn.vuejs.org/assets/prop-drilling.11201220.png)

注意，虽然这里的 `<Footer>` 组件可能根本不关心这些 props，但为了使 `<DeepChild>` 能访问到它们，仍然需要定义并向下传递。如果组件链路非常长，可能会影响到更多这条路上的组件。这一问题被称为“prop 逐级透传”，显然是我们希望尽量避免的情况。

`provide` 和 `inject` 可以帮助我们解决这一问题。 一个父组件相对于其所有的后代组件，会作为**依赖提供者**。任何后代的组件树，无论层级有多深，都可以**注入**由父组件提供给整条链路的依赖。

![](https://cn.vuejs.org/assets/provide-inject.3e0505e4.png)

## Provide(提供)

要为组件后代提供数据，需要使用到 `provide()`函数：

```vue
<script setup>
import { ref, provide } from 'vue'
let hello = ref('hello!')
provide(/* 注入名 */ 'message', /* 值 */ hello)
</script>
```

`provide()` 函数接收两个参数。第一个参数被称为**注入名**，可以是一个字符串或是一个 `Symbol`。后代组件会用注入名来查找期望注入的值。一个组件可以多次调用 `provide()`，使用不同的注入名，注入不同的依赖值。

## Inject(注入)

要注入上层组件提供的数据，需使用 `inject()`函数：

```vue
<script setup>
import { inject } from 'vue'
const message = inject('message')
</script>
```

如果提供的值是一个 `ref`，注入进来的会是该 `ref` 对象，而**不会**自动解包为其内部的值。这使得注入方组件能够通过 `ref` 对象保持了和供给方的响应性链接。

## 案例：

### 父组件（Provide—提供）

```vue
<template>
  <div class="box">
    <h1>Provide与Inject{{car}}</h1>
    <hr />
    <Child></Child>
  </div>
</template>
<script setup lang="ts">
import Child from "./Child.vue";
//vue3提供provide(提供)与inject(注入),可以实现隔辈组件传递数据
import { ref, provide } from "vue";
let car = ref("法拉利");
//祖先组件给后代组件提供数据
//两个参数:第一个参数就是提供的数据key
//第二个参数:祖先组件提供数据
provide("TOKEN", car);
</script>
```

### 孙组件(Inject—注入)

```vue
<template>
  <div class="child1">
    <h1>孙子组件</h1>
    <p>{{car}}</p>
    <button @click="updateCar">更新数据</button>
  </div>
</template>

<script setup lang="ts">
import {inject} from 'vue';
//注入祖先组件提供数据
//需要参数:即为祖先提供数据的key
let car: any;
car = inject('TOKEN');//通过`TOKEN`键来获取爷爷组件存入的值
console.log(car);//这里就能数组来自父组件存入store的数据
const updateCar = ()=>{
   car.value  = '自行车';
}
</script>
```

