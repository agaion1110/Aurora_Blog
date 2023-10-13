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

# Pinia— Vue 3的官方状态管理库

## 状态管理

### 什么是状态管理

**状态管理**指的是在应用程序中，对应用程序数据（即状态）进行有效组织、维护和更新的一系列技术和方法。它通常包括确定和记录应用程序所需的所有状态数据，以及管理这些数据的变化和使用。状态管理可以帮助开发人员设计和实现可维护性高、可扩展性好的应用程序，并提高应用程序的性能和用户体验。

Vue的状态管理称为Vue状态管理模式，是一种在Vue的核心框架中提供了一种将**状态与视图分离**的思想，以更好地管理应用程序的状态和数据。理论上来说，每一个 Vue 组件实例都已经在“管理”它自己的响应式状态了。我们以一个简单的计数器组件为例：

```vue
<!-- 视图 -->
<template>{{ count }}</template>
<script setup>
import { ref } from 'vue'
// 状态
const count = ref(0)
// 动作
function increment() {
  count.value++
}
</script>
```

它是一个独立的单元，由以下几个部分组成：

- **状态**：驱动整个应用的数据源；
- **视图**：对**状态**的一种声明式映射；
- **交互**：状态根据用户在**视图**中的输入而作出相应变更的可能方式。

下面是“单向数据流”这一概念的简单图示：

![单向数据流—状态管理机制](https://cn.vuejs.org/assets/state-flow.a8bc738e.png)

然而，当我们有**多个组件共享一个共同的状态**时，就没有这么简单了：

> 1. 多个视图可能都依赖于同一份状态。
> 2. 来自不同视图的交互也可能需要更改同一份状态。
>
> 注：即要实现组件间通信

对于情景 1，一个可行的办法是将共享状态“提升”到共同的祖先组件上去，再通过 props 传递下来。然而在深层次的组件树结构中这么做的话，很快就会使得代码变得繁琐冗长。

对于情景 2，我们经常发现自己会直接通过模板引用获取父/子实例，或者通过触发的事件尝试改变和同步多个状态的副本。但这些模式的健壮性都不甚理想，很容易就会导致代码难以维护。

**一个更简单直接的解决方案是抽取出组件间的共享状态，放在一个全局单例中来管理。**这样我们的组件树就变成了一个大的“视图”，而任何位置上的组件都可以访问其中的状态或触发动作。

### vue状态管理的优点

Vue状态管理具有以下优点：

1. 中心化管理数据，提高了程序的可维护性；
2. 在多个组件之间共享状态，提高了开发效率；
3. 支持强大的工具库，如Vuex、Pinia等，为状态管理提供了更多的扩展选项。

### vue状态管理使用场景

Vue状态管理是在应用程序变得比较复杂时，进行管理和优化的一种方式。在以下场景的时候，使用Vue状态管理将非常有用：

1. 应用程序中有一些共享状态需要维护；
2. 应用程序的复杂度日益提高，代码不好维护；
3. 多个组件中使用相同状态的时候，减少耦合度；
4. 需要对应用程序状态进行持久化存储；
5. 需要管理异步请求的状态时。

## Pinia

Pinia 是 Vue 的存储库，它允许跨组件/页面共享状态。

### 安装

```shell
npm install pinia
```

### 创建大仓库并引入安装

创建store文件夹，并在根目录创建`(index.ts/index.js)`用于创建大仓库

```ts
//创建大仓库
import { createPinia } from 'pinia';
//createPinia方法可以用于创建大仓库
let store = createPinia();
//对外暴露,安装仓库
export default store;
```

大仓库创建后需要在入口文件`（main.ts/main.js）`引入并安装：

```ts
//引入仓库
import store from './store'
// 创建app
const app = createApp(App)
app.use(store)//安装大仓库
```

### 创建小仓库

```typescript
//定义info小仓库
import { defineStore } from "pinia";
//第一个仓库:小仓库名字  第二个参数:小仓库配置对象
//defineStore方法执行会返回一个函数,函数作用就是让组件可以获取到仓库数据
let useInfoStore = defineStore("info", {
    //存储数据:state
    state: () => {
        return {
            count: 99,
            arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    },
    actions: {
        //注意:函数没有context上下文对象
        //没有commit、没有mutations去修改数据
        updateNum(a: number, b: number) {
            this.count += a;
        }
    },
    getters: {
        total() {
            let result:any = this.arr.reduce((prev: number, next: number) => {
                return prev + next;
            }, 0);
            return result;
        }
    }
});
//对外暴露方法
export default useInfoStore;
```

### 组件上的状态管理

Child1：

```vue
<template>
  <div class="child">
    <h1>{{ infoStore.count }}---{{infoStore.total}}</h1>
    <button @click="updateCount">点击我修改仓库数据</button>
  </div>
</template>
<script setup lang="ts">
import useInfoStore from "../../store/modules/info";
//获取小仓库对象
let infoStore = useInfoStore();
console.log(infoStore);
//修改数据方法
const updateCount = () => {
  //仓库调用自身的方法去修改仓库的数据
  infoStore.updateNum(66,77);
};
</script>
```

Child2:

```vue
<template>
  <div class="child1">
    {{ infoStore.count }}
    <p @click="updateTodo">{{ todoStore.arr }}{{todoStore.total}}</p>
  </div>
</template>

<script setup lang="ts">
import useInfoStore from "../../store/modules/info";
//获取小仓库对象
let infoStore = useInfoStore();

//引入组合式API函数仓库
import useTodoStore from "../../store/modules/todo";
let todoStore = useTodoStore();

//点击p段落去修改仓库的数据
const updateTodo = () => {
  todoStore.updateTodo();
};
</script>
```



