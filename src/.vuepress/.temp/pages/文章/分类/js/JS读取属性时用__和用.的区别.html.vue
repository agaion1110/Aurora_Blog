<template><div><h1 id="js对象中取属性值用-和用-的区别" tabindex="-1"><a class="header-anchor" href="#js对象中取属性值用-和用-的区别" aria-hidden="true">#</a> js对象中取属性值用“ . ”和用[ ]的区别</h1>
<p>对象的属性和方法统称为对象的成员。</p>
<blockquote>
<ul>
<li><strong>在JavaScript中，可以使用“ . ”和“ [ ] ”来访问对象的属性。</strong></li>
<li><strong>在JavaScript中，只能用“ . ”来访问对象的方法。</strong></li>
</ul>
</blockquote>
<!-- more -->
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> p<span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
	sex：<span class="token string">'男'</span>
    <span class="token number">666</span><span class="token operator">:</span> <span class="token string">'liuliuliu'</span>
<span class="token punctuation">}</span>
<span class="token comment">//用[]读取p对象中的某一个属性</span>
<span class="token keyword">function</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">//这里target是一个变量</span>
<span class="token punctuation">}</span>
<span class="token function">read</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token comment">//-->张三</span>
<span class="token function">read</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token comment">//-->18</span>
<span class="token function">read</span><span class="token punctuation">(</span>sex<span class="token punctuation">)</span><span class="token comment">//-->男</span>
<span class="token function">read</span><span class="token punctuation">(</span><span class="token number">666</span><span class="token punctuation">)</span><span class="token comment">//-->liuliuliu</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token number">666</span><span class="token punctuation">)</span><span class="token comment">//报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相同点：都可以获取到object的属性值</p>
<p>不同点：</p>
<ol>
<li>[ ]运算符可以使用字符串变量的内容作为属性名，点运算符不能</li>
<li>[ ]运算符可以用纯数字作为属性名，点运算符不能</li>
<li>[ ]运算符可以用js关键字和保留字作为属性名，点运算符不能</li>
</ol>
<p>总结：对于一般的常量就使用（.）运算符，对于其他的使用[ ]运算符。</p>
</div></template>


