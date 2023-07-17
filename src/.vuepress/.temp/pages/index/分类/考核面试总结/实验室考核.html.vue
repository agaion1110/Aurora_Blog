<template><div><h1 id="实验室前端小组考核题目" tabindex="-1"><a class="header-anchor" href="#实验室前端小组考核题目" aria-hidden="true">#</a> 实验室前端小组考核题目</h1>
<h2 id="一-js部分" tabindex="-1"><a class="header-anchor" href="#一-js部分" aria-hidden="true">#</a> 一，JS部分</h2>
<h3 id="_1-深、浅拷贝的区别-你知道哪些实现深拷贝的方法" tabindex="-1"><a class="header-anchor" href="#_1-深、浅拷贝的区别-你知道哪些实现深拷贝的方法" aria-hidden="true">#</a> 1.深、浅拷贝的区别？你知道哪些实现深拷贝的方法?</h3>
<!-- more -->
<p><a href="https://blog.csdn.net/weixin_63050915/article/details/127091849" target="_blank" rel="noopener noreferrer">点击这里去往详细博客<ExternalLinkIcon/></a></p>
<h3 id="_2-如何判断一个函数是否作为了构造函数" tabindex="-1"><a class="header-anchor" href="#_2-如何判断一个函数是否作为了构造函数" aria-hidden="true">#</a> 2.如何判断一个函数是否作为了构造函数？</h3>
<figure><img src="@source/index/分类/考核面试总结/assets/1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>用于检测<a href="https://so.csdn.net/so/search?q=%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">构造函数<ExternalLinkIcon/></a>的 <code v-pre>prototype</code> 属性是否出现在某个实例对象的<a href="https://so.csdn.net/so/search?q=%E5%8E%9F%E5%9E%8B%E9%93%BE&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">原型链<ExternalLinkIcon/></a>上。同时它可以判断一个对象是否是另一个对象的实例。</p>
<ul>
<li>
<p>语法：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>object instanceof constructor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>object</code>：某个实例对象</li>
<li><code v-pre>constructor</code>：某个构造函数</li>
</ul>
</li>
</ul>
<blockquote>
<p>如果是则返回true，不是返回false。如代码所示，new F()返回true，即this （指向的对象，下同）是F的实例，this也已经被实例化；所以F这时候是一个构造函数。如果是F()调用，返回了false，即this不是F（）的实例化对象，即F()只是一个普通函数。</p>
</blockquote>
<h3 id="_3-new操作符做了哪些事情" tabindex="-1"><a class="header-anchor" href="#_3-new操作符做了哪些事情" aria-hidden="true">#</a> 3.new操作符做了哪些事情？</h3>
<p>new操作符新建了一个空对象，这个对象原型指向构造函数的prototype，执行构造函数后返回这个对象</p>
<ol>
<li>首先创建一个新的空对象。</li>
<li>然后将空对象的隐式原型对象（<strong>proto</strong>）指向构造函数的原型对象。
<ol>
<li>这步操作将新对象的__proto__对象赋值为构造函数的prototype属性，使得能通过构造函数创建的所有对象可以共享相同的原型。</li>
<li>这就意味着通过一个构造函数创建的所有对象都继承自同一个相同的对象，因此它们是同一个类的对象。</li>
</ol>
</li>
<li>改变this指向，使它指向空对象。</li>
<li>对构造函数的返回值进行判断，然后返回对应的值。
<ol>
<li>一般是返回第一步创建的空对象。</li>
<li>但是当构造函数有返回值时，则需要做出判断后再对应的值，时对象类型的则返回对象，是原始类型的则返回第一步创建的空对象。</li>
</ol>
</li>
</ol>
<h3 id="_4-什么是类数组-列举你知道的类数组转为数组的方法。" tabindex="-1"><a class="header-anchor" href="#_4-什么是类数组-列举你知道的类数组转为数组的方法。" aria-hidden="true">#</a> 4.什么是类数组，列举你知道的类数组转为数组的方法。</h3>
<p>类数组对象，就是含有 length 属性的对象，但这个对象不是数组。 通常来说还会有 0 ～ length-1 的属性，结构表现上非常像一个数组。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token operator">:</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token operator">:</span> <span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// false不是数组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<p>类数组转数组</p>
<blockquote>
<p>从底层上来看，这个对象的原型链上没有 Array.prototype，所以我们不能用 Array.prototype 上的 forEach、map 等数组特有的方法。</p>
</blockquote>
<p>1.我们可以用 Array.prototype.slice 内置方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">mySlice</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>end <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> end <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">const</span> cloned <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cloned<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 为了确保不存在的索引保持为 empty 值</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cloned<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">[</span>start <span class="token operator">+</span> i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> cloned<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[] 空数组效果同 Array.prototype.</span>
<span class="token comment">//1.调用数组原型对象上的slice方法，我们不给 slice 方法传开始和结束位置参数，这样就会默认取整个范围。</span>
<span class="token comment">//2.然后 call 来自 Function.prototype，可以使用一个指定的 this 值来调用一个函数，这里是 Array.prototype.slice。我们不给 slice 方法传开始和结束位置参数，这样就会默认取整个范围。</span>
<span class="token comment">//3.因为 slice 用于拷贝返回一个新的子数组，且只需要被操作的目标有 length 属性就行了。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<p>2.Array.from(),ES6 新出的方法，可以将类数组对象或者是可迭代对象转换为数组。</p>
<p><img src="@source/index/分类/考核面试总结/assets/2.png" alt="img" loading="lazy"><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" loading="lazy">编辑</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token operator">:</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token operator">:</span> <span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//和 Array.prototype.slice.call() 有点不同，不存在的索引的值被设置了 undefined。</span>
<span class="token comment">//如果一个对象，既是类数组对象，又是可迭代对象，Array.from() 方法会使用该对象的迭代器方法。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<h3 id="_5-如图-连续多次bind-的结果是什么" tabindex="-1"><a class="header-anchor" href="#_5-如图-连续多次bind-的结果是什么" aria-hidden="true">#</a> 5. 如图，连续多次bind()的结果是什么？</h3>
<p><img src="@source/index/分类/考核面试总结/assets/3.png" alt="img" loading="lazy"><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" loading="lazy">编辑</p>
<p>bind()方法：bind() 方法为被选元素添加一个或多个事件处理程序，并规定事件发生时运行的函数。</p>
<p>想要弄懂bind()就需要知道为什么需要改变this指向。<a href="https://blog.csdn.net/weixin_63050915/article/details/127096691?csdn_share_tail=%7B%22type%22%3A%22blog%22%2C%22rType%22%3A%22article%22%2C%22rId%22%3A%22127096691%22%2C%22source%22%3A%22weixin_63050915%22%7D" target="_blank" rel="noopener noreferrer">详细点击这里<ExternalLinkIcon/></a></p>
<p>我们要明白在js中，<strong>多次<code v-pre>bind()</code>只有第一次绑定会生效</strong>。</p>
<blockquote>
<ul>
<li><strong>后面的bind只能改变上一个bind的this指向</strong>，最终foo执行绑定的this是由第一次bind决定</li>
<li>因此不管foo执行多少bind，都是第一次bind绑定的对象</li>
</ul>
</blockquote>
<h3 id="_6-说说什么是防抖和节流-尝试自定义防抖函数debounce和节流函数throttle" tabindex="-1"><a class="header-anchor" href="#_6-说说什么是防抖和节流-尝试自定义防抖函数debounce和节流函数throttle" aria-hidden="true">#</a> 6.说说什么是防抖和节流？尝试自定义防抖函数debounce和节流函数throttle?</h3>
<p><strong>防抖：<strong>一个函数</strong>连续多次</strong>触发，我们只执行最后<strong>一次</strong>。</p>
<p><strong>节流：<strong>一个函数</strong>连续多次</strong>触发，我们按照一定的时间<strong>间隔多次</strong>执行。</p>
<p>eg：</p>
<ol>
<li>一个按钮被点击时，会发送网络请求。为了<strong>防止用户无意多次点击</strong>，或有人恶意连续发送请求，我们不希望按钮连续被点击时，每次都发送网络请求。而是过一定时间没有再点击时，我们才发送请求——即<strong>只执行最后一次</strong>，而这种操纵就是防抖。</li>
<li>滚动事件中会触发网络请求，但是我们不希望在滚动时一直发送网络请求，而是<strong>隔一定时间</strong>发起一次——这种操作就是节流。</li>
</ol>
<p><strong>防抖函数：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> time <span class="token operator">=</span> <span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token comment">// 使用闭包（这样节流函数复用时，不会相互影响，且不污染全局变量）</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter"><span class="token operator">...</span>args</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果在500毫秒内再次触发，即timer存在，此时清除掉这个timer，因此这里就实现了执行只最后一次</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span> <span class="token comment">// 利用apply绑定this，同时展开args数组并传参</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<p><strong>节流函数：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// fn是要节流的函数，wait是时间间隔，默认500毫秒</span>
<span class="token keyword">const</span> <span class="token function-variable function">myThrottle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> time<span class="token operator">=</span> <span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter"><span class="token operator">...</span>args</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果在500毫秒内再次触发，即timer存在，此时return，等待这个timer执行完毕。</span>
    <span class="token comment">// 这里实现了时间间隔</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token keyword">return</span>

    <span class="token comment">// 这里表示第一次触发，或是上一个timer执行完毕。就可以重新开启一个定时器。</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      timer <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<h3 id="_7-写出-10-10-10-10-10-map-parseint-的结果" tabindex="-1"><a class="header-anchor" href="#_7-写出-10-10-10-10-10-map-parseint-的结果" aria-hidden="true">#</a> 7.写出 ['10', '10', '10', '10', '10'].map(parseInt) 的结果</h3>
<p><code v-pre>map()</code>方法定义在JavaScript的<code v-pre>Array</code>中，它<strong>返回一个新的数组</strong>，数组中的元素为原始数组调用函数处理后的值。</p>
<blockquote>
<ol>
<li><code v-pre>map()</code>不会对空数组进行检测</li>
<li><code v-pre>map()</code>不会改变原始数组</li>
</ol>
</blockquote>
<p><code v-pre>parseInt()</code> 函数解析字符串并返回整数。只返回字符串中的<strong>第一个数字</strong>！</p>
<p>它指定了要转换的字符串的基准进制(通俗点讲，就是告诉它，这个将被转换的字符串是几进制的)</p>
<p>那么本题按照对数组中每一个元素对进行下标的进制转换</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">'10'</span><span class="token punctuation">,</span><span class="token string">'10'</span><span class="token punctuation">,</span><span class="token string">'10'</span>，<span class="token string">'10'</span><span class="token punctuation">,</span><span class="token string">'10'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>parseInt<span class="token punctuation">)</span><span class="token punctuation">)</span>等同于

<span class="token punctuation">[</span><span class="token string">'10'</span><span class="token punctuation">,</span><span class="token string">'10'</span><span class="token punctuation">,</span><span class="token string">'10'</span>，<span class="token string">'10'</span><span class="token punctuation">,</span><span class="token string">'10'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span>index<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//  parseInt('10', 0)  10 </span>
<span class="token comment">//  parseInt('10', 1)  NaN  </span>
<span class="token comment">//  parseInt('10', 2)  2</span>
<span class="token comment">//  parseInt('10', 3)  3</span>
<span class="token comment">//  parseInt('10', 4)  4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<h3 id="_8-es6箭头函数和普通函数有哪些区别。" tabindex="-1"><a class="header-anchor" href="#_8-es6箭头函数和普通函数有哪些区别。" aria-hidden="true">#</a> 8.ES6箭头函数和普通函数有哪些区别。</h3>
<ul>
<li>普通函数的this中总是指向调用它的那个对象。而箭头函数没有它自己的this，它的this永远指向它的定义环境，任何方法都不能改变它的this指向，如call(),bind(),apply()。（正应为他没有this，所以就不能用作构造函数，也没有原型对象）。</li>
<li>箭头函数不能用作构造函数，所以就不能使用new命令，否则会报错。</li>
<li>箭头函数没有原型对象。</li>
<li>箭头函数不能使用argumen对象，该对象在函数体内不存在。如果要用，可以用rest参数代替。</li>
<li>变量提升：由于js的内存机制，function的级别最高，而用箭头函数定义函数的时候，需要var(let、const）关键字，而var所定义的变量不能得到变量提升。故箭头函数一定要定义于调用之前。</li>
<li>箭头函数不能使用yield命令，因此箭头函数不能用作genertor函数。</li>
</ul>
<h3 id="_9-如何使用js计算一个html页面中有多少种标签" tabindex="-1"><a class="header-anchor" href="#_9-如何使用js计算一个html页面中有多少种标签" aria-hidden="true">#</a> 9.如何使用js计算一个html页面中有<strong>多少种</strong>标签？</h3>
<p>这道题主要考察了 ：1.如何获取所有DOM节点。2.去重</p>
<p>1.方法一，也是最简单的一个。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">elem</span><span class="token operator">=></span> elem<span class="token punctuation">.</span>tagName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>size
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<p>2.方法二，主要区别是代码展开写，在去重时利用了indexOf方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> oldarr <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> list <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>oldarr<span class="token punctuation">,</span> <span class="token parameter">ele</span> <span class="token operator">=></span> ele<span class="token punctuation">.</span>tagName<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//这里我通过箭头函数获取每一个元素的标签名，如果不获取的话就是node节点</span>
            <span class="token keyword">var</span> newarr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> list<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                list<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>newarr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    newarr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newarr<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<h3 id="_10-写出下面代码的输出结果" tabindex="-1"><a class="header-anchor" href="#_10-写出下面代码的输出结果" aria-hidden="true">#</a> 10，写出下面代码的输出结果：</h3>
<p><img src="@source/index/分类/考核面试总结/assets/4.png" alt="img" loading="lazy"><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" loading="lazy">编辑</p>
<blockquote>
<p>答案：undefined 10</p>
</blockquote>
<p><img src="@source/index/分类/考核面试总结/assets/5.png" alt="img" loading="lazy"><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" loading="lazy">编辑</p>
<blockquote>
<p>答案：1 ƒ foo(){
return 'hello'
}
2 undefined
3 'hello'</p>
</blockquote>
<p>变量提升规则：</p>
<ul>
<li>s会将变量的声明提升到js顶部执行，对于var a = 2这种语句，会拆分开，将var a这步进行提升。</li>
<li>变量提升的本质其实是js引擎在编译的时候，就将所有的变量声明了，因此在执行的时候，所有的变量都已经完成声明。</li>
<li>当有多个同名变量的时候，函数声明会覆盖其他的声明。如果有多个函数声明，则由最后一个函数声明覆盖之前的所有声明。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>        <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'*************************************'</span><span class="token punctuation">)</span>
        <span class="token keyword">function</span> <span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token string">'hello1111'</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">var</span> foo<span class="token punctuation">;</span>
            <span class="token keyword">var</span> bar<span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> foo<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//函数声明高于一切，所有函数级别最高，此处直接打印函数</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> bar<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//变量提升，得到'world'</span>
            foo <span class="token operator">=</span> <span class="token string">'hello'</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> foo<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//这里由于被赋值，覆盖前面的函数，所有直接输出'hello'</span>
            <span class="token function-variable function">bar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token string">'world'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<h3 id="_11-map方法和foreach的不同之处" tabindex="-1"><a class="header-anchor" href="#_11-map方法和foreach的不同之处" aria-hidden="true">#</a> 11.map方法和forEach的不同之处？</h3>
<ul>
<li>forEach：<code v-pre>forEach</code>方法允许你通过遍历数组的每个元素来执行函数。重要的是要注意该<code v-pre>forEach</code>方法不返回任何内容，因此，如果你尝试获取<code v-pre>forEach</code>方法的返回值，则会得到 <strong>undefined</strong>。相反，它允许你通过在数组的每个元素上应用回调函数来修改现有数组的值。由于它**允许你修改源数组本身，**所以我们说这是可变的的方法。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>数组<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<ul>
<li>map:<code v-pre>map</code>方法与<code v-pre>forEach</code>方法非常相似——它允许你为数组的每个元素执行一个函数。但不同之处在于 <code v-pre>map</code> 方法使用该函数的返回值<strong>创建了一个新数组</strong>。<code v-pre>map</code>通过在源数组的每个元素上应用回调函数来创建一个新数组。由于<code v-pre>map</code>不改变源数组，我们可以说它是<strong>不可变的方法</strong>。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 回调函数接受3个参数 </span>
<span class="token comment">// 数组的当前值作为第一个参数 </span>
<span class="token comment">// 当前值在数组中的位置作为第二个参数 </span>
<span class="token comment">// 原始源数组作为第三个参数 </span>
<span class="token keyword">const</span> cb <span class="token operator">=</span> <span class="token punctuation">;</span> 
arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> i<span class="token punctuation">,</span> origin</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> 
  <span class="token operator">...</span><span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<h2 id="二-vue2部分" tabindex="-1"><a class="header-anchor" href="#二-vue2部分" aria-hidden="true">#</a> 二，vue2部分</h2>
<h3 id="_1-v-show和v-if的主要区别" tabindex="-1"><a class="header-anchor" href="#_1-v-show和v-if的主要区别" aria-hidden="true">#</a> 1. v-show和v-if的主要区别</h3>
<ul>
<li>v-if是动态的向DOM树内<strong>添加或者删除</strong>DOM元素；v-show是通过<strong>设置DOM元素的display样式</strong>属性控制显隐；</li>
<li>v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show只是简单的基于css切换；</li>
<li>v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译; v-show是在任何条件下（首次条件是否为真）都被编译，然后被缓存，而且DOM元素保留，只是被display设置为不可见；</li>
<li>v-if有更高的切换消耗；v-show有更高的初始渲染消耗；</li>
<li>v-if适合运营条件不大可能改变；v-show适合频繁切换。</li>
</ul>
<h3 id="_2-vue-router传参的方式有哪些" tabindex="-1"><a class="header-anchor" href="#_2-vue-router传参的方式有哪些" aria-hidden="true">#</a> 2.vue-router传参的方式有哪些？</h3>
<p>在vue中实现路由传参的方式有：</p>
<blockquote>
<ul>
<li>$router.push携带参数传参；</li>
<li>params传递实现传参(父传子)；</li>
<li>query传递实现传参(父传子)；</li>
</ul>
</blockquote>
<h3 id="_3-你知道哪些vue-router的钩子函数-说说他们都是什么时候触发的" tabindex="-1"><a class="header-anchor" href="#_3-你知道哪些vue-router的钩子函数-说说他们都是什么时候触发的" aria-hidden="true">#</a> 3.你知道哪些vue-router的钩子函数，说说他们都是什么时候触发的？</h3>
<p><code v-pre>vue-router</code> 的 <strong>钩子函数</strong> ，其实说的就是 <strong>导航守卫</strong> 。</p>
<p>1、全局的路由钩子函数</p>
<p>​    <strong>beforeEach（全局前置钩子）</strong>，意思是在每次每一个路由改变的时候都要执行一遍</p>
<p>​    它有三个参数：</p>
<p>​    to： route：即将要进入的目标 路由对象</p>
<p>​    from：route：当前导航正要离开的路由</p>
<p>​    next：function：一定要调用该方法来resolve这个钩子。执行效果依赖next方法</p>
<p>​    <strong>afterEach（全局后置钩子）</strong></p>
<p>​    beforeEach是在页面加载之前的，而afterEach是在页面加载之后的，所以这些钩子是不会接 受next函数，也不会改变导航本身。</p>
<p>2、单个路由内的钩子函数</p>
<p>​    <strong>beforeEnter</strong></p>
<p>​    可以直接在路由配置上直接定义beforeEnter，这些守卫与全局前置守卫的方法参数是一样的</p>
<p>3、组件内的路由钩子函数</p>
<p>​    <strong>beforeRouteEnter</strong>、<strong>beforeRouteUpdate</strong>、<strong>beforeRouteLeave</strong></p>
<h3 id="_4-什么是spa-说说spa和mpa的优缺点" tabindex="-1"><a class="header-anchor" href="#_4-什么是spa-说说spa和mpa的优缺点" aria-hidden="true">#</a> 4.什么是SPA？说说SPA和MPA的优缺点</h3>
<p>SPA（ Single-page Application ）只有一个html页面，所有跳转方式都是通过组件切换完成的。</p>
<p><strong>优点：</strong></p>
<blockquote>
<ul>
<li>用户体验好，流畅。</li>
<li>因为是单页面，所以对服务器的压力较小。</li>
<li>可以在页面切换的时候增加一些炫酷的动画效果。</li>
<li>代码的可复用，且由于是组件化开发，有利于后期的维护。</li>
</ul>
</blockquote>
<p><strong>缺点：</strong></p>
<blockquote>
<ul>
<li>页面复杂度变大，开发难度较大。</li>
<li>不利于SEO</li>
<li>首次加载的时候用时较长。</li>
</ul>
</blockquote>
<p>MPA（Multi-page Application）就是指一个应用中有多个页面，页面跳转时是整页刷新，拥右多个html页面，常见于PC端网站。</p>
<p><strong>优点：</strong></p>
<blockquote>
<ul>
<li>首屏加载较快，只需要加载本页面的HTML、CSS、JS</li>
<li>有利于优化SEO。</li>
<li>页面复杂度不高，开发成本较低。</li>
</ul>
</blockquote>
<p><strong>缺点：</strong></p>
<blockquote>
<ul>
<li>网站的后期维护难度较大。</li>
<li>页面之间的跳转受网络以及设备等影响，耗时较长，出现空白等待的页面，用户体验不高</li>
<li>代码重复度大。</li>
<li>对服务器的压力较大</li>
</ul>
</blockquote>
<h3 id="_5-简述vue2响应式原理" tabindex="-1"><a class="header-anchor" href="#_5-简述vue2响应式原理" aria-hidden="true">#</a> 5.简述Vue2响应式原理</h3>
<p>Vue的响应式原理 ：<strong>核心是通过 ES5 的 Object.defindeProperty 进行数据劫持</strong> ，然后利用 get 和 set 方法进行数据的获取和设置 。这时的data中声明的属性都将被添加到 get 和 set 中 ，当读取data中的数据中时自动调用 get 方法 ，当修改数据时 或者数据发生改变时自动调用 set 方法。去侦听检测数据的变化时同时会通知观察者 Wacher 观察者 Wacher 自动重新触发 render 当前组件 （子组件不会重新渲染）。生成新的虚拟 DOM 树 Vue的框架会遍历并对比新旧虚拟DOM树上面的每个节点的差别并记录下来。最后加载操作，将所有记录下来的节点，局部修改到真实的DOM树上。</p>
</div></template>


