---
icon: edit
date: 2023-07-01
category:
  - js
tag:
  - 面试题
star: false
sticky: false
copy.disableCopy: true
---

# JavaScript中的This

## this关键字

::: tip

> "this"关键字在不同的编程语言中有不同的意义，但通常它指的是当前对象的引用。
>
> 在面向对象的编程语言中，每个对象都有一个指向自身的隐式引用，称为"this"指针或"this"关键字。通过使用"this"关键字，对象可以访问自己的属性和方法。它是访问当前对象的成员的一种方式。
>
> 在JavaScript中，this关键字引用当前执行代码的对象。但是，在不同的上下文中，this的值可能会有所不同。在对象方法中，this引用的是调用该方法的对象；在全局作用域中，this引用的是全局对象（通常是window对象）。
>
> 总结起来，"this"关键字用于访问当前对象的成员或指向当前执行代码的对象。

:::

在绝大多数情况下，函数的调用方式决定了this的值（运行时绑定）。this不能在执行期间被赋值，并且在每次函数被调用时ths的值也可能会不同。

<!-- more -->

## 确认this的值

### 在全局执行环境中 | 全局上下文（this值为全局对象）

无论是否在严格模式下，在全局执行环境中（在任何函数体外部）`this` 都指向全局对象。

```js
console.log(this);// 这里的this在浏览器中指向window，在node环境中指向globalThis(全局对象)
var a = 666;
console.log(window.a);// 666

this.b = 777;
console.log(b); // 777;
console.log(window.b); // 777;
```

### 在函数执行环境中，取决于函数被调用的方式

在函数内部，`this`的值取决于函数被调用的方式。

#### 直接调用的this

```js
// 非严格模式
function fn(){
    console.log(this);
}
fn();//这里this值为window

//严格模式下
fucntion fn(){
	'use strict'
    console.log(this);
}
fn();//此处调用this值为undefined
```

#### 对象方法调用的this

```js
// 非严格模式下
let obj = {
	a: 666,
    fn: function (){
		console.log(this);
    }
    fx: function (){
        'use strict'
		console.log(this);
    }
}
obj.fn();//这样调用方式，this指向为obj
obj.fx();//这样调用函数，其中this任然是obj
```

## 指定this的值

### 调用时指定：

#### call方法

[`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function) 实例的 **`call()`** 方法会以给定的 `this` 值和逐个提供的参数调用该函数。

**语法：**

```js
call(thisArg, arg1, arg2, /* …, */ argN)
/**
参数: thisArg
在调用 func 时要使用的 this 值。如果函数不在严格模式下，null 和 undefined 将被替换为全局对象，并且原始值将被转换为对象。

参数: arg1, …, argN 可选
调用函数的原参数。

返回值:使用指定的 this 值和参数调用函数后的结果。
*/
```

**应用：**

```js
function fn(a,b){
	console.log(this.name);
    console.log(a,b);
}
const person = {
	name: '张三'
}
// 现在我们想让fn函数中的this指向person输出name
fn.call(person,a,b);//这样我们就绑定了fn函数的this为person
```

#### apply方法

[`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function) 实例的 **`apply()`** 方法会以给定的 `this` 值和作为数组（或[类数组对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#使用类数组对象)）提供的 `arguments` 调用该函数。

**语法：**

```js
apply(thisArg)
apply(thisArg, argsArray)
/**
参数:thisArg
调用 func 时提供的 this 值。如果函数不处于严格模式，则 null 和 undefined 会被替换为全局对象，原始值会被转换为对象。

参数:argsArray 可选
一个类数组对象，用于指定调用 func 时的参数，或者如果不需要向函数提供参数，则为 null 或 undefined。

返回值:使用指定的 this 值和参数调用函数的结果。
*/
```

**应用：**

```js
function fn(a,b){
	console.log(this.name);
    console.log(a,b);
}
const person = {
	name: '张三'
}
// 现在我们想让fn函数中的this指向person输出name
fn.apply(person,[a,b]);//这样我们就绑定了fn函数的this为person
```

#### 总结：

> 在调用函数时指定函数内部this的值所用的两种函数内置的方法本质上没用区别，唯一的区别在于传参时，apply方法传参是用数组将参数意义包裹了起来。

### 创建时指定：

#### bind方法

[`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function) 实例的 **`bind()`** 方法创建一个新函数，当调用该新函数时，它会调用原始函数并将其 `this` 关键字设置为给定的值，同时，还可以传入一系列指定的参数，这些参数会插入到调用新函数时传入的参数的前面。

**语法：**

```js
bind(thisArg)
bind(thisArg, arg1, arg2, /* …, */ argN)
/**
参数:thisArg
在调用绑定函数时，作为 this 参数传入目标函数 func 的值。如果函数不在严格模式下，null 和 undefined 会被替换为全局对象，并且原始值会被转换为对象。如果使用 new 运算符构造绑定函数，则忽略该值。

参数:arg1, …, argN 可选
在调用 func 时，插入到传入绑定函数的参数前的参数。

返回值:使用指定的 this 值和初始参数（如果提供）创建的给定函数的副本。
*/
```

**应用**：

```js
function fn(a,b){
	console.log(this.name);
    console.log(a,b);
}
const person = {
	name: '张三'
}
// 现在我们想让fn函数中的this指向person输出name
const bindFn = fn.bind(person,a);//这里我们将fn内部this指向person，并赋值给新的变量bindFn
bindFn(b);//在调用 bindFn 时，插入到传入绑定函数的参数前的参数。
```

#### 箭头函数

这里我们记住一句话，箭头函数中的this要在父级作用域中去寻找

```js
const obj = {
	name: '张三',
    get() {
		console.log(this);//这里的get函数以对象.方法的定时调用，this将指向调用它的对象
        setTimeOut(function () {
            console.log(this);//此处的函数为直接调用，并没有在对象中以方法的形式调用，所以在非严格模式下，这里的this值为window
        },1000)
    }
    get1 {
    	console.log(this);//这里的get1函数以对象.方法的定时调用，this将指向调用它的对象
        setTimeOut(() => {
            console.log(this);//此处函数一箭头函数调用，在调用时它的指向将询问它的父级作用域，即get1函数中this指向。
        },1000)
	}
}
obj.get();
obj.get1();
obj.get2();
```

