---
icon: edit
date: 2023-08-19
category:
  - js
tag:
  - js基础
  - 面试题
star: false
sticky: false
copy.disableCopy: true
---

# JS的迭代

本文以一道面试题开场：`for-in`和`for-of`的区别？并说出下面代码输出什么，为什么？

```js
let babies = ['hpy', 'zs', 'yxz', 'hfcj', 'zpj', 'cfy', 'yxx', 'lyc', 'zls', 'yxn', 'cym'];
babies[Symbol.iterator] = function* (){
    let index = 0;
    while(index < this.length){
        index++;
        yield this[0];
    }
}
for(let baby of babies){
    console.log(baby); // ?
}
```

<!-- more -->

## 迭代协议

**迭代协议**并不是新的内置实现或语法，而是*协议*。这些协议可以被任何遵循某些约定的对象来实现。

> ES6新增了`Set`、`Map`类型，他们和`Array`、`Object`类型很像，`Array`、`Object`都是可以遍历的，但是`Set`、`Map`都不能用`for`循环遍历，解决这个问题有两种方案，一种是**为Set、Map单独新增一个用来遍历的API**，另一种是**为Set、Map、Array、Object新增一个统一的遍历API**。
>
> ES6选择使用一种设计标准，来统一所有可遍历类型的遍历方式。`Iterator`正是这样一种标准。

迭代协议具体分为两个协议：[可迭代协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)`(Iterable Protocols)`和[迭代器协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器协议)`(Iterator Protocols)`。

### 可迭代协议 | Iterable

> **可迭代协议允许 JavaScript 对象定义或定制它们的迭代行为**
>
> **要成为可迭代对象， 一个对象必须实现 `@@iterator` 方法。这意味着对象（或者它原型链上的某个对象）必须有一个键为** `@@iterator` **的属性，可通过常量** `Symbol.iterator`**访问该属性。**

`Symbol.iterator` 是一个无参数的函数，其返回值为一个**迭代器**。

```js
let arr = ['a', 'b'];
let it = arr[Symbol.iterator]();
it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }
```

###  符号 | Symbol

> **ES6 引入了一种新的原始数据类型`Symbol`，表示独一无二的值。**
>
> **Symbol 值通过`Symbol`函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。**
>
> **凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。**

```js
let a = Symbol('hpy');
// Symbol(hpy)
let b = Symbol('hpy');
// Symbol(hpy)
a == b;
// false
```

### 迭代器协议 | Iterator

> **迭代器协议定义了产生一系列值（无论是有限个还是无限个）的标准方式。当值为有限个时，所有的值都被迭代完毕后，则会返回一个默认返回值。**

**迭代器**含有 `next` 方法，该方法执行会返回一个包含 `done` 和 `value` 的对象。

```js
let it = makeIterator(['a', 'b']);it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }
function makeIterator(array) {
    let nextIndex = 0;
    return { 
        next: function() {
        return nextIndex < array.length ? {value: array[nextIndex++], done: false}:{value: undefined, done: 				true};
    	}
   	};
}
```

## 生成器 | Generator

**`Generator`** 对象由[生成器函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)返回并且它符合[可迭代协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)和[迭代器协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器协议)。

### 生成器函数 | function*

**`function*`** 这种声明方式 (`function`关键字后跟一个星号）会定义一个**生成器函数** (generator function)，它返回一个 [`Generator`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator) 对象。

**生成器**（函数）用于生成一个**迭代器**（对象）,*还有用于异步编程，熟知的`async/await`就是`generator`的语法*

```js
function* generator(i) {
  yield i;
  yield i + 10;
}
const gen = generator(10);
console.log(gen.next().value);// Expected output: 10
console.log(gen.next().value);// Expected output: 20
```

**语法：**

```js
/**
* name: 函数名
* @param 要传递给函数的一个参数的名称，一个函数最多可以有 255 个参数。
* statements 普通 JS 语句。
*/
function* name([param[, param[, ... param]]]) { statements }
```

##  常用场景

什么时候会调用 `Symbol.iterator` 方法呢？

### `for-of`循环 | `for-of` Iteration

```js
let babys = ['hpy', 'zs', 'yxz', 'hfcj', 'zpj', 'cfy', 'yxx', 'lyc', 'zls', 'yxn', 'cym'];
for(let baby of babys) {
    console.log(baby);
}
```

### 解构赋值 | Destructuring Assignment

```js
let set = new Set().add('cfy').add('zs').add('hpy');
let [x, y] = set;
let [first, ...rest] = set;
```

### 扩展运算符 | Spread Operator

扩展运算符是一种简便机制，可以将任何部署了 Iterator 接口的数据结构，转为数组。

```js
// 例一
var str = 'hello';
[...str] //  ['h','e','l','l','o']
// 例二
let arr = ['b', 'c'];
['a', ...arr, 'd']// ['a', 'b', 'c', 'd']
```

### 其他 | The Others

> - `Array.from()`
> - `Map(), Set(), WeakMap(), WeakSet()`（比如`new Map([['a',1],['b',2]])`）
> - `Promise.all()`
> - `Promise.race()`
> - `yield*`

## 总结

- 迭代协议的主要内容，可以用如下接口表示

```ts
interface Iterable {
    [Symbol.iterator]() : Iterator,
}
interface Iterator {
    next(value?: any) : IterationResult,
}
interface IterationResult {
    value: any,
    done: boolean,
}
```

- 对于`Iterable`的对象，可以使用`for-of`，`...`，**解构赋值**等操作。

### 回顾 | Review

回到开始的问题：

> - `for-in`是为了遍历 **键值对**(`key-value`)形式的对象的
> - `for-of`是为了遍历 所有实现了**迭代协议**的可迭代对象的