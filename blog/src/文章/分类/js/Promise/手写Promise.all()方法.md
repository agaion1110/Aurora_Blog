---
icon: edit
date: 2023-10-10
category:
  - js
tag:
  - Promise
  - 面试题
star: false
sticky: false
copy.disableCopy: true
---

# 手写Promise.all()方法

## 分析

对于常考面试题来说，手写`Promise.all()`是一道逃不开的面试题。

首先，我们要知道`Promise.all()`方法的性质和作用：

- **`Promise.all()`** 是一个静态方法接受一个 `Promise` 可迭代对象作为输入参数
- 返回一个`Promise`对象
- 当输入的`Promise`可迭代对象的每一个`Promise`都`resolve`后，`all()`方法返回将成功的`then`收集起来`resolve`返回
- 如果有一个`Promise`被拒绝，则返回的`Promise`将被拒绝，并带回第一个被拒绝的原因。

## 代码

```js
// 调用all方法
Promise.myAll = function(proms){
    //返回一个all方法
    return new Promise((res,rej)=>{
        let arr = [];
        //count用来记录all()参数的个数
        let count = 0;
        //fullCount用来记录参数内promise被兑现成功执行的个数，以此作为结束的条件
        let fullCount = 0;
        // for ... of 遍历数组内的所有值（必须用forof，它是所有可迭代对象都可以使用的循环方法）
        for (const item of proms) {
            //保存当前下标，利用闭包保证all()方法内的值的peomirse值按顺序存入arr结果数组
            const i = count;
            count++;
            // then方法放入微任务队列，等待循环全部执行完毕开始执行微任务队列的内容。
            Promise.resolve(item).then(r=>{
                arr[i] = r;
                //用来判断是否所有promise都执行完成
                fullCount++;
                //如果所有promise都执行完成，则执行res方法，将结果数组返回
                if(fullCount === count) {
                    res(arr);
                }
            },rej)
        }
        if(count === 0) res(arr);  
    })
}
```



