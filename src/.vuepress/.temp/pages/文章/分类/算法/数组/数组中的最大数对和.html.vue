<template><div><h1 id="数组中的最大数对和" tabindex="-1"><a class="header-anchor" href="#数组中的最大数对和" aria-hidden="true">#</a> 数组中的最大数对和</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code v-pre>nums</code> 。请你从 <code v-pre>nums</code> 中找出和 <strong>最大</strong> 的一对数，且这两个数数位上最大的数字相等。</p>
<p>返回最大和，如果不存在满足题意的数字对，返回 <code v-pre>-1</code> <em>。</em></p>
<!--more-->
<p><strong>示例 1：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入：nums = [51,71,17,24,42]
输出：88
解释：
i = 1 和 j = 2 ，nums[i] 和 nums[j] 数位上最大的数字相等，且这一对的总和 71 + 17 = 88 。 
i = 3 和 j = 4 ，nums[i] 和 nums[j] 数位上最大的数字相等，且这一对的总和 24 + 42 = 66 。
可以证明不存在其他数对满足数位上最大的数字相等，所以答案是 88 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入：nums = [1,2,3,4]
输出：-1
解释：不存在数对满足数位上最大的数字相等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>
<p>本题主要思路是首先对一个数进行拆分，求出其最大的一位数<code v-pre>maxVal</code>例如42中最大位数是4，19最大位数是9。这里我们有多种方式进行拆分，我们不在对该方法进行一一分析，我们主要就拆分以后如何在数组中找到两个最大位数相等<code v-pre>max</code>，且相加最大的两个数的和。</p>
<blockquote>
<p>这里我们必须要对数组<code v-pre>nums</code>进行遍历，通过遍历每一个元素<code v-pre>nums[i]</code>，求出其最大位数<code v-pre>maxVal</code>作为键，本身作为值<code v-pre>nusm[i]</code>存入map数组中。</p>
<p>在循环中我们首先求出当前元素的最大位数<code v-pre>maxVal</code>是否在map数组中已经存在过，如果没有我们将它存入<code v-pre>map.set(maxVal,nums[i])</code>。</p>
<p>如果map数组中已经存入，我们找到该最大位数对应的值与当前元素<code v-pre>nums[i]</code>相加，与<code v-pre>max</code>值比较后将较大值赋值给<code v-pre>max</code>,然后在更行<code v-pre>map</code>集合中该<code v-pre>maxVal</code>对应的值，我们<code v-pre>map</code>集合中一个<code v-pre>maxVal</code>的值只能存在一个且是最大的一个，我们把nums[i]和原先<code v-pre>maxVal</code>在<code v-pre>map</code>集合中对应的值相比较，取较大值更新入<code v-pre>map</code>的<code v-pre>maxVal</code>的值。</p>
</blockquote>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//定义一个map集合来找最大位数相等的两位数</span>
    <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> maxVal <span class="token operator">=</span> <span class="token function">findMaxDigit</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//对数组的每一个元素求出其数位上最大的数字</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>maxVal<span class="token punctuation">)</span><span class="token operator">===</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> arr<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>maxVal<span class="token punctuation">,</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//如果map集合中没有，将该键值保存</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">//如果存在</span>
            <span class="token keyword">let</span> sum <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>maxVal<span class="token punctuation">)</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//先求和</span>
            max <span class="token operator">=</span> max<span class="token operator">></span>sum<span class="token operator">?</span>max<span class="token operator">:</span>sum<span class="token punctuation">;</span><span class="token comment">//取最大的和</span>
            arr<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>maxVal<span class="token punctuation">,</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>maxVal<span class="token punctuation">)</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//更新map集合</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">findMaxDigit</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> strNum <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//将非0整数转变为字符串进一步处理</span>
    <span class="token keyword">let</span> maxDigit <span class="token operator">=</span> strNum<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//初始化一个结果值（即数的最大位数）</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> strNum<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>strNum<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> maxDigit<span class="token punctuation">)</span> maxDigit <span class="token operator">=</span> strNum<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//通过循环每一位数字，找到最大的一位</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>maxDigit<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//转换位数字并返回</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


