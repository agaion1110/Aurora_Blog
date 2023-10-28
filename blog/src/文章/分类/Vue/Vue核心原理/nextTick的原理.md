---
icon: edit
date: 2023-10-14
category:
  - vue
tag:
  - 笔记
  - 面试题
star: false
sticky: false
copy.disableCopy: true
---

# nextTick的使用和基本原理

## 什么是nextTick()

应用官网文档的定义：等待下一次 DOM 更新刷新的工具方法。

类型：
```js
function nextTick(callback>: ()=> void): Promise<void>
```

当你在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中，直到下一个“tick”才一起执行。这样是为了确保每个组件无论发生多少状态改变，都仅执行一次更新。

`nextTick()` 可以在状态改变后立即使用，以等待 DOM 更新完成。你可以传递一个回调函数作为参数，或者 await 返回的 Promise。

示例：

```html
<script setup>
import { ref, nextTick } from 'vue'
const count = ref(0)
async function increment() {
  count.value++

  // DOM 还未更新
  console.log(document.getElementById('counter').textContent) // 0

  await nextTick()
  // DOM 此时已经更新
  console.log(document.getElementById('counter').textContent) // 1
}
</script>

<template>
  <button id="counter" @click="increment">{{ count }}</button>
</template>
```

## 应用场景

- 在Vue生命周期的`created()`钩子函数进行的DOM操作一定要放在`Vue.nextTick()`的回调函数中，因为再这个证明周期中，dom的更新还没有开始，此时创建的是数据检测和数据代理。

在`created()`钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以此处一定要将DOM操作的js代码放进`Vue.nextTick()`的回调函数中（或者await nextTIck()之后）。与之对应的就是`mounted()`钩子函数，因为该钩子函数执行时所有的DOM挂载和渲染都已完成，此时在该钩子函数中进行任何DOM操作都不会有问题 。

- 在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进`Vue.nextTick()`的回调函数中。

## 原理解析

因为 vue 采用的**异步更新策略**，当监听到数据发生变化的时候不会立即去更新DOM，而是开启一个任务队列，并缓存在同一事件循环中发生的所有数据变更。这种做法带来的好处就是可以将多次数据更新合并成一次，减少操作DOM的次数，如果不采用这种方法，假设数据改变100次就要去更新100次DOM，而频繁的DOM更新是很耗性能的；

在Vue 3中，`nextTick`是一个用于在**下一个 UI 渲染周期之后** ***执行回调函数***的方法。它的原理可以通过以下步骤进行解释：

1. 当你调用`nextTick(callback)`时，Vue 将会将该回调函数添加到一个队列中，而不是立即执行它。（微任务队列）
2. Vue 会跟踪当前是否已经调度了一个微任务（microtask）来处理队列中的回调函数。如果没有，则会创建一个微任务。
3. 在当前的 JavaScript 执行上下文完成（microtask 执行时机）之后，Vue 将会执行微任务，并依次调用队列中的回调函数。
4. 执行回调函数时，Vue 会进行一次“刷新”，这意味着 Vue 会在内部更新组件状态和 DOM，以反映最新的数据变化。
5. 如果在回调函数中对数据进行了更改，Vue 会再次触发下一个 UI 渲染周期，以确保所有变更都得到正确地应用。

通过这种方式，Vue 3 的`nextTick`方法可以确保你的回调函数在 DOM 更新之后被调用，这样你就可以在回调函数中访问到最新的 DOM 状态。这对于在组件更新后执行异步操作或依赖于 DOM 状态的操作非常有用。

需要注意的是，Vue 3 中的`nextTick`方法使用了`Promise`和`MutationObserver`等底层机制来实现微任务的调度，以保证回调函数的执行时机。

`MutationObserver`是一个用于监视DOM树变化的JavaScript接口。它提供了一种异步观察DOM树更改的能力，并在这些更改发生时触发回调函数。

通过创建一个`MutationObserver`实例并将其绑定到DOM元素上，你可以监听到以下类型的DOM变化：

- 添加或删除元素节点
- 元素内容的变化
- 元素属性的变化
- 元素的样式变化
- 元素的尺寸变化
- ...

当观察到指定的DOM变化时，`MutationObserver`会调用你提供的回调函数，并传递一个`MutationRecord`对象的列表作为参数。每个`MutationRecord`对象表示一个特定的DOM变化，并提供了有关变化的详细信息，如变化类型、目标节点、相关的子节点等。

`MutationObserver`的使用步骤如下：

1. 创建一个`MutationObserver`实例，将其与要观察的DOM元素关联起来，并指定一个回调函数。
2. 在回调函数中处理DOM变化，并根据需要执行相应的操作。
3. 调用`MutationObserver`实例的`observe`方法，开始观察DOM变化。
4. 当指定的DOM变化发生时，`MutationObserver`会触发回调函数，并传递相应的`MutationRecord`对象列表。
5. 如果需要停止观察DOM变化，可以调用`MutationObserver`实例的`disconnect`方法。

`MutationObserver`提供了一种强大的机制来监听和响应DOM树变化，它在许多情况下都比传统的事件监听更加灵活和高效。它常用于实现一些需要在DOM变化时进行特定操作的功能，如自定义数据绑定、自动保存表单数据等。
