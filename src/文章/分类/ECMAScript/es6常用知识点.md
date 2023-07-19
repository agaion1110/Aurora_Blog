---
icon: edit
date: 2023-06-23
category:
  - js
  - 学习笔记
  - ECMAScript
tag:
  - 笔记
  - es6
star: false
sticky: false
copy.disableCopy: true
---



# es6常用知识点

今天在做项目时用到了...语法来解构赋值，对其中一些细节有些模糊，所以重新复习了一遍。

<!-- more -->

## ...运算

在ES6中，"..."语法有多种用途，以下是一些常见的用法：

1. 展开语法(Spread Syntax)：用于将数组或对象展开成单个元素或多个元素。比如：

   - 展开数组：
     ```javascript
     const arr1 = [1, 2, 3];
     const arr2 = [...arr1, 4, 5, 6];
     console.log(arr2); // [1, 2, 3, 4, 5, 6]
     ```

   - 展开对象：
     ```javascript
     const obj1 = { name: 'Alice', age: 25 };
     const obj2 = { ...obj1, gender: 'female' };
     console.log(obj2); // { name: 'Alice', age: 25, gender: 'female' }
     ```

2. 剩余参数(Rest Parameters)：用于将可变数量的参数收集成一个数组。比如：

   ```javascript
   function sum(...numbers) {
     return numbers.reduce((total, num) => total + num, 0);
   }
   console.log(sum(1, 2, 3, 4, 5)); // 15
   ```

3. 解构赋值(Destructuring Assignment)：用来解构数组或对象的值。比如：

   - 解构数组：
     ```javascript
     const arr = [1, 2, 3, 4, 5];
     const [first, second, ...rest] = arr;
     console.log(first); // 1
     console.log(second); // 2
     console.log(rest); // [3, 4, 5]
     ```

   - 解构对象：
     ```javascript
     const obj = { name: 'Alice', age: 25, gender: 'female' };
     const { name, ...rest } = obj;
     console.log(name); // 'Alice'
     console.log(rest); // { age: 25, gender: 'female' }
     ```

以上是主要的"..."语法用法，它在ES6中提供了更方便和灵活的操作数组和对象的方式。

## 插值语法

在ES6中，插值语法也被称为模板字面量(template literals)，使用反引号（`）包裹字符串，其中可以使用`${}`语法来插入变量或表达式。

以下是插值语法的一些常见用法：

1. 插入变量：
```javascript
const name = 'Alice';
console.log(`Hello, ${name}!`); // Hello, Alice!
```

2. 插入表达式：
```javascript
const a = 2;
const b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}.`); // The sum of 2 and 3 is 5.
```

3. 多行字符串：
```javascript
const message = `
  Hello,
  It's a nice day.
  Have a good day!
`;
console.log(message);
/*
  Hello,
  It's a nice day.
  Have a good day!
*/
```

4. 嵌套插值：
```javascript
const name = 'Alice';
const message = `Hello, ${`My name is ${name}`}.`;
console.log(message); // Hello, My name is Alice.
```

通过插值语法，我们可以更方便地构建包含变量和表达式的字符串，使代码更易读和维护。

## 解构赋值

ES6中的解构赋值是一种简洁而强大的语法，用于从数组或对象中提取值并赋给变量。

1. 数组解构赋值：
```javascript
const numbers = [1, 2, 3];

const [a, b, c] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

2. 对象解构赋值：
```javascript
const person = {
  name: 'Alice',
  age: 25,
  city: 'New York'
};

const { name, age, city } = person;
console.log(name); // Alice
console.log(age); // 25
console.log(city); // New York
```

3. 设置默认值：
```javascript
const person = {
  name: 'Alice',
  age: 25
};

const { name, age, city = 'New York' } = person;
console.log(name); // Alice
console.log(age); // 25
console.log(city); // New York
```

4. 嵌套解构：
```javascript
const person = {
  name: 'Alice',
  age: 25,
  address: {
    street: '123 Main St',
    city: 'New York'
  }
};

const { name, age, address: { street, city } } = person;
console.log(name); // Alice
console.log(age); // 25
console.log(street); // 123 Main St
console.log(city); // New York
```

解构赋值使得从数组或对象中提取值变得非常简洁和易读，并可以轻松地获取嵌套结构中的值。它广泛应用于从函数返回的对象中提取所需的属性、处理API返回的数据等场景中。