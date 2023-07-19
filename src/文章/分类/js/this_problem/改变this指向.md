---
icon: edit
date: 2023-07-01
category:
  - js
tag:
  - this指向问题
  - 面试题
star: true
sticky: true
copy.disableCopy: true
---

#  改变this指向
箭头函数,不能改变this指向,只有普通function函数,能改变this指向，想要真正改变this指向还得另寻他法
<!-- more -->

## 改变this指向的方法

1.  call()方法
   语法: 函数.call(参数1,其他参数....可以是多个或者没有 )
   作用: 调用并且执行函数,同时,将函数的this指向,定义为指定的内容(参数1)
           参数1,是改变的this的指向
           其他参数,是原始函数的实参,原始函数有几个形参,此时就要对应的输入几个实参,没有形参,就没有实参

2. apply()方法
   语法: 函数.apply(参数1,参数2)  只有两个参数
           参数1:改变的this的指向内容
           参数2:原始函数的实参,必须是一个数组的形式,将实参定义成数组的单元
   其他用法和作用于 .call是相同的

   总结: call方法与apply方法,作用,效果,都是完全一致的
           只是对于原始函数的参数赋值方法,不同
           call方法是通过其他多个参数来实现
           apply方法是通过一个数组参数,来实现
           两个方法没有本质的区别,爱用哪个用那个

3.  bind()方法
   语法: const 变量 = 函数.bind(参数1);
   作用：不是立即执行函数（下一篇博客有介绍 立即执行函数）

   ​			生成一个新的函数,这个新的函数是改变this指向之后的新的函数

   ​			参数1,定义的要改变的的this指向
   ​			其他参数,一般不定义,是使用函数原有的形参

​		总结:
​    		call apply 都是立即执行函数
​        		参数1,都是改变的this指向
​       		 其他参数,是原始函数的形参(可以有,也可以没有)
​    		bind 不是立即执行函数,是生成一个新的函数
​        		参数1,是改变的this指向
​        		就使用原始函数的形参

```javascript
const obj1 = {
    name:'张三',
    age:18,
    sex:'男',
}

const obj2 = {
    name:'李四',
    fun2 : function(){
        console.log(this);
    }
}
// 对象中的函数,this指向的是这个对象,obj2
obj2.fun2();
// 改变this指向,指向的是obj1这个对象
// 代用,并且执行fun2这个函数,同时将fun2的this指向,从原始的obj2,改变为obj1
obj2.fun2.call(obj1);

// 带有参数的函数,this指向的改变

// 定义的带有参数的普通函数
function fun3(name,age,sex){
    console.log(name,age,sex,this);
}
// 执行时,输出实参,此时this指向是window
fun3('张三',18,'男');

// 改变this指向 , call方法
fun3.call(obj1,'李四',20,'女');

// 改变this指向 , apply方法
fun3.apply(obj1 , [ '王五' , 20 , '不知道' ])

// bind方法,不是立即执行函数,而是定义生成一个新的函数
// 新生成的函数,this指向是参数1
// 新生成的函数,形参是原始函数fun3的形参
const fun4 = fun3.bind(obj1);
fun4('王二麻子' , 100 , '不详');
```



