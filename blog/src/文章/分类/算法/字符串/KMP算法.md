---
icon: edit
date: 2023-08-10
category:
  - 算法
tag:
  - leetcode
star: 3810
sticky: true
pageview: true
copy.disableCopy: true
---

# KMP算法

## 什么时KMP算法

**KMP算法是一种改进的字符串匹配算法**

由D.E.Knuth，J.H.Morris和      V.R.Pratt提出的，因此人们称它为克努特—莫里斯—普拉特操作（简称KMP算法）。

KMP的主要思想是**当出现字符串不匹配时，可以知道一部分之前已经匹配的文本内容，可以利用这些信息避免从头再去做匹配了。**

所以如何记录已经匹配的文本内容，是KMP的重点，也就是next数组。

<!-- more -->

## next数组

next数组其实就是**模式字符串（模式串）的前缀表`prefix`**，前缀表是用来回退的，它记录了模式串与主串(文本串)不匹配的时候，模式串应该从哪里开始重新匹配。

要弄懂这些，我们首先要了解一下几点问题：

> - 前缀：包含首位字符但不会包含末位字符的子串；
> - 后缀：包含末位字符但不包含首位字符的子串。
> - next数组的定义：当主串与模式串的某一字符不匹配时，模式串要回退的位置（**即在匹配过程中，当一次匹配失败时，下一次的匹配不不用冲模式串的第一位位开始匹配**）；
> - next[j]：其值 = 第j位字符前面j-1位字符组成的子串的前后重合字符数+1。
>

规律：

1. next[j]的值每次最多增加1
2. 模式串的组后一位字符不影响next数组的结果

求next[j]数组的代码：

```js
/**
 * @param {string[]} ch
 * @param {int} length
 * @param {int[]} next
 */
function getNext(needle) {
    let next = [];
    let j = 0;
    next.push(j);
    for (let i = 1; i < needle.length; ++i) {
        while (j > 0 && needle[i] !== needle[j])
            j = next[j - 1];
        if (needle[i] === needle[j])
            j++;
        next.push(j);
    }
    return next;
}
```

例：

```
	  j:1 2 3 4 5 6 
	  p:a b a b a ?(模式串最后一位对next[j]数组是没有影响的)
next[j]:0 1 1 2 3 4 
```

这里代码的主要思想是回溯，且next[i]值的意义是第i位字符前的字符串的最长公共前后缀的长度+1。

我们首先初始化`next[1]=0`，接着在`next[1]`基础上按顺序向后一一遍历，那么我们要求`next[i]`的值时，我们即已经知道`next[i-1]`的值假设它的值是`j`，那么接意味着在数组中从第`1`位第`i-2`位的最长相等前后缀是`j-1`，也就是说在模式串`next[1] ~ next[i-2]`的范围中：`1` ~ `j-1`和 `i-j+1` ~ `i-2`这两段长度为`j-1`的字符串是完全相等的。这是要分两种情况，即第`j`位字符和第`i-1`位字符相等，另一种是不相等：

1. 这时一旦第`j`位字符和第`i-1`位字符又相等的话，那么`next[i]`的最长公共前后缀就是`next[j-1]+1`,因为后缀多出来的一位字符和前缀多出来的一位字符相等，这是最长公共前后缀自然要加1。
2. 但如果此时第`j`位字符和第`i-1`位字符不相等，那么此时我们找第j位前的最长公共前后缀即`next[j]-1`，此时我们可以知道`next[0 ~ next[j-1]]` = `next[next[j-1]-j+1 ~ j]` 。也就是说，我们以`j`为分隔点，先将模式串前后分为两段，前后两段除追后一位不相等外其他完全相等，那么前半部分满足这样的等式，意味着后半部分同样满足着这样的等式，即此时我们得到模式串的前i-1项又四段相等的子串，第一段和第四段相等。即`next[0 ~ next[j-1]]` = `next[next[j]-i+1 ~ i-2]`。到了这里是否似曾相识，没错，这里就是回溯第一遍的结果，那么再一次出现两种情况，即第next[j-1]+1项和i-1项时否相等：
   1. 相等的话next[i]的最长公共前后缀，就是刚刚比较的两段子串的长度加1即`next[j-1]+1`。
   2. 若不相等，那么我们就需要再一次寻找相等的子串。此时将找到第`next[j-1]`位前的最长1公共前后缀。
3. 
    依次循环，知道找到相等，或者即将回溯到下标为0时停止递归，此时说明没有公共前后缀，那么赋值为1也就是j+1（因为此时j为0）。

## KMP模式匹配算法

```js
var strStr = function (haystack, needle) {
    if (needle.length === 0)
        return 0;
    let next = getNext(needle);
    let j = 0;
    for (let i = 0; i < haystack.length; ++i) {
        while (j > 0 && haystack[i] !== needle[j])
            j = next[j - 1];
        if (haystack[i] === needle[j])
            j++;
        if (j === needle.length)
            return (i - needle.length + 1);
    }
    return -1;
};
```

