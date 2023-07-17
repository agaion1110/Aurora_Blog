<template><div><h1 id="ajax总结笔记" tabindex="-1"><a class="header-anchor" href="#ajax总结笔记" aria-hidden="true">#</a> AJAX总结笔记</h1>
<h2 id="_1-什么是-ajax" tabindex="-1"><a class="header-anchor" href="#_1-什么是-ajax" aria-hidden="true">#</a> 1，什么是 AJAX</h2>
<p>AJAX = <em>A</em>synchronous <em>J</em>avaScript <em>A</em>nd <em>X</em>ML。AJAX 并非编程语言！</p>
<p>AJAX 仅仅组合了：</p>
<ul>
<li>浏览器内建的 XMLHttpRequest 对象（从 web 服务器请求数据）</li>
<li>JavaScript 和 HTML DOM（显示或使用数据）</li>
</ul>
<p>Ajax 是一个令人误导的名称。Ajax 应用程序可能使用 XML 来传输数据，但将数据作为纯文本或 JSON 文本传输也同样常见。</p>
<blockquote>
<p>通过 AJAX 可以在浏览器中向服务器发送异步请求，最大的优势：<mark>无刷新获取数据</mark>。AJAX 不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式。</p>
</blockquote>
<!-- more -->
<h1 id="_2-ajax优缺点" tabindex="-1"><a class="header-anchor" href="#_2-ajax优缺点" aria-hidden="true">#</a> 2，AJAX优缺点</h1>
<h2 id="_2-1-ajax-的优点" tabindex="-1"><a class="header-anchor" href="#_2-1-ajax-的优点" aria-hidden="true">#</a> 2.1，AJAX 的优点</h2>
<ol>
<li>可以无需刷新页面而与服务器端进行通信。</li>
<li>允许你根据用户事件来更新部分页面内容。</li>
</ol>
<h2 id="_2-2-ajax-的缺点" tabindex="-1"><a class="header-anchor" href="#_2-2-ajax-的缺点" aria-hidden="true">#</a> 2.2， AJAX 的缺点</h2>
<ol>
<li>没有浏览历史，不能回退</li>
<li>存在跨域问题(同源)</li>
<li>SEO 不友好</li>
</ol>
<h1 id="_3-ajax如何工作" tabindex="-1"><a class="header-anchor" href="#_3-ajax如何工作" aria-hidden="true">#</a> 3，AJAX如何工作</h1>
<figure><img src="@source/index/分类/AJAX/assets/6.gif" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" loading="lazy">编辑</p>
<ol>
<li>网页中发生一个事件（页面加载、按钮点击）</li>
<li>由 JavaScript 创建 XMLHttpRequest 对象</li>
<li>XMLHttpRequest 对象向 web 服务器发送请求</li>
<li>服务器处理该请求</li>
<li>服务器将响应发送回网页</li>
<li>由 JavaScript 读取响应</li>
<li>由 JavaScript 执行正确的动作（比如更新页面）</li>
</ol>
<h1 id="_4-原生ajax" tabindex="-1"><a class="header-anchor" href="#_4-原生ajax" aria-hidden="true">#</a> 4，原生AJAX</h1>
<h2 id="_4-1-xmlhttprequest" tabindex="-1"><a class="header-anchor" href="#_4-1-xmlhttprequest" aria-hidden="true">#</a> 4.1，XMLHttpRequest</h2>
<p>有关Ajax的所有操作都是通过<code v-pre>XMLHttpRequest</code>来操作的。</p>
<h2 id="_4-2-服务端准备" tabindex="-1"><a class="header-anchor" href="#_4-2-服务端准备" aria-hidden="true">#</a> 4.2，服务端准备</h2>
<p>在使用Ajax之前，因为需要对服务端发送请求，因此这里使用<code v-pre>express</code>框架，创建<code v-pre>server.js</code>文件搭建一个服务器。由于Ajax默认是服从同源策略，因此在服务器中设置<code v-pre>Access-Control-Allow-Origin</code>响应头在解决跨域问题（CORS跨域）。（详见代码解析）</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//1.引入express</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> request<span class="token punctuation">,</span> response <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//2.创建应用对象</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//3.创建路由规则(GET和POST分别创建)</span>
<span class="token comment">//request是对请求报文的封装</span>
<span class="token comment">//response是对相应报文的封装</span>
<span class="token comment">//GET请求</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/server'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span>response</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">//设置相应头</span>
    response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Allow-Origin"</span><span class="token punctuation">,</span> <span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//设置相应体</span>
    response<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'HELLO AJAX agaion'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//POST请求</span>
 app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/server'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span>response</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
     <span class="token comment">//设置相应头</span>
     response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Allow-Origin"</span><span class="token punctuation">,</span> <span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token comment">//设置相应体</span>
     response<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'HELLO AJAX POST'</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//4.监听端口启动服务端</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"服务已经启动，8000 端口监听中......"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<p>在测试过程中，要保证服务端处于开启状态，开启命令：<code v-pre>node server.js</code></p>
<p><img src="@source/index/分类/AJAX/assets/7.png" alt="img" loading="lazy"><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" loading="lazy">编辑</p>
<h2 id="_4-3-发送ajax请求" tabindex="-1"><a class="header-anchor" href="#_4-3-发送ajax请求" aria-hidden="true">#</a> 4.3，发送AJAX请求</h2>
<h3 id="_4-3-1-发送get请求" tabindex="-1"><a class="header-anchor" href="#_4-3-1-发送get请求" aria-hidden="true">#</a> 4.3.1，发送get请求</h3>
<p>准备一个<code v-pre>html</code>文档，点击按钮向接口<code v-pre>http://127.0.0.1:8000</code>发送请求，请求的数据显示在console（控制台）中。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button<span class="token operator">></span>点击发送请求<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"result"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>script<span class="token operator">></span>
        <span class="token comment">//获取button元素</span>
        <span class="token keyword">const</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> result <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"result"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//绑定事件</span>
        btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//1.创建对象</span>
            <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//2.初始化 设置请求方法和url</span>
            xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token string">'http://127.0.0.1:8000/server?a=100&amp;b=200&amp;c=300'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//3.发送请求</span>
            xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token comment">//4.事件绑定 处理服务端返回的结果</span>
            <span class="token comment">//on:when当什么时候</span>
            <span class="token comment">//readystage:是xml对象中的属性，表示状态0（未初始化即只创建完对象），1（open方法调用完毕），</span>
            <span class="token comment">//           2（send方法调用完毕），3（服务端返回部分结果），4(服务端返回所有结果)</span>
            <span class="token comment">//change:发生了改变</span>
            xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//判断服务端返回了所有的结果</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">//判断相应状态码 200 404 403 401 500</span>
                    <span class="token comment">//2xx 成功</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">//处理结果 行 头 空行 体</span>
                        <span class="token comment">/*
                        //1.相应行
                        console.log(xhr.status);//状态码
                        console.log(xhr.statusText);//状态字符串
                        //2.所有响应头
                        console.log(xhr.getAllResponseHeaders());
                        //3.所有相应体
                        console.log(xhr.response);
                        */</span>
                        result<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> xhr<span class="token punctuation">.</span>response<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<h3 id="_4-3-2-发送post请求" tabindex="-1"><a class="header-anchor" href="#_4-3-2-发送post请求" aria-hidden="true">#</a> 4.3.2，发送post请求</h3>
<p>将原来代码中<code v-pre>xhr.open()</code>第一个参数右<code v-pre>GET</code>改为<code v-pre>POST</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"result"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>script<span class="token operator">></span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        result<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"mouseover"</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//1.创建对象</span>
            <span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">;</span>
            <span class="token comment">//2.初始化对象 设置类型方法和url</span>
            xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'POST'</span><span class="token punctuation">,</span><span class="token string">'http://127.0.0.1:8000/server'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span><span class="token string">'agaion'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//设置请求头</span>
            xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span><span class="token string">'application/x-www-form-urlencoded'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//设置请求头</span>
            
            <span class="token comment">//3.发送</span>
            xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'a=100&amp;b=200&amp;c=300'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//请求体内容</span>
            <span class="token comment">//4.事件绑定</span>
            xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token operator">>=</span><span class="token number">200</span><span class="token operator">&amp;&amp;</span>xhr<span class="token punctuation">.</span>status<span class="token operator">&lt;</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        result<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> xhr<span class="token punctuation">.</span>response<span class="token punctuation">;</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span><span class="token function">getAllResponseHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<p><strong>XMLHttpRequest 对象方法</strong></p>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>new XMLHttpRequest()</td>
<td>创建新的 XMLHttpRequest 对象</td>
</tr>
<tr>
<td>abort()</td>
<td>取消当前请求</td>
</tr>
<tr>
<td>getAllResponseHeaders()</td>
<td>返回头部信息</td>
</tr>
<tr>
<td>getResponseHeader()</td>
<td>返回特定的头部信息</td>
</tr>
<tr>
<td>open(<em>method</em>, <em>url</em>, <em>async</em>, <em>user</em>, <em>psw</em>)</td>
<td>规定请求 			 			method：请求类型 GET 或 POST 			url：文件位置 			async：true（异步）或 false（同步） 			user：可选的用户名称 			psw：可选的密码</td>
</tr>
<tr>
<td>send()</td>
<td>将请求发送到服务器，用于 GET 请求</td>
</tr>
<tr>
<td>send(<em>string</em>)</td>
<td>将请求发送到服务器，用于 POST 请求</td>
</tr>
<tr>
<td>setRequestHeader()</td>
<td>向要发送的报头添加标签/值对</td>
</tr>
</tbody>
</table>
<p><strong>XMLHttpRequest 对象属性</strong></p>
<table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>onreadystatechange</td>
<td>定义当 readyState 属性发生变化时被调用的函数</td>
</tr>
<tr>
<td>readyState</td>
<td>保存 XMLHttpRequest 的状态。 			 			0：请求未初始化 			1：服务器连接已建立 			2：请求已收到 			3：正在处理请求 			4：请求已完成且响应已就绪</td>
</tr>
<tr>
<td>responseText</td>
<td>以字符串返回响应数据</td>
</tr>
<tr>
<td>responseXML</td>
<td>以 XML 数据返回响应数据</td>
</tr>
<tr>
<td>status</td>
<td>返回请求的状态号 			 			200: &quot;OK&quot; 			403: &quot;Forbidden&quot; 			404: &quot;Not Found&quot; 		 			如需完整列表请访问 <a href="https://www.w3school.com.cn/tags/html_ref_httpmessages.asp" target="_blank" rel="noopener noreferrer">Http 消息参考手册<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>statusText</td>
<td>返回状态文本（比如 &quot;OK&quot; 或 &quot;Not Found&quot;）</td>
</tr>
</tbody>
</table>
<h3 id="_4-4-3-设置请求头信息" tabindex="-1"><a class="header-anchor" href="#_4-4-3-设置请求头信息" aria-hidden="true">#</a> 4.4.3，设置请求头信息</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Content-Type  请求体类型</span>
<span class="token comment">// application/x-www-form-urlencoded 查询字符串类型</span>
xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'application/x-www-form-urlencoded'</span><span class="token punctuation">)</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<p>自定义请求头</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Name'</span><span class="token punctuation">,</span> <span class="token string">'Alice'</span><span class="token punctuation">)</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<p>此时服务端需要设置<code v-pre>Access-Control-Allow-Headers</code>字段，表示可以接收处理的请求头，否则会报错：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/index'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Origin'</span><span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">)</span>
  response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Headers'</span><span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">)</span>
  response<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'post ajax'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<p>一般可以在请求头中存放服务端要校验的信息。</p>
<h1 id="_5-ajax响应时问题" tabindex="-1"><a class="header-anchor" href="#_5-ajax响应时问题" aria-hidden="true">#</a> 5，AJAX响应时问题</h1>
<h3 id="_5-1-服务端响应-json数据时" tabindex="-1"><a class="header-anchor" href="#_5-1-服务端响应-json数据时" aria-hidden="true">#</a> 5.1，服务端响应 json数据时</h3>
<p>服务端若需要将json对象的数据返回给客户端，需要将其转为JSON字符串再发送，<code v-pre>server.js</code>添加代码如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// all()表示可以匹配所有请求的方法</span>
app<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token string">'/json-data'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Origin'</span><span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">)</span>
  response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Headers'</span><span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">)</span>
  <span class="token comment">// 响应json数据，需要将json对象转为字符串格式</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'洋芋炒土豆'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
  <span class="token punctuation">}</span>
  response<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<p>客户端处理结果时，需要将json字符串转为json对象：</p>
<p>（手动）</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token string">'http://127.0.0.1:8282/json-data'</span><span class="token punctuation">)</span>
  xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将服务端返回的json数据转为json对象</span>
        <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<p>（自动）可以直接在<code v-pre>xhr</code>对象上设置响应体类型为<code v-pre>json</code>，就不用执行转换步骤：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">'json'</span>
  xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token string">'http://127.0.0.1:8282/json-data'</span><span class="token punctuation">)</span>
  xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> data <span class="token operator">=</span> xhr<span class="token punctuation">.</span>response
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<h3 id="_5-2-请求超时和网络异常处理" tabindex="-1"><a class="header-anchor" href="#_5-2-请求超时和网络异常处理" aria-hidden="true">#</a> 5.2，请求超时和网络异常处理</h3>
<p>可以在<code v-pre>xhr</code>对象上设置超时时间，若在这个时间之内没有获取到响应结果，则会自动取消。例如，在服务端设置3秒后返回结果：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 延迟响应</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/delay'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Origin'</span><span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">)</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    response<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'延迟响应'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<p>客户端设置超时时间为2s：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"result"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>script<span class="token operator">></span>
        <span class="token keyword">var</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> result <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".result"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">;</span>
            xhr<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span>
            xhr<span class="token punctuation">.</span><span class="token function-variable function">ontimeout</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"网络超时，请稍后重试！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            xhr<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"您的网络似乎出现了一些问题！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span><span class="token string">"http://127.0.0.1:8000/agaion"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState<span class="token operator">===</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token operator">>=</span><span class="token number">200</span><span class="token operator">&amp;&amp;</span>xhr<span class="token punctuation">.</span>status<span class="token operator">&lt;</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        result<span class="token punctuation">.</span>innerHTML<span class="token operator">=</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<h3 id="_5-3-取消发送" tabindex="-1"><a class="header-anchor" href="#_5-3-取消发送" aria-hidden="true">#</a> 5.3，取消发送</h3>
<p><code v-pre>xhr</code>对象上的<code v-pre>abort()</code>可以用于取消请求：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
        <span class="token keyword">var</span> btn01 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".btn01"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> btn02 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".btn02"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> isSending <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        btn01<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>isSending<span class="token punctuation">)</span> xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             isSending <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
             xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span><span class="token string">".../agaion"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             xhr<span class="token punctuation">.</span><span class="token function">onreadystatechange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>reday<span class="token operator">===</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    isSending <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
             <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        btn02<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//取消发送</span>
        <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<h3 id="_5-4-重复发送请求" tabindex="-1"><a class="header-anchor" href="#_5-4-重复发送请求" aria-hidden="true">#</a> 5.4，重复发送请求</h3>
<p>当我们多次点击按钮发送请求时，会对服务器造成一定压力，且多次请求的操作并不是必要的，解决这个重复请求问题，需要当再次发送请求时，把上一次没完成的请求取消掉。</p>
<p><img src="@source/index/分类/AJAX/assets/8.png" alt="img" loading="lazy"><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" loading="lazy">编辑</p>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"btn01"</span><span class="token operator">></span>点击发送<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"btn02"</span><span class="token operator">></span>点击取消<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span>script<span class="token operator">></span>
        <span class="token keyword">var</span> btn01 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".btn01"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> btn02 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".btn02"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        btn01<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
             xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span><span class="token string">"http://127.0.0.1:8000/agaion"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        btn02<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<h1 id="_6-用不同方法发送ajax请求-非原生" tabindex="-1"><a class="header-anchor" href="#_6-用不同方法发送ajax请求-非原生" aria-hidden="true">#</a> 6，用不同方法发送AJAX请求（非原生）</h1>
<h2 id="_6-1-jquery发送ajax请求" tabindex="-1"><a class="header-anchor" href="#_6-1-jquery发送ajax请求" aria-hidden="true">#</a> 6.1，jQuery发送AJAX请求</h2>
<h3 id="_6-1-1-准备" tabindex="-1"><a class="header-anchor" href="#_6-1-1-准备" aria-hidden="true">#</a> 6.1.1，准备</h3>
<p>我们可以使用JavaScript的对象XMLHttpRequest来实现原生Ajax，但这种方法比较复杂，不易编写。jQuery已经封装了Ajax，使得发起Ajax请求比较容易，这里我们首先需要在head标记中引入jQuery.js文件。例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<h3 id="_6-1-2-ajax" tabindex="-1"><a class="header-anchor" href="#_6-1-2-ajax" aria-hidden="true">#</a> 6.1.2， <strong>$.ajax()</strong></h3>
<p>形式：$.ajax({name:val, name:val,...});
可选字段：</p>
<ol>
<li>url：链接地址，字符串表示</li>
<li A:="" css-module=".', .'" B:="">data：需发送到服务器的数据，GET与POST都可以，格式为</li>
<li>type：&quot;POST&quot; 或 &quot;GET&quot;，请求类型</li>
<li>timeout：请求超时时间，单位为毫秒，数值表示</li>
<li>cache：是否缓存请求结果，bool表示</li>
<li>contentType：内容类型，默认为&quot;application/x-www-form-urlencoded&quot;</li>
<li>dataType：服务器响应的数据类型，字符串表示；当填写为json时，回调函数中无需再对数据反序列化为json</li>
<li>success：请求成功后，服务器回调的函数error：请求失败后，服务器回调的函数</li>
<li>complete：请求完成后调用的函数，无论请求是成功还是失败，都会调用该函数；如果设置了success与error函数，则该函数在它们之后被调用</li>
<li>async：是否异步处理，bool表示，默认为true；设置该值为false后，JS不会向下执行，而是原地等待服务器返回数据，并完成相应的回调函数后，再向下执行</li>
<li>username：访问认证请求中携带的用户名，字符串表示</li>
<li>password：返回认证请求中携带的密码，字符串表示</li>
</ol>
<h3 id="_6-1-3-post" tabindex="-1"><a class="header-anchor" href="#_6-1-3-post" aria-hidden="true">#</a> 6.1.3， $.post()</h3>
<p>形式：$.post(url, data, func, dataType);
可选参数：</p>
<ol>
<li>url：链接地址，字符串表示</li>
<li A:="" css-module=".', .'" B:="">data：需要发送到服务器的数据，格式为</li>
<li>func：请求成功后，服务器回调的函数；function(data, status, xhr)，其中data为服务器回传的数据，status为响应状态，xhr为XMLHttpRequest对象，个人感觉关注data参数即可</li>
<li>dataType：服务器返回数据的格式</li>
</ol>
<h3 id="_6-1-4-get" tabindex="-1"><a class="header-anchor" href="#_6-1-4-get" aria-hidden="true">#</a> 6.1.4， $.get()</h3>
<p>形式：*<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">.</mi><mi>g</mi><mi>e</mi><mi>t</mi><mo stretchy="false">(</mo><mi>u</mi><mi>r</mi><mi>l</mi><mo separator="true">,</mo><mi>d</mi><mi>a</mi><mi>t</mi><mi>a</mi><mo separator="true">,</mo><mi>f</mi><mi>u</mi><mi>n</mi><mi>c</mi><mo separator="true">,</mo><mi>d</mi><mi>a</mi><mi>t</mi><mi>a</mi><mi>T</mi><mi>y</mi><mi>p</mi><mi>e</mi><mo stretchy="false">)</mo><mo separator="true">;</mo><mo>∗</mo><mtext>其各个参数所示意义与</mtext></mrow><annotation encoding="application/x-tex">.get(url, data, func, dataType);*
 其各个参数所示意义与</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">.</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal">e</span><span class="mord mathnormal">t</span><span class="mopen">(</span><span class="mord mathnormal">u</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal">a</span><span class="mord mathnormal">t</span><span class="mord mathnormal">a</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">u</span><span class="mord mathnormal">n</span><span class="mord mathnormal">c</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal">a</span><span class="mord mathnormal">t</span><span class="mord mathnormal">a</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mord mathnormal">p</span><span class="mord mathnormal">e</span><span class="mclose">)</span><span class="mpunct">;</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">∗</span><span class="mord cjk_fallback">其各个参数所示意义与</span></span></span></span>.post()一致，在此不再列出，区别是请求类型是GET。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            $<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"http://127.0.0.1:8000/agaion-jQuery"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            $<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"http://127.0.0.1:8000/agaion-jQuery"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token comment">//url</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://127.0.0.1:8000/server"</span><span class="token punctuation">,</span>
                <span class="token comment">//响应体参数</span>
                <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token literal-property property">c</span><span class="token operator">:</span><span class="token number">300</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">//响应体类型</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span>
                <span class="token comment">//响应体结果</span>
                <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">'json'</span><span class="token punctuation">,</span>
                <span class="token comment">//成功的回调</span>
                <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">//超时的时间</span>
                <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">4000</span><span class="token punctuation">,</span>
                <span class="token comment">//失败的回调</span>
                <span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"出错啦!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">200</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<h2 id="_6-2-axios发送请求" tabindex="-1"><a class="header-anchor" href="#_6-2-axios发送请求" aria-hidden="true">#</a> 6.2，axios发送请求</h2>
<h3 id="_6-2-1-准备" tabindex="-1"><a class="header-anchor" href="#_6-2-1-准备" aria-hidden="true">#</a> 6.2.1，准备</h3>
<p>Axios是一个基于Promise的 HTTP库，也是对原生XHR的封装，可以在浏览器和node.js 中使用。在使用时需要映入封装的文件，我们可以通过node.js的npm下载，也可以通过网页跨域加载。这里我们运用网页跨域加载。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.bootcdn.net/ajax/libs/axios/1.0.0-alpha.1/axios.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<h3 id="_6-2-2-方式-最为简单-简洁" tabindex="-1"><a class="header-anchor" href="#_6-2-2-方式-最为简单-简洁" aria-hidden="true">#</a> 6.2.2，方式 （最为简单，简洁）</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
        <span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//配置baseURL</span>
        axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">'http://127.0.0.1:8000'</span><span class="token punctuation">;</span>
        btn<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//GET请求</span>
            axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/axios-server"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                <span class="token comment">//url 参数</span>
                <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">04213077</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">vip</span><span class="token operator">:</span> <span class="token number">666</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">//请求头信息</span>
                <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"agaion"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        btn<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//POST请求</span>
            axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"/axios-server?aaaa"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'agaion'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">"ch"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">//url参数</span>
                    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">0421307</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">vip</span><span class="token operator">:</span> <span class="token number">9</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">180</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>

                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        btn<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token comment">//请求方法</span>
                <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>
                <span class="token comment">//url</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"/axios-server"</span><span class="token punctuation">,</span>
                <span class="token comment">//url参数</span>
                <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">vip</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">level</span><span class="token operator">:</span><span class="token number">30</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">//头信息</span>
                <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">200</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">//请求体设置</span>
                <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'agaion'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">pasword</span><span class="token operator">:</span> <span class="token string">"asasas"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token operator">=></span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<h2 id="_6-3-fetch发送请求" tabindex="-1"><a class="header-anchor" href="#_6-3-fetch发送请求" aria-hidden="true">#</a> 6.3，fetch发送请求</h2>
<p>fetch号称是ajax的替代品，fetch是一种HTTP数据请求的方式，是XMLHttpRequest的一种替代方案。fetch不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象。</p>
<p>Fetch API 主要有两个特点：一是接口合理化，AJAX 是将所有不同性质的接口都放在 XHR 对象上，而Fetch是将它们分散在几个不同的对象上，设计更合理；二是Fetch操作返回 Promise 对象，避免了嵌套的回调函数。</p>
<p>由于fetch本身就是js的自带属性，所以不需要引入其他封装包。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
        <span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"http://127.0.0.1:8000/fetch-server?id=04213077&amp;name=728"</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
                <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"zhangwei"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">"username=admin&amp;pasename=admin"</span>            
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token operator">=></span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token operator">=></span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<h1 id="_7-同源策略和解决跨域问题" tabindex="-1"><a class="header-anchor" href="#_7-同源策略和解决跨域问题" aria-hidden="true">#</a> 7，同源策略和解决跨域问题</h1>
<h2 id="_7-1-同源策略" tabindex="-1"><a class="header-anchor" href="#_7-1-同源策略" aria-hidden="true">#</a> 7.1，同源策略</h2>
<h3 id="_7-1-1-什么是同源策略" tabindex="-1"><a class="header-anchor" href="#_7-1-1-什么是同源策略" aria-hidden="true">#</a> 7.1.1，什么是同源策略</h3>
<ul>
<li>
<p>同源策略是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，<strong>浏览器很容易受到XSS、CSRF等攻击。</strong></p>
</li>
<li>
<p>所谓同源是指&quot;</p>
<p>协议+域名+端口</p>
<p>&quot;三者相同，即便两个不同的域名指向同一个ip地址，也非同源。</p>
<ul>
<li>形式：<code v-pre>协议：//域名:(端口号)</code></li>
</ul>
</li>
</ul>
<figure><img src="@source/index/分类/AJAX/assets/9.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" loading="lazy">编辑</p>
<h3 id="_7-1-2-同源策略的限制内容" tabindex="-1"><a class="header-anchor" href="#_7-1-2-同源策略的限制内容" aria-hidden="true">#</a> 7.1.2，同源策略的限制内容</h3>
<p>同源策略限制以下几种行为：</p>
<ul>
<li>Cookie、LocalStorage 和 IndexDB 无法读取</li>
<li>DOM和JS对象无法获得</li>
<li>AJAX 请求不能发送，被浏览器拦截了 但是有三个标签是允许跨域加载资源：</li>
<li><code v-pre>&lt;img src=XXX&gt;</code></li>
<li><code v-pre>&lt;link href=XXX&gt;</code></li>
<li><code v-pre>&lt;script src=XXX&gt;</code></li>
</ul>
<h2 id="_7-2-跨域" tabindex="-1"><a class="header-anchor" href="#_7-2-跨域" aria-hidden="true">#</a> 7.2，跨域</h2>
<h3 id="_7-2-1-跨域的原理" tabindex="-1"><a class="header-anchor" href="#_7-2-1-跨域的原理" aria-hidden="true">#</a> 7.2.1，跨域的原理</h3>
<ul>
<li><strong>跨域</strong>，是指浏览器<strong>不能执行</strong>其他网站的脚本。它是由浏览器的<code v-pre>同源策略</code>造成的。</li>
<li><strong>跨域原理</strong>，即是通过各种方式，<code v-pre>避开浏览器的安全限制</code>。</li>
</ul>
<h3 id="_7-2-2-jsonp跨域" tabindex="-1"><a class="header-anchor" href="#_7-2-2-jsonp跨域" aria-hidden="true">#</a> 7.2.2， JSONP跨域</h3>
<p><strong>（1）原理：</strong></p>
<ul>
<li><code v-pre>JSONP</code>通过同源策略涉及不到的&quot;漏洞&quot;，也就是像<code v-pre>img</code>中的<code v-pre>src</code>，<code v-pre>link</code>标签的<code v-pre>href</code>，<code v-pre>script</code>的<code v-pre>src</code>都<strong>不受同源策略的限制</strong>。</li>
<li>利用这个特性，服务端<strong>不再返回 JSON 格式</strong>的数据，而是 <strong>返回一段调用某个函数的 js 代码</strong>，在 src 中进行了调用，这样实现了跨域。</li>
</ul>
<p><strong>（2）步骤：</strong></p>
<ol>
<li>创建一个script标签</li>
<li>script的src属性设置接口地址</li>
<li>接口参数，必须要带一个自定义函数名（前后端约定好），要不然后台无法返回数据</li>
<li>通过自定义函数名去接受返回的数据</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 动态创建 script</span>
<span class="token keyword">var</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'script'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
script<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'type'</span><span class="token punctuation">,</span> <span class="token string">'text/javascript'</span><span class="token punctuation">)</span>
<span class="token comment">// 设置回调函数，用于后端返回的js代码中进行调用</span>
<span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//设置 script 的 src 属性，并设置请求地址</span>
script<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'http://localhost:3000/?callback=getData'</span><span class="token punctuation">;</span>
<span class="token comment">// 让 script 生效</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//将返回的文本插入页面执行，让script调用回调函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
<p><strong>（3）JSONP 的缺点</strong>:</p>
<p>JSON 只支持 get，因为 script 标签只能使用 get 请求； JSONP 需要后端配合返回指定格式的数据。</p>
<h3 id="_7-2-3-cors跨域" tabindex="-1"><a class="header-anchor" href="#_7-2-3-cors跨域" aria-hidden="true">#</a> 7.2.3，CORS跨域</h3>
<p>添加请求头实现跨域。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Allow-Headers"</span><span class="token punctuation">,</span> <span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动" tabindex="0" loading="lazy"><figcaption>点击并拖拽以移动</figcaption></figure>
</div></template>


