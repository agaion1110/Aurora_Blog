<template><div><h1 id="改变this指向" tabindex="-1"><a class="header-anchor" href="#改变this指向" aria-hidden="true">#</a> 改变this指向</h1>
<p><mark>重点:箭头函数,不能改变this指向,只有普通function函数,能改变this指向</mark></p>
<h2 id="改变this指向的方法" tabindex="-1"><a class="header-anchor" href="#改变this指向的方法" aria-hidden="true">#</a> 改变this指向的方法</h2>
<ol>
<li>
<p>call()方法
语法: 函数.call(参数1,其他参数....可以是多个或者没有 )
作用: 调用并且执行函数,同时,将函数的this指向,定义为指定的内容(参数1)
参数1,是改变的this的指向
其他参数,是原始函数的实参,原始函数有几个形参,此时就要对应的输入几个实参,没有形参,就没有实参</p>
</li>
<li>
<p>apply()方法
语法: 函数.apply(参数1,参数2)  只有两个参数
参数1:改变的this的指向内容
参数2:原始函数的实参,必须是一个数组的形式,将实参定义成数组的单元
其他用法和作用于 .call是相同的</p>
<p>总结: call方法与apply方法,作用,效果,都是完全一致的
只是对于原始函数的参数赋值方法,不同
call方法是通过其他多个参数来实现
apply方法是通过一个数组参数,来实现
两个方法没有本质的区别,爱用哪个用那个</p>
</li>
<li>
<p>bind()方法
语法: const 变量 = 函数.bind(参数1);
作用：不是立即执行函数（下一篇博客有介绍 立即执行函数）</p>
</li>
</ol>
<p>​			生成一个新的函数,这个新的函数是改变this指向之后的新的函数</p>
<p>​			参数1,定义的要改变的的this指向
​			其他参数,一般不定义,是使用函数原有的形参</p>
<p>​		总结:
​    		call apply 都是立即执行函数
​        		参数1,都是改变的this指向
​       		 其他参数,是原始函数的形参(可以有,也可以没有)
​    		bind 不是立即执行函数,是生成一个新的函数
​        		参数1,是改变的this指向
​        		就使用原始函数的形参</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'张三'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'男'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'李四'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">fun2</span> <span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 对象中的函数,this指向的是这个对象,obj2</span>
obj2<span class="token punctuation">.</span><span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 改变this指向,指向的是obj1这个对象</span>
<span class="token comment">// 代用,并且执行fun2这个函数,同时将fun2的this指向,从原始的obj2,改变为obj1</span>
obj2<span class="token punctuation">.</span><span class="token function">fun2</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 带有参数的函数,this指向的改变</span>

<span class="token comment">// 定义的带有参数的普通函数</span>
<span class="token keyword">function</span> <span class="token function">fun3</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>sex</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>sex<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 执行时,输出实参,此时this指向是window</span>
<span class="token function">fun3</span><span class="token punctuation">(</span><span class="token string">'张三'</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token string">'男'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 改变this指向 , call方法</span>
<span class="token function">fun3</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span><span class="token string">'李四'</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token string">'女'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 改变this指向 , apply方法</span>
<span class="token function">fun3</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj1 <span class="token punctuation">,</span> <span class="token punctuation">[</span> <span class="token string">'王五'</span> <span class="token punctuation">,</span> <span class="token number">20</span> <span class="token punctuation">,</span> <span class="token string">'不知道'</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// bind方法,不是立即执行函数,而是定义生成一个新的函数</span>
<span class="token comment">// 新生成的函数,this指向是参数1</span>
<span class="token comment">// 新生成的函数,形参是原始函数fun3的形参</span>
<span class="token keyword">const</span> fun4 <span class="token operator">=</span> <span class="token function">fun3</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">fun4</span><span class="token punctuation">(</span><span class="token string">'王二麻子'</span> <span class="token punctuation">,</span> <span class="token number">100</span> <span class="token punctuation">,</span> <span class="token string">'不详'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


