---
icon: edit
date: 2023-10-26
category:
  - vue
tag:
  - 笔记
  - 面试题
star: false
sticky: false
copy.disableCopy: true
---

# Vue3的DOM Diff算法

在 Vue 3 中，采用了一种基于 Proxy 的 DOM Diff 算法，该算法称为“`Fragments`”。它与 Vue 2 中的 Virtual DOM Diff 算法有所不同。

Vue 3 的 DOM Diff 算法的主要思路是通过**跟踪和对比**组件的模板函数生成的更新函数来进行 DOM 更新。这个更新函数是通过编译模板生成的，它描述了组件在给定状态下应该呈现的 DOM 结构。

下面是 Vue 3 的 DOM Diff 算法的基本流程：

1. 组件状态更新：当组件的状态发生变化时，Vue 3 会**触发更新函数**的执行。
2. **执行更新函数**：更新函数会**生成一棵新的 DOM 树**，并与旧的 DOM 树进行**对比**。
3. 对比差异：Vue 3 会**使用 Proxy** 对新旧 DOM 树**进行逐节点的对比**，找出它们之间的差异。
4. **生成补丁**：根据差异的类型，Vue 3 会**生成一系列的 DOM 操作指令**，称为“补丁”。
5. 应用补丁：Vue 3 会将这些**补丁应用到实际的 DOM 元素上**，从而**更新视图**。

<!-- more -->

## Vue3的diff算法简介

讲`Diff算法`前，我先给大家讲一讲什么是`虚拟DOM`吧。这有利于后面大家对`Diff算法`的理解加深。`虚拟DOM`是一个`对象`，一个什么样的对象呢？**一个用来表示真实DOM的对象**，要记住这句话。

真实DOM节点：

```html
<ul id="list">
    <li class="item">哈哈</li>
    <li class="item">呵呵</li>
    <li class="item">嘿嘿</li>
</ul>
```

虚拟DOM节点：

```js
let oldVDOM = { // 旧虚拟DOM
    tagName: 'ul', // 标签名
    props: { // 标签属性
        id: 'list'
    },
    children: [ // 标签子节点
        {
            tagName: 'li', props: { class: 'item' }, children: ['哈哈']
        },
        {
            tagName: 'li', props: { class: 'item' }, children: ['呵呵']
        },
        {
            tagName: 'li', props: { class: 'item' }, children: ['嘿嘿']
        },
    ]
}
```





