---
icon: edit
date: 2023-07-24
category:
  - 算法
tag:
  - leetcode
star: 3724
sticky: true
pageview: true
copy.disableCopy: true
---

# 螺旋矩阵 

### 题目

给你一个正整数 `n` ，生成一个包含 `1` 到 `n2` 所有元素，且元素按顺时针顺序螺旋排列的 `n x n` 正方形矩阵 `matrix` 。

<!--more-->

**示例 1：**

![img](https://assets.leetcode.com/uploads/2020/11/13/spiraln.jpg)

```js
输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
```

**示例 2：**

```js
输入：n = 1
输出：[[1]]
```

### 按层模拟解题思路

这段代码是一个生成螺旋矩阵的算法。它使用一个二维数组matrix来表示n行n列的矩阵，通过循环来逐步填充矩阵中的元素。

1. 首先，定义四个变量left、right、top和bottom，分别表示当前螺旋矩阵的左边界、右边界、上边界和下边界。另外，还有一个变量num用于记录当前要填充的数字。
2. 然后，通过一个while循环来依次填充矩阵中的元素。循环条件是num小于等于n*n，也就是还没有填充完所有的元素。
3. 在循环中:
   - 首先从左到右填充上边界，即从left到right-1，将数字num依次赋值给matrix[top][i]，同时num递增。将top递增，表示上边界向下移动一行。
   - 然后从上到下填充右边界，即从top到bottom-1，将数字num依次赋值给matrix[i][right]，同时num递增。将right递减，表示右边界向左移动一列。
   - 然后从右到左填充下边界，即从right到left+1，将数字num依次赋值给matrix[bottom][i]，同时num递增。将bottom递减，表示下边界向上移动一行。
   - 最后从下到上填充左边界，即从bottom到top+1，将数字num依次赋值给matrix[i][left]，同时num递增。将left递增，表示左边界向右移动一列。循环回到开始，直到所有的元素都被填充完。
4. 最后，返回生成的螺旋矩阵matrix。

### 代码

```javascript
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push([]);
    }
    let left = 0, right = n - 1, top = 0, bottom = n - 1;
    let num = 1;
    while (num <= n*n) {
        for (let i = left; i <= right; i++) matrix[top][i] = num++;
        top++;
        for (let i = top; i <= bottom; i++) matrix[i][right] = num++;
        right--;
        for (let i = right; i >= left; i--) matrix[bottom][i] = num++;
        bottom--;
        for (let i = bottom; i >= top; i--) matrix[i][left] = num++;
        left++;
    }
    console.log(matrix);
    return matrix;
};
```

### 模拟法解题思路

这段代码是用JavaScript编写的生成螺旋矩阵的函数。它使用一个二维数组`matrix`来表示n行n列的矩阵，通过循环逐步填充矩阵中的元素。

1. 首先，定义了一些变量。`maxNum`表示最大的数字，也就是矩阵中元素的个数；`curNum`表示当前要填充的数字；`matrix`是一个大小为n x n的二维数组，初始值都为0；`row`和`column`表示当前要填充的位置；`directions`是一个数组，表示四个方向的偏移量，分别是右、下、左、上；`directionIndex`表示当前的方向。
2. 然后，通过一个while循环来依次填充矩阵中的元素。循环条件是`curNum`小于等于`maxNum`，也就是还没有填充完所有的元素。
3. 在循环中：
   - 首先将当前位置的值设置为`curNum`，然后`curNum`递增。
   - 接着，计算下一个位置的行号和列号，即`nextRow = row + directions[directionIndex][0]`和`nextColumn = column + directions[directionIndex][1]`。
   - 如果下一个位置超出了矩阵的边界或者已经有值了（即不为0），则说明需要改变方向。这里通过`directionIndex = (directionIndex + 1) % 4`来顺时针旋转到下一个方向。
   - 最后，更新`row`和`column`的值为下一个位置的行号和列号，进入下一次循环。
4. 最终，返回生成的螺旋矩阵`matrix`。

### 代码

```js
var generateMatrix = function(n) {
    const maxNum = n * n;
    let curNum = 1;
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let row = 0, column = 0;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 右下左上
    let directionIndex = 0;
    while (curNum <= maxNum) {
        matrix[row][column] = curNum;
        curNum++;
        const nextRow = row + directions[directionIndex][0], nextColumn = column + directions[directionIndex][1];
        if (nextRow < 0 || nextRow >= n || nextColumn < 0 || nextColumn >= n || matrix[nextRow][nextColumn] !== 0) {
            directionIndex = (directionIndex + 1) % 4; // 顺时针旋转至下一个方向
        }
        row = row + directions[directionIndex][0];
        column = column + directions[directionIndex][1];
    }
    return matrix;
};
```



