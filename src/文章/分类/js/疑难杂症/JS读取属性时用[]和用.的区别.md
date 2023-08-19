---
icon: edit
date: 2022-02-20
category:
  - js
tag:
  - js基础
  - 面试题
star: 2220
sticky: false
copy.disableCopy: true
---

# js对象中取属性值用“ . ”和用[ \]的区别

对象的属性和方法统称为对象的成员。

> - **在JavaScript中，可以使用“ . ”和“ [ ] ”来访问对象的属性。**
> - **在JavaScript中，只能用“ . ”来访问对象的方法。**
<!-- more -->
```javascript
let p{
    name: '张三',
	age: 18,
	sex：'男'
    666: 'liuliuliu'
}
//用[]读取p对象中的某一个属性
function read(target){
    console.log(p[target])//这里target是一个变量
}
read(name)//-->张三
read(age)//-->18
read(sex)//-->男
read(666)//-->liuliuliu
console.log(p.666)//报错
```

相同点：都可以获取到object的属性值

不同点：

1. [ ]运算符可以使用字符串变量的内容作为属性名，点运算符不能
2. [ ]运算符可以用纯数字作为属性名，点运算符不能
3. [ ]运算符可以用js关键字和保留字作为属性名，点运算符不能

总结：对于一般的常量就使用（.）运算符，对于其他的使用[ ]运算符。