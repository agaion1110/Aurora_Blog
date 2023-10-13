---
icon: edit
date: 2023-07-25
category:
  - js
tag:
  - Promise
  - 面试题
star: 30725
sticky: true
copy.disableCopy: true
---

# 自定义（手写）Promise

在写Promise之前，先要熟悉Promise的各种属性和功能函数，然后一步一步去实现。

> Promise 是一个类，在实例化这个类的时候需要传递一个执行器executor进去，执行器会立即执行。
>
> Promise中有三种状态，分别是：*待定（pending）*、 *已兑现（fulfilled）* 、*已拒绝（rejected）*（状态一旦确定不可改变，称之为已*敲定（settled）*。）
>
> 执行器executor接收两个参数resolve(成功执行的方法)和reject(失败执行的方法)
>
> Promise拥有then方法，方法内部需判断状态，接收了两个回调函数，如果成功调用成功的回调（onResolve），如果失败调用失败的回调（onReject）。then方法是被定义在原型对象中的。
>
> Promise拥有catch方法，方法内部只接收失败的回调（onReject）。catch方法也是被定义在原型对象中的。

<!-- more -->

## Promise对象

### 构造函数

#### `Promise()`

创建一个新的 `Promise` 对象。该构造函数主要用于封装还没有添加 promise 支持的函数。

### 静态方法

#### `Promise.all()`

接受一个 Promise 可迭代对象作为输入，并返回单个 `Promise`。返回的 Promise 在所有输入的 Promise 都兑现时（包括传入的可迭代对象为空时）被兑现，其值为一个包含所有兑现值的数组。如果输入的任何 Promise 被拒绝，返回的 Promise 也会被拒绝，并返回第一个拒绝的原因。

#### `Promise.race()`

接受一个 Promise 可迭代对象作为输入，并返回单个 `Promise`。返回的 Promise 与第一个敲定的 Promise 的最终状态保持一致。

#### `Promise.reject()`

返回一个新的 `Promise` 对象，该对象以给定的原因拒绝。

#### `Promise.resolve()`

返回一个新的 `Promise` 对象，该对象以给定的值兑现。如果值是一个 thenable 对象（即具有 `then` 方法），则返回的 Promise 对象会“跟随”该 thenable 对象，采用其最终的状态；否则，返回的 Promise 对象会以该值兑现。

通常，如果你不知道一个值是否是 Promise，那么最好使用 `Promise.resolve(value)`]将其转换成 Promise 对象，并将返回值作为 Promise 来处理。

### 实例属性

这些属性定义在 `Promise.prototype` 上，由所有的 `Promise` 实例共享。

#### `Promise.prototype.constructor`

创建实例对象的构造函数。对于 `Promise` 实例，初始值为 `Promise` 构造函数。

#### `Promise.prototype[@@toStringTag]`

`@@toStringTag` 属性的初始值为字符串 `"Promise"`。该属性用于 `Object.prototype.toString()`。

### 实例方法

#### `Promise.prototype.catch()`

将一个拒绝处理回调函数附加到 Promise 上，并返回一个新的 Promise，如果回调被调用，则解决为回调的返回值，如果 Promise 被兑现，解决为其原始兑现值。

#### `Promise.prototype.then()`

将一个兑现处理器和拒绝处理器附加到 Promise 上，并返回一个新的 Promise，解决为调用处理器得到的返回值，或者如果 Promise 没有被处理（即相关处理器 `onFulfilled` 或 `onRejected` 不是函数），则以原始敲定值解决。

## 手写Promise对象

### 定义整体结构

根据已有的属性和方法先搭建Promise类及其属性方法的框架。

```js
class Promise {
    // 对象实例化的构造方法
    constructor(exectuor) {}
    // 添加then方法
    then(onResolve, onReject) {}
    // 添加catch方法
    catch(onReject) {}
    // 添加resolve方法（静态）
    static resolve(value) {}
    // 添加reject方法（静态）
    static reject(reason) {}
    // 添加all方法（静态）
    static all(promises) {}
    // 添加race方法（静态）
    static race(promises) {}
}
```

### 构造函数constructor

Promise 构造函数只有一个参数，是一个函数，我们将它命名为executor( )。这个函数在构造之后会直接被运行，所以我们称之为起始函数。起始函数包含两个参数 resolve 和 reject。

```js
// 实例化promise对象后，首先给promise对象添加属性并初始化
this.promiseState = 'pending';
this.promiseResult = null;
this.callbacks = [];
const that = this;//保存this
try {
    // 同步调用【执行器函数】
    exectuor(resolve, reject);
} catch (error) {
    // 修改promise对象状态为失败
    reject(error);
}
function resolve(data) {
    if (that.promiseState !== 'pending') return;//此时如果promise对象状态不是pending，说明已经改变过值，不能再一次改变状态
    // 改变状态
    that.promiseState = 'fulfilled';
    // 设置对象结果值
    that.promiseResult = data;
    // 调用成功的回调（即then方法中的回调函数）!!!异步执行
    setTimeout(() => {
        callbacks.forEach(item => {//为了提供链式调用的功能，我们把then中的两个回调函数封装为一个对象，加入callbacks数组中，在promise执行resolve时，依次全部调用成功的回调函数（即then方法参数的第一个参数）
            item.onResolve(data);
        });
    });
}
function reject(err) {
    if (that.promiseState !== 'pending') return;
    that.promiseState = 'fulfilled';
    that.promiseResult = err;
    setTimeout(() => {
        callbacks.forEach(item => {
            item.onReject(err);//此时调用所有失败的回调函数
        });
    });
}
```

### then方法

`.then()` 方法最多接受两个参数；第一个参数是 Promise 兑现时的回调函数，第二个参数是 Promise 拒绝时的回调函数。每个 `.then()` 返回一个新生成的 Promise 对象，这个对象可被用于链式调用。

即使 `.then()` 缺少返回 Promise 对象的回调函数，处理程序仍会继续到链的下一个链式调用。这里就需要我们认为给补上一个回调函数，并抛出错误。因此，在最终的 `.catch()` 之前，可以安全地省略每个链式调用中处理*已拒绝*状态的回调函数。

```js
const self = this
// 判断回调函数参数
if (typeof onReject !== 'function') {
    onReject = reason => {
        throw reason;
    }
}
if (typeof onResolve !== 'function') {
    onResolve = reason => {
        throw reason;
    }
}
return new Promise((resolve, reject) => {
    // 封装函数
    function callback(type) {
        try {
            // 获取回调函数的执行结果
            let result = type(self.promiseResult)
            if (result instanceof Promise) {
                // 如果返回的结果是一个新的promise，那么新promise的结果就是原promise的then的promise的结果
                result.then(v => {
                    resolve(v);
                }, r => {
                    reject(r);
                })

            } else {
                resolve(result)
            }
        } catch (error) {
            reject(error)
        }
    }
    // 调用回调函数
    if (this.promiseState === 'fulfilled') {
        setTimeout(() => {
            callback(onResolve)
        });
    }
    if (this.promiseState === 'reject') {
        setTimeout(() => {
            callback(onReject)
        });
    }
    // 判断pending状态
    if (this.promiseState === 'pending') {
        this.callbacks.push({
            onReject: function () {
                // 执行成功回调函数
                callback(onReject)
            },
            onResolve: function () {
                // 执行成功回调函数
                callback(onResolve)
            },
        })
    }
})
```

### catch方法

`.catch()` 其实就是一个没有为 Promise 时的回调函数留出空位的 `.then()`。将一个拒绝处理回调函数附加到 Promise 上，并返回一个新的 Promise，如果回调被调用，则解决为回调的返回值，如果 Promise 被兑现，解决为其原始兑现值。

```js
// 添加catch方法
catch(onReject) {
    return this.then(undefined, onReject);//catch方法就是补上空位，并执行then方法中的第二个回调
}
```

### 静态Resolve方法

返回一个新的 `Promise` 对象，该对象以给定的值兑现。

```js
// 添加resolve方法（静态）
static resolve(value) {
    return new Promise((resolve, reject) => { 
        if (value instanceof Promise) { //如果value是promise对象，那么返回的promise对象状态和值为就是该promise对象的状态和值
            value.then(v => {
                resolve(v);
            }, r => {
                reject(r);
            })
        } else {
            resolve(value);//如果value不是promise对象，那么返回的promise对象状态为成功，值就为传入的值
        }
    })
}
```

### 静态Reject方法

返回一个新的 `Promise` 对象，该对象以给定的原因拒绝。

```js
// 添加reject方法（静态）
static reject(reason) {
    return new Promise((reason, reject) => { 
        reject(reason);
    })
}
```

### 静态all方法

接受一个 `Promise` 可迭代对象作为输入，并返回单个 `Promise`。返回的  `Promise`在所有输入的  `Promise`都兑现时（包括传入的可迭代对象为空时）被兑现，其值为一个包含所有兑现值的数组。如果输入的任何  `Promise`被拒绝，返回的  `Promise`也会被拒绝，并返回第一个拒绝的原因。

```js
// 添加all方法（静态）
static all(promises) {
    let arr = [];//用于收集所有promise对象的结果
    let count = 0;//用于统计已经收集到的数量
    return new Promise((resolve, reject) => { 
        // 遍历所有promise
        promises.forEach(item => {
            item.then(v => {
                count++;
                arr[i] = v;//安装promises数组内的顺序，依次将数组里promise对象的结果存入arr中
                if (count === promises.length) { 
                    resolve(arr);//当所有promise都成功执行并保存了结果之后调用新promise对象的resolve改变状态并赋值
                }
            }, r => {
                reject(r)
            })
        });
    })
}
```

### 静态race方法

接受一个 `Promise`可迭代对象作为输入，并返回单个 `Promise`。返回的 `Promise`与第一个敲定的 `Promise`的最终状态保持一致。

```js
// 添加race方法（静态）
static race(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(item => {
            item.then(v => {
                // 直接修改返回对象的状态为  成功(因为一个promise对象的状态一旦修改就不能再改变)
                resolve(v);
            }, r => {
                reject(r)
            })
        });
    })
}
```

## 代码

```js
class Promise {
    // 对象实例化的构造方法
    constructor(exectuor) {
        // 实例化promise对象后，首先给promise对象添加属性并初始化
        this.promiseState = 'pending';
        this.promiseResult = null;
        this.callbacks = [];
        const that = this;//保存this
        function resolve(data) {
            if (that.promiseState !== 'pending') return;//此时如果promise对象状态不是pending，说明已经改变过值，不能再一次改变状态
            // 改变状态
            that.promiseState = 'fulfilled';
            // 设置对象结果值
            that.promiseResult = data;
            // 调用成功的回调（即then方法中的回调函数）!!!异步执行
            setTimeout(() => {
                that.callbacks.forEach(item => {//为了提供链式调用的功能，我们把then中的两个回调函数封装为一个对象，加入callbacks数组中，在promise执行resolve时，依次全部调用成功的回调函数（即then方法参数的第一个参数）
                    item.onResolve(data);
                });
            });
        }
        function reject(data) { 
            if (that.promiseState !== 'pending') return;
            that.promiseState = 'rejected';
            that.promiseResult = data;
            setTimeout(() => {
                that.callbacks.forEach(item => {
                    item.onReject(data);//此时调用所有失败的回调函数
                });   
            });
        }
        try {
            // 同步调用【执行器函数】
            exectuor(resolve, reject);
        } catch (error) {
            // 修改promise对象状态为失败
            reject(error);
        }
    }
    // 添加then方法
    then(onResolve, onReject) {
        // 保存this
        const self = this;
        // 判断是否传了onResolve回调函数，如果没传，则添加一个
        if (typeof onResolve !== 'function') { 
            onResolve = reason => {//因为没有传，则默认是一个失败的函数，直接抛出错误
                throw reason;
            }
        }
        // onReject同理
        if (typeof onReject !== 'function') { 
            onReject = reason => {
                throw reason;
            }
        }
        // then方法返回值必然是一个新的promise对象，
        return new Promise((resolve, reject) => {
            // 封装一个调用回调函数的函数，参数为回调函数
            function use(type) {
                try {
                    let result = type(self.promiseResult)
                    if (result instanceof Promise) { //如果回调函数有返回值且为promise对象，那么该promise对象的状态就是回调函数返回值对象状态，值也如此。
                        result.then(v => {
                            resolve(v)//此时修改回调函数返回值状态
                        }, r => {
                            reject(r);
                        })
                    } else {//如果回调函数没有返回值，则回调函数返回值状态设置为成功，值为对象执行的结果值
                        resolve(result);
                    }
                } catch (error) {//如果回调函数抛出错误，则设置回调函数状态为失败。
                    reject(error);
                }
            }
            // 调用回调函数(必须异步执行回调)
            if (this.promiseState === 'fulfilled') {
                setTimeout(() => {
                    use(onResolve)   
                });
            }
            if (this.promiseState === 'rejected') {
                setTimeout(() => {
                    use(onReject)
                });
            }
            if (this.promiseState === 'pending') { 
                //保存回调函数
                self.callbacks.push({
                    onResolve: function () {
                        use(onResolve);
                    },
                    onReject: function () { 
                        use(onReject);
                    }
                })
            }
        })
    }
    // 添加catch方法
    catch(onReject) {
        return this.then(undefined, onReject);
    }
    // 添加resolve方法（静态）
    static resolve(value) {
        return new Promise((resolve, reject) => { 
            if (value instanceof Promise) { //如果value是promise对象，那么返回的promise对象状态和值为就是该promise对象的状态和值
                value.then(v => {
                    console.log(v,'success')
                    resolve(v);
                }, r => {
                    console.log(r,'error')
                    reject(r);
                })
            } else {
                resolve(value);//如果value不是promise对象，那么返回的promise对象状态为成功，值就为传入的值
            }
        })
    }
    // 添加reject方法（静态）
    static reject(reason) {
        return new Promise((resolve, reject) => { 
            reject(reason);
        })
    }
    // 添加all方法（静态）
    static all(promises) {
        let arr = [];//用于收集所有promise对象的结果
        let count = 0;//用于统计已经收集到的数量
        return new Promise((resolve, reject) => { 
            // 遍历所有promise
            promises.forEach(item => {
                item.then(v => {
                    count++;
                    arr[i] = v;//安装promises数组内的顺序，依次将数组里promise对象的结果存入arr中
                    if (count === promises.length) { 
                        resolve(arr);//当所有promise都成功执行并保存了结果之后调用新promise对象的resolve改变状态并赋值
                    }
                }, r => {
                    reject(r)
                })
            });
        })
    }
    // 添加race方法（静态）
    static race(promises) {
        return new Promise((resolve, reject) => {
            promises.forEach(item => {
                item.then(v => {
                    // 直接修改返回对象的状态为  成功(因为一个promise对象的状态一旦修改就不能再改变)
                    resolve(v);
                }, r => {
                    reject(r)
                })
            });
        })
    }
}
```

