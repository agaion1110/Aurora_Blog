import{_ as o,W as p,X as c,$ as l,Y as n,Z as s,a0 as t,a1 as e,C as i}from"./framework-fb0d306d.js";const r={},u=e(`<h1 id="js的迭代" tabindex="-1"><a class="header-anchor" href="#js的迭代" aria-hidden="true">#</a> JS的迭代</h1><p>本文以一道面试题开场：<code>for-in</code>和<code>for-of</code>的区别？并说出下面代码输出什么，为什么？</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> babies <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;hpy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yxz&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hfcj&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;zpj&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cfy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yxx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lyc&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;zls&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yxn&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cym&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
babies<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
        index<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">yield</span> <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> baby <span class="token keyword">of</span> babies<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>baby<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ?</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=e('<h2 id="迭代协议" tabindex="-1"><a class="header-anchor" href="#迭代协议" aria-hidden="true">#</a> 迭代协议</h2><p><strong>迭代协议</strong>并不是新的内置实现或语法，而是<em>协议</em>。这些协议可以被任何遵循某些约定的对象来实现。</p><blockquote><p>ES6新增了<code>Set</code>、<code>Map</code>类型，他们和<code>Array</code>、<code>Object</code>类型很像，<code>Array</code>、<code>Object</code>都是可以遍历的，但是<code>Set</code>、<code>Map</code>都不能用<code>for</code>循环遍历，解决这个问题有两种方案，一种是<strong>为Set、Map单独新增一个用来遍历的API</strong>，另一种是<strong>为Set、Map、Array、Object新增一个统一的遍历API</strong>。</p><p>ES6选择使用一种设计标准，来统一所有可遍历类型的遍历方式。<code>Iterator</code>正是这样一种标准。</p></blockquote>',3),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#%E5%8F%AF%E8%BF%AD%E4%BB%A3%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"(Iterable Protocols)",-1),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#%E8%BF%AD%E4%BB%A3%E5%99%A8%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"(Iterator Protocols)",-1),h=e(`<h3 id="可迭代协议-iterable" tabindex="-1"><a class="header-anchor" href="#可迭代协议-iterable" aria-hidden="true">#</a> 可迭代协议 | Iterable</h3><blockquote><p><strong>可迭代协议允许 JavaScript 对象定义或定制它们的迭代行为</strong></p><p><strong>要成为可迭代对象， 一个对象必须实现 <code>@@iterator</code> 方法。这意味着对象（或者它原型链上的某个对象）必须有一个键为</strong> <code>@@iterator</code> <strong>的属性，可通过常量</strong> <code>Symbol.iterator</code><strong>访问该属性。</strong></p></blockquote><p><code>Symbol.iterator</code> 是一个无参数的函数，其返回值为一个<strong>迭代器</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> it <span class="token operator">=</span> arr<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: &quot;a&quot;, done: false }</span>
it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: &quot;b&quot;, done: false }</span>
it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: undefined, done: true }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="符号-symbol" tabindex="-1"><a class="header-anchor" href="#符号-symbol" aria-hidden="true">#</a> 符号 | Symbol</h3><blockquote><p><strong>ES6 引入了一种新的原始数据类型<code>Symbol</code>，表示独一无二的值。</strong></p><p><strong>Symbol 值通过<code>Symbol</code>函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。</strong></p><p><strong>凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。</strong></p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;hpy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Symbol(hpy)</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;hpy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Symbol(hpy)</span>
a <span class="token operator">==</span> b<span class="token punctuation">;</span>
<span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迭代器协议-iterator" tabindex="-1"><a class="header-anchor" href="#迭代器协议-iterator" aria-hidden="true">#</a> 迭代器协议 | Iterator</h3><blockquote><p><strong>迭代器协议定义了产生一系列值（无论是有限个还是无限个）的标准方式。当值为有限个时，所有的值都被迭代完毕后，则会返回一个默认返回值。</strong></p></blockquote><p><strong>迭代器</strong>含有 <code>next</code> 方法，该方法执行会返回一个包含 <code>done</code> 和 <code>value</code> 的对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> it <span class="token operator">=</span> <span class="token function">makeIterator</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: &quot;a&quot;, done: false }</span>
it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: &quot;b&quot;, done: false }</span>
it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: undefined, done: true }</span>
<span class="token keyword">function</span> <span class="token function">makeIterator</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> nextIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> 
        <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> nextIndex <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span> array<span class="token punctuation">[</span>nextIndex<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> 				<span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    	<span class="token punctuation">}</span>
   	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生成器-generator" tabindex="-1"><a class="header-anchor" href="#生成器-generator" aria-hidden="true">#</a> 生成器 | Generator</h2>`,12),g=n("strong",null,[n("code",null,"Generator")],-1),f={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*",target:"_blank",rel:"noopener noreferrer"},y={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#%E5%8F%AF%E8%BF%AD%E4%BB%A3%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"},_={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#%E8%BF%AD%E4%BB%A3%E5%99%A8%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"},x=n("h3",{id:"生成器函数-function",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#生成器函数-function","aria-hidden":"true"},"#"),s(" 生成器函数 | function*")],-1),w=n("strong",null,[n("code",null,"function*")],-1),S=n("code",null,"function",-1),j=n("strong",null,"生成器函数",-1),E={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"Generator",-1),I=e(`<p><strong>生成器</strong>（函数）用于生成一个<strong>迭代器</strong>（对象）,<em>还有用于异步编程，熟知的<code>async/await</code>就是<code>generator</code>的语法</em></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> i<span class="token punctuation">;</span>
  <span class="token keyword">yield</span> i <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> gen <span class="token operator">=</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// Expected output: 10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// Expected output: 20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>语法：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
* name: 函数名
* <span class="token keyword">@param</span> <span class="token parameter">要传递给函数的一个参数的名称，一个函数最多可以有</span> 255 个参数。
* statements 普通 JS 语句。
*/</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>param<span class="token punctuation">[</span><span class="token punctuation">,</span> param<span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token operator">...</span> param<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> statements <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用场景" tabindex="-1"><a class="header-anchor" href="#常用场景" aria-hidden="true">#</a> 常用场景</h2><p>什么时候会调用 <code>Symbol.iterator</code> 方法呢？</p><h3 id="for-of循环-for-of-iteration" tabindex="-1"><a class="header-anchor" href="#for-of循环-for-of-iteration" aria-hidden="true">#</a> <code>for-of</code>循环 | <code>for-of</code> Iteration</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> babys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;hpy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yxz&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hfcj&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;zpj&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cfy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yxx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lyc&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;zls&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yxn&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cym&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> baby <span class="token keyword">of</span> babys<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>baby<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解构赋值-destructuring-assignment" tabindex="-1"><a class="header-anchor" href="#解构赋值-destructuring-assignment" aria-hidden="true">#</a> 解构赋值 | Destructuring Assignment</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;cfy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;hpy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span> <span class="token operator">=</span> set<span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>first<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">]</span> <span class="token operator">=</span> set<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展运算符-spread-operator" tabindex="-1"><a class="header-anchor" href="#扩展运算符-spread-operator" aria-hidden="true">#</a> 扩展运算符 | Spread Operator</h3><p>扩展运算符是一种简便机制，可以将任何部署了 Iterator 接口的数据结构，转为数组。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 例一</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span><span class="token operator">...</span>str<span class="token punctuation">]</span> <span class="token comment">//  [&#39;h&#39;,&#39;e&#39;,&#39;l&#39;,&#39;l&#39;,&#39;o&#39;]</span>
<span class="token comment">// 例二</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token operator">...</span>arr<span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">]</span><span class="token comment">// [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他-the-others" tabindex="-1"><a class="header-anchor" href="#其他-the-others" aria-hidden="true">#</a> 其他 | The Others</h3><blockquote><ul><li><code>Array.from()</code></li><li><code>Map(), Set(), WeakMap(), WeakSet()</code>（比如<code>new Map([[&#39;a&#39;,1],[&#39;b&#39;,2]])</code>）</li><li><code>Promise.all()</code></li><li><code>Promise.race()</code></li><li><code>yield*</code></li></ul></blockquote><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li>迭代协议的主要内容，可以用如下接口表示</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Iterable</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> Iterator<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Iterator</span> <span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span>value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">:</span> IterationResult<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">IterationResult</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
    done<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对于<code>Iterable</code>的对象，可以使用<code>for-of</code>，<code>...</code>，<strong>解构赋值</strong>等操作。</li></ul><h3 id="回顾-review" tabindex="-1"><a class="header-anchor" href="#回顾-review" aria-hidden="true">#</a> 回顾 | Review</h3><p>回到开始的问题：</p><blockquote><ul><li><code>for-in</code>是为了遍历 <strong>键值对</strong>(<code>key-value</code>)形式的对象的</li><li><code>for-of</code>是为了遍历 所有实现了<strong>迭代协议</strong>的可迭代对象的</li></ul></blockquote>`,22);function z(q,B){const a=i("ExternalLinkIcon");return p(),c("div",null,[u,l(" more "),d,n("p",null,[s("迭代协议具体分为两个协议："),n("a",k,[s("可迭代协议"),t(a)]),v,s("和"),n("a",m,[s("迭代器协议"),t(a)]),b,s("。")]),h,n("p",null,[g,s(" 对象由"),n("a",f,[s("生成器函数"),t(a)]),s("返回并且它符合"),n("a",y,[s("可迭代协议"),t(a)]),s("和"),n("a",_,[s("迭代器协议"),t(a)]),s("。")]),x,n("p",null,[w,s(" 这种声明方式 ("),S,s("关键字后跟一个星号）会定义一个"),j,s(" (generator function)，它返回一个 "),n("a",E,[A,t(a)]),s(" 对象。")]),I])}const J=o(r,[["render",z],["__file","JS迭代.html.vue"]]);export{J as default};
