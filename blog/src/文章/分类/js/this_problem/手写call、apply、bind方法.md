---
icon: edit
date: 2023-07-05
category:
  - js
tag:
  - 面试题
star: false
sticky: false
copy.disableCopy: true
---

# 手写call、apply、bind方法

我们首先要知道这三种方法都是构建在Function对象的原型对象`prototype`上，这样每当我们创建一个函数都可以直接调用这三种方法。

<!-- more -->

## 手写call方法

手写一个myCall方法，要求实现call方法的所有功能。

1. 定义myCall方法
2. 设置this并调用原函数
3. 接收剩余参数并返回结果

**基本写法：**

```js
// 手写call方法
Function.prototype.myCall = function (context){
    // 保存this
    context = context || window;
    //这里的this即谁调用myCall方法就指向谁，也就是调用的func函数，所以再将func函数赋值给context环境一个新方法fn，使得func中this指向指向该方法所属的对象。
    context.fn = this;
    // 获取剩余参数
    const args = [...arguments].slice(1);
    // 执行函数
    const res = context.fn(...args);
    // 删除函数
    delete context.fn;
    return res;
}
const person = {
    name: 'zs'
}
function func(a, b) {
    // 此时this就指向了func的执行上下文，即person，又由于后期在person中删除了func方法，所有在输出的this即person对象中即看不出person对象曾添加了func这一新方法。
    console.log(this,'func函数内部的this指向')
    console.log(a, b)
    return a + b;
}
const res = func.myCall(person, 1, 2);
console.log('返回值为:', res);
```

::: waring

其实这里会存在一个问题，我们在`myCall`方法内部的新增方法必须是`context`执行环境（想要函数`this`指向的对象）中不存在的一个方法，一旦方法名重复，那么后面当我们再`myCall`方法中删除对象中该方法后对象中的方法也会被删掉，这样将不是一个安全的方法。因此我们在`myCall`方法中新增的这个暂时性方法必须取一个独一无二的名字不会与`context`对象中属性名冲突。这里我们就可以使用`Symbol()`方法。

:::

```js
// 手写call方法
Function.prototype.myCall = function (context){
    // 保存this
    context = context || window;
    const fn = Symbol('addFunction');
    //此时fn是一个symbol变量，它的值是独一无二的，绝对不会与context对象中的属性有冲突。
    context[fn] = this;
    const args = [...arguments].slice(1);
    const res = context[fn](...args);
    delete context[fn];
    return res;
}
const person = {
    name: 'zs',
    fn: 666
}
function func(a, b) {
    return a + b;
}
const res = func.myCall(person, 1, 2);
```

## 手写apply方法

与call方法一致，唯一的区别在于apply方法参数只有一个或两个，第二个一定是第一个函数的参数组成的数组。因此我们只需要对参数数组进行处理就能达到call方法的效果。

```js
// 手写apply方法
Function.prototype.myApply = function (context){
    // 保存this
    context = context || window;
    const fn = Symbol('addFunction');
    context[fn] = this;
    // 获取第二个参数，已知是一个数组
    const args = arguments[1];
    // 执行函数
    const res = context[fn](...args);
    // 删除函数
    delete context[fn];
    return res;
}
const person = {
    name: 'zs',
    fn: 666
}
function func(a, b) {
    return a + b;
}
const res = func.myApply(person, [1, 2]);
```

## 手写bind方法

这里需要注意的一点是bind在传参时，可以在一部分一部分地传参，我们最后通过bind返回的函数任然可以接受参数。

### 利用call方法

```js
// 手写bind方法
Function.prototype.myBind = function (context){
    const args1 = [...arguments].slice(1);
    // bind方法将生成一个函数，函数内部this指向context即指定的对象，函数体和参数不变
    return (...args)=>{
        // 这里的this由于在箭头函数中，因此向父级作用域寻找，而父级作用域(myBind)的this指向调用它的对象即func
        // 再通过call方法将func的this指向context
        return this.call(context, ...args,...args1);
    }
}
const person = {
    name: 'zs',
}
function func(a, b) {
    console.log(this,'func函数内部的this指向')
    return a + b;
}
const res = func.myBind(person, 1);
const res2 = func.bind(person, 1);
console.log(res(1), 'res');//2
console.log(res2(1), 'res2');//2
console.log('返回值为:', res(2));//3
```

### 全部手写

```js
// 手写bind方法
Function.prototype.myBind = function (context){
    const args1 = [...arguments].slice(1);
    // bind方法将生成一个函数，函数内部this指向context即指定的对象，函数体和参数不变
    return (...args)=>{
        const fn = Symbol('key');
        context[fn] = this;
        const res = context[fn](...args1,...args);
        delete context[fn];
        return res;
    }
}
const person = {
    name: 'zs',
}
function func(a, b) {
    console.log(this,'func函数内部的this指向')
    return a + b;
}
const res = func.myBind(person, 1, 2);
```

