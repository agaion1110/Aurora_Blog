<template><div><h1 id="用队列实现栈" tabindex="-1"><a class="header-anchor" href="#用队列实现栈" aria-hidden="true">#</a> 用队列实现栈</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（<code v-pre>push</code>、<code v-pre>top</code>、<code v-pre>pop</code> 和 <code v-pre>empty</code>）。</p>
<p>实现 <code v-pre>MyStack</code> 类：</p>
<ul>
<li><code v-pre>void push(int x)</code> 将元素 x 压入栈顶。</li>
<li><code v-pre>int pop()</code> 移除并返回栈顶元素。</li>
<li><code v-pre>int top()</code> 返回栈顶元素。</li>
<li><code v-pre>boolean empty()</code> 如果栈是空的，返回 <code v-pre>true</code> ；否则，返回 <code v-pre>false</code> 。</li>
</ul>
<p><strong>注意：</strong></p>
<ul>
<li>你只能使用队列的基本操作 —— 也就是 <code v-pre>push to back</code>、<code v-pre>peek/pop from front</code>、<code v-pre>size</code> 和 <code v-pre>is empty</code> 这些操作。</li>
<li>你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。</li>
</ul>
<p><strong>示例：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入：
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
输出：
[null, null, null, 2, 2, false]

解释：
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // 返回 2
myStack.pop(); // 返回 2
myStack.empty(); // 返回 False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>
<p>本题利用队列先进先出特点实现栈先进后出的功能。我们要把握队列两头进行数据操作，栈只能从一个口出入。</p>
<ol>
<li>入栈操作：队列也是直接push到队列数据的最后端。</li>
<li>出栈操作（重点）：队列中只能从出口端出数据，而先出的数据是队列先入的数据，而<strong>出栈操作要的元素是最后加入的一个元素</strong>所以在队列里我们想要拿到这个元素首先要做到的就是把这个元素前面的数据全部放到这个数据后面去，如果队列大小是size，我们需要移动size-1次才能把前面size-1给个数据移动到第size的数据后面，移动完成之后，我们就可以输出第一个数据，这就是出栈要拿到的数据。</li>
</ol>
<h1 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h1>
<ul>
<li>时间复杂度:</li>
</ul>
<blockquote>
<p>添加时间复杂度, 示例： <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></p>
</blockquote>
<ul>
<li>空间复杂度:</li>
</ul>
<blockquote>
<p>添加空间复杂度, 示例： <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></p>
</blockquote>
<h1 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h1>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>
var MyStack = function() {
    this.quene=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.quene.push(x);
};

/**
 * @return {number}
 */
//&lt;!-- 出栈操作 --&gt;
MyStack.prototype.pop = function() {
    let x =  this.getFirst()//先将队列先size-1个元素移动到队列第size个元素后面
    return this.quene.shift();//删除队列第一个元素
};

/**
 * @return {number}
 */
//&lt;!-- 读取栈顶元素，注意这里只读取，不能改变队列顺序 --&gt;
MyStack.prototype.top = function() {
    let x = this.getFirst();//先拿到栈顶元素
    this.quene.shift();//删除栈顶元素
    this.quene.push(x);//还原队列，因为原先栈顶元素在队列的最后一位，在读取函数中，我们把它移动到了首位，在拿到它之后，我们必须将队列还原
    return x;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if(this.quene.length===0) return true;
    return false;
};
MyStack.prototype.getFirst = function(){
    let i =this.quene.length;
    i--; 
    while(i--){
        let x = this.quene[0];
        this.quene.push(x);
        this.quene.shift()
    }
    return this.quene[0];
}
/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


