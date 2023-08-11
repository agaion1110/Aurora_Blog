<template><div><h1 id="最小覆盖子串" tabindex="-1"><a class="header-anchor" href="#最小覆盖子串" aria-hidden="true">#</a> 最小覆盖子串</h1>
<p>给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 &quot;&quot; 。</p>
<p>注意：</p>
<ul>
<li>
<p>对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。</p>
</li>
<li>
<p>如果 s 中存在这样的子串，我们保证它是唯一的答案。</p>
</li>
</ul>
<!-- more -->
<p>示例 1：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入：s = "a", t = "a"
输出："a"
解释：整个字符串 s 是最小覆盖子串。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入: s = "a", t = "aa"
输出: ""
解释: t 中两个字符 'a' 均应包含在 s 的子串中，因此没有符合条件的子字符串，返回空字符串。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>来源：力扣（LeetCode）
链接：<a href="https://leetcode.cn/problems/minimum-window-substring" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/minimum-window-substring<ExternalLinkIcon/></a></p>
<h2 id="移动窗口解题思路" tabindex="-1"><a class="header-anchor" href="#移动窗口解题思路" aria-hidden="true">#</a> 移动窗口解题思路</h2>
<p>移动窗口，通过哈希表存放模板字符频数，利用左右窗口的动态移动，找到包含所有模板字符的窗口子串，再通过对比，得到最小的子串。</p>
<ol>
<li>首先通过size确定窗口内的字符种类数与模板字符串的字符种类数相同。</li>
<li>窗口变化时，没到遇到一个模板字符内出现的字符都去哈希表中减少相应键的值，当某一个键值为0时，表示窗口内该字符出现的次数已经等于模板内该字符出现的次数。</li>
<li>同时满足了上面两种情况时，即窗口内字符包含所有种类的模板字符，且每一种字符出现的次数都大于等于模板字符串内的字符出现的次数时，得到合法的子串。</li>
<li>将得到的子串与上一次子串相比，取长度较小的子串并再次保存。直到循环结束。</li>
</ol>
<h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">t</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minWindow</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//哈希表用来统计模板字符中，相同字符出现的次数</span>
    <span class="token keyword">let</span> nowChar<span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> result<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>t<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">||</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token comment">//统计频率</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> size <span class="token operator">=</span> map<span class="token punctuation">.</span>size<span class="token punctuation">;</span><span class="token comment">//记录窗口内字符对模板字符串的字符种类的抵消数，为0时表示窗口内包含所有种类字符串</span>
    <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//定义左窗口</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> r<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>r<span class="token operator">&lt;</span>s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>r<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//对右窗口依次遍历</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">,</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//当右窗口遇到模板字符串内含有的字符时，给相对应的该字符键对应的值减1</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span> size<span class="token operator">--</span><span class="token punctuation">;</span><span class="token comment">//当循环中遇到哈希表中值为0的键时，对记录的字符种类数减1</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>size<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//当循环到使字符种类数为0时，即窗口中现在包含所有的模板字符串。准备移动左窗口</span>
            nowChar<span class="token operator">=</span>s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span>r<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//因为此时窗口内字符串符合要求，所有我们先截取它们并保存到临时字符串中</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//移动左窗口前，先判断左窗口是否为模板字符串的字符种类数中的一种，即是否在哈希表中</span>
                <span class="token comment">//如果左窗口的字符时模板字符串中的一种，移动势必回导致窗口内的字符（模板字符串内的那几种字符）频率发生变化，即相应字符减少一个</span>
                map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">,</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//所有哈希表的该字符频数恢复一个</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//当一个字符的频数恢复到1时，我们需要知道，窗口内即将少一种模板字符串内的种类</span>
                    size<span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">//给记录抵消数的size加1再进入下一次循环</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>result <span class="token operator">||</span> result<span class="token punctuation">.</span>length<span class="token operator">></span>nowChar<span class="token punctuation">.</span>length<span class="token punctuation">)</span> result <span class="token operator">=</span> nowChar<span class="token punctuation">;</span><span class="token comment">//此时记录对比保存小的字符串。</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            l<span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">//如果不在，则左窗口向右移动一位</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


