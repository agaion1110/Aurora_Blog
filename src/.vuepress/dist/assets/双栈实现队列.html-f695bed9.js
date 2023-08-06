import{_ as e,W as t,X as i,a1 as a,Y as n,Z as s}from"./framework-fb0d306d.js";const l={},c=a(`<h1 id="用栈实现队列" tabindex="-1"><a class="header-anchor" href="#用栈实现队列" aria-hidden="true">#</a> 用栈实现队列</h1><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（<code>push</code>、<code>pop</code>、<code>peek</code>、<code>empty</code>）：</p><p>实现 <code>MyQueue</code> 类：</p><ul><li><code>void push(int x)</code> 将元素 x 推到队列的末尾</li><li><code>int pop()</code> 从队列的开头移除并返回元素</li><li><code>int peek()</code> 返回队列开头的元素</li><li><code>boolean empty()</code> 如果队列为空，返回 <code>true</code> ；否则，返回 <code>false</code></li></ul><p><strong>说明：</strong></p><ul><li>你 <strong>只能</strong> 使用标准的栈操作 —— 也就是只有 <code>push to top</code>, <code>peek/pop from top</code>, <code>size</code>, 和 <code>is empty</code> 操作是合法的。</li><li>你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。</li></ul><p><strong>示例 1：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>输入：
<span class="token punctuation">[</span><span class="token string">&quot;MyQueue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;push&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;push&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;peek&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pop&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;empty&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
输出：
<span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span>

解释：
MyQueue myQueue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// queue is: [1]</span>
myQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// queue is: [1, 2] (leftmost is front of the queue)</span>
myQueue<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return 1</span>
myQueue<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return 1, queue is [2]</span>
myQueue<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>双栈实现队列核心是利用两个栈分别存入入栈数据列，出栈数据列。</p><ol><li>设计入队数据，即将push进入队列的数据存入储存栈（inStack）。</li><li>当读取到pop出队命令时，将储存栈数据一一pop并存入读取站（outStack），这样在读取栈最后的数据就是储存栈中最开始的数据，这时候pop读取栈的数据，这个数据也就是最开始存入的数据，这样我们就到达了先进先出的效果。</li><li>在读取过程中又一次存入数据，这时候我们也不用管，一直到读取栈的数据全部被读取完毕，为空时，我们再一次将存储栈中的数据倒置入读取栈即可。</li></ol><h2 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h2><ul><li>时间复杂度:</li></ul>`,14),p=n("blockquote",null,[n("p",null,[s("push和empty为"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mn",null,"1"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(1)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"1"),n("span",{class:"mclose"},")")])])]),s("pop和peek为均摊"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mn",null,"1"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(1)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"1"),n("span",{class:"mclose"},")")])])]),s("。对于每个元素，至多入栈和出栈各两次，故均摊复杂度为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mn",null,"1"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(1)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"1"),n("span",{class:"mclose"},")")])])]),s("。")])],-1),o=n("ul",null,[n("li",null,"空间复杂度:")],-1),u=n("blockquote",null,[n("p",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])])])],-1),d=a(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>
var MyQueue = function() {
    this.inStack=[],
    this.outStack=[]
};

/** 
 * @param {number} x
 * @return {void}
 */
//&lt;!-- 向队列存入数据，即向储存栈最后端存入数据 --&gt;
MyQueue.prototype.push = function(x) {
    this.inStack.push(x);
};

/**
 * @return {number}
 */
//&lt;!-- 删除队列第一个元素，即删除最先入栈的元素，即若读取栈为空，则该数据在储存栈最低端，我们需要先把储存栈中元素全部移入读取栈，然后读取栈顶元素即最后的那一个元素 --&gt;
MyQueue.prototype.pop = function() {
    if(this.outStack.length!==0) return this.outStack.pop();
    else {
        this.move();
        return this.outStack.pop();
    }
};

/**
 * @return {number}
 */
//&lt;!--读取队列第一个元素，也就是读取读取栈的最后端（顶端）的元素  --&gt;
MyQueue.prototype.peek = function() {
    if(this.outStack.length!==0) return this.outStack[this.outStack.length-1];
    else {
        this.move();
        // console.log(this.outStack.length-1)
        return this.outStack[this.outStack.length-1];
    }
};

/**
 * @return {boolean}
 */
//&lt;!-- 队列判空只有当储存栈和读取站两个栈同时位空时，队列才算为空 --&gt;
MyQueue.prototype.empty = function() {
    if(this.inStack.length===0&amp;&amp;this.outStack.length===0) return true;
    else return false;
};

MyQueue.prototype.move = function(){//将储存栈中的数据倒置入读取栈
    while(this.inStack.length!==0){
        let x = this.inStack.pop();
        this.outStack.push(x);
    }
}
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[c,p,o,u,d];function m(v,h){return t(),i("div",null,r)}const b=e(l,[["render",m],["__file","双栈实现队列.html.vue"]]);export{b as default};
