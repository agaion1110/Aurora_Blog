<template><div><h1 id="kmp算法" tabindex="-1"><a class="header-anchor" href="#kmp算法" aria-hidden="true">#</a> KMP算法</h1>
<h2 id="什么时kmp算法" tabindex="-1"><a class="header-anchor" href="#什么时kmp算法" aria-hidden="true">#</a> 什么时KMP算法</h2>
<p><strong>KMP算法是一种改进的字符串匹配算法</strong></p>
<p>由D.E.Knuth，J.H.Morris和      V.R.Pratt提出的，因此人们称它为克努特—莫里斯—普拉特操作（简称KMP算法）。</p>
<p>KMP的主要思想是<strong>当出现字符串不匹配时，可以知道一部分之前已经匹配的文本内容，可以利用这些信息避免从头再去做匹配了。</strong></p>
<p>所以如何记录已经匹配的文本内容，是KMP的重点，也就是next数组。</p>
<h2 id="next数组" tabindex="-1"><a class="header-anchor" href="#next数组" aria-hidden="true">#</a> next数组</h2>
<p>next数组其实就是<strong>模式字符串（模式串）的前缀表<code v-pre>prefix</code></strong>，前缀表是用来回退的，它记录了模式串与主串(文本串)不匹配的时候，模式串应该从哪里开始重新匹配。</p>
<p>要弄懂这些，我们首先要了解一下几点问题：</p>
<blockquote>
<ul>
<li>前缀：包含首位字符但不会包含末位字符的子串；</li>
<li>后缀：包含末位字符但不包含首位字符的子串。</li>
<li>next数组的定义：当主串与模式串的某一字符不匹配时，模式串要回退的位置（<strong>即在匹配过程中，当一次匹配失败时，下一次的匹配不不用冲模式串的第一位位开始匹配</strong>）；</li>
<li>next[j]：其值 = 第j位字符前面j-1位字符组成的子串的前后重合字符数+1。</li>
</ul>
</blockquote>
</div></template>


