<template><div><h1 id="反转字符串中的单词" tabindex="-1"><a class="header-anchor" href="#反转字符串中的单词" aria-hidden="true">#</a> 反转字符串中的单词</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给你一个字符串 <code v-pre>s</code> ，请你反转字符串中 <strong>单词</strong> 的顺序。</p>
<p><strong>单词</strong> 是由非空格字符组成的字符串。<code v-pre>s</code> 中使用至少一个空格将字符串中的 <strong>单词</strong> 分隔开。</p>
<p>返回 <strong>单词</strong> 顺序颠倒且 <strong>单词</strong> 之间用单个空格连接的结果字符串。</p>
<p>**注意：**输入字符串 <code v-pre>s</code>中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。</p>
<p><strong>示例 1：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入：s = "the sky is blue"
输出："blue is sky the"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入：s = "  hello world  "
输出："world hello"
解释：反转后的字符串中不能存在前导空格和尾随空格。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入：s = "a good   example"
输出："example good a"
解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="利用库函数解题" tabindex="-1"><a class="header-anchor" href="#利用库函数解题" aria-hidden="true">#</a> 利用库函数解题</h2>
<p>首先利用trim()方法去除首尾空格，然后再利用split将字符串按照要求分割成为数组，在split()函数中要根据一个或多个空格分隔字符串需要用到正则表达式/\s+/代表匹配一个空白字符。</p>
<h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseWords</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\s+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> left<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>right<span class="token operator">=</span>arr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>left<span class="token operator">&lt;=</span>right<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> str <span class="token operator">=</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> str<span class="token punctuation">;</span>
        left<span class="token operator">++</span><span class="token punctuation">;</span>
        right<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自行编写对应函数" tabindex="-1"><a class="header-anchor" href="#自行编写对应函数" aria-hidden="true">#</a> 自行编写对应函数</h3>
<ol>
<li>首先将字符串转为数组进行后续的处理。</li>
<li>然后利用双指针法删除数组多余的空格。</li>
<li>再利用反转函数将整个数组反转。</li>
<li>最后循环数组，将每一个单词反转. 这样我们就得到我们想要的字符串。</li>
</ol>
<h3 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseWords</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//先将整个字符串转为数进行进一步的处理</span>
    arr <span class="token operator">=</span> <span class="token function">removeExtraSpaces</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//去除数组内多余空格</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>arr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//将去空格后的数组整个反转</span>
    <span class="token keyword">let</span> start<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//第一个要反转字符串的首位为0</span>
    <span class="token comment">//接下来将每一个单词反转回来，也就是空格分隔的一段字符串</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//这里判断当循环到一个空格是，当前位置就是这一段将要反转字符串的末端位置。</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">===</span><span class="token string">' '</span><span class="token operator">||</span>i<span class="token operator">===</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">reverse</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>start<span class="token punctuation">,</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
            start<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//记录当前位置的后一位就将是下一次要反转字符串的首位</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//删除多余空格的函数（双指针发）</span>
<span class="token keyword">function</span> <span class="token function">removeExtraSpaces</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> slow<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> fast<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>fast<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//当快指针遇到非空字符时处理（即遇到每一个单词首位字符）</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>fast<span class="token punctuation">]</span><span class="token operator">!==</span><span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>slow<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span> arr<span class="token punctuation">[</span>slow<span class="token operator">++</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">' '</span><span class="token punctuation">;</span><span class="token comment">//这里也就是标识除了第一个单词的首位之外每一个单词首位都要添加一个空格，然后慢指针前移一位。</span>
            <span class="token comment">//添加完空格后将快指针指向的每一位字符赋值给慢指针，直到快指针遇到空格（即这个单词已经遍历完毕）或者快指针遍历到arr末端结束。</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>fast<span class="token punctuation">]</span><span class="token operator">!=</span><span class="token string">' '</span><span class="token operator">&amp;&amp;</span>fast<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> arr<span class="token punctuation">[</span>slow<span class="token operator">++</span><span class="token punctuation">]</span><span class="token operator">=</span>arr<span class="token punctuation">[</span>fast<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> fast<span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">//遇到空格跳过，及完成删除多余空格操作</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>slow<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 将数组arr中从起始位置到终止位置部分字符反转的函数</span>
<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span>start<span class="token punctuation">,</span>end</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>start<span class="token operator">&lt;=</span>end<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> c <span class="token operator">=</span> arr<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">=</span> c<span class="token punctuation">;</span>
        start<span class="token operator">++</span><span class="token punctuation">;</span>
        end<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


