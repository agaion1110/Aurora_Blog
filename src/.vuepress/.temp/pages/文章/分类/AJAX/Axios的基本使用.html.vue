<template><div><h1 id="axios的基本使用" tabindex="-1"><a class="header-anchor" href="#axios的基本使用" aria-hidden="true">#</a> Axios的基本使用</h1>
<h2 id="axios简介" tabindex="-1"><a class="header-anchor" href="#axios简介" aria-hidden="true">#</a> Axios简介</h2>
<p>Axios 是一个基于 <em><a href="https://javascript.info/promise-basics" target="_blank" rel="noopener noreferrer">promise<ExternalLinkIcon/></a></em> 网络请求库，作用于<a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><code v-pre>node.js</code><ExternalLinkIcon/></a> 和浏览器中。在服务端它使用原生 node.js <code v-pre>http</code> 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。</p>
<h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h3>
<ul>
<li>从浏览器创建 <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest" target="_blank" rel="noopener noreferrer">XMLHttpRequests<ExternalLinkIcon/></a></li>
<li>从 node.js 创建 <a href="http://nodejs.org/api/http.html" target="_blank" rel="noopener noreferrer">http<ExternalLinkIcon/></a> 请求</li>
<li>支持 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">Promise<ExternalLinkIcon/></a> API</li>
<li>拦截请求和响应</li>
<li>转换请求和响应数据</li>
<li>取消请求</li>
<li>自动转换JSON数据</li>
<li>客户端支持防御<a href="http://en.wikipedia.org/wiki/Cross-site_request_forgery" target="_blank" rel="noopener noreferrer">XSRF<ExternalLinkIcon/></a></li>
</ul>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<Tabs id="57" :data='[{"title":"npm","id":"npm"},{"title":"pnpm","id":"pnpm"},{"title":"yarn","id":"yarn"},{"title":"CDN","id":"CDN"}]' tab-id="environment">
<template #tab0="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">pnpm</span> <span class="token function">install</span> axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">yarn</span> <span class="token function">add</span> axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab3="{ title, value, isActive }">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="常规axios发送post请求" tabindex="-1"><a class="header-anchor" href="#常规axios发送post请求" aria-hidden="true">#</a> 常规Axios发送POST请求</h2>
<p>发起一个POST请求</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/user'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    firstName<span class="token operator">:</span> <span class="token string">'Fred'</span><span class="token punctuation">,</span>
    lastName<span class="token operator">:</span> <span class="token string">'Flintstone'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发起多个并发请求</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/12345'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/12345/permissions'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//使用all方法等待两个请求都执行完毕之后再返回结果</span>
<span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>results<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> acct <span class="token operator">=</span> results<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> perm <span class="token operator">=</span> results<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios-api" tabindex="-1"><a class="header-anchor" href="#axios-api" aria-hidden="true">#</a> Axios API</h2>
<p>可以向 <code v-pre>axios</code> 传递相关配置来创建请求</p>
<h3 id="axios-config" tabindex="-1"><a class="header-anchor" href="#axios-config" aria-hidden="true">#</a> axios(config)</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 发起一个post请求</span>
<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">'post'</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">'/user/12345'</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    firstName<span class="token operator">:</span> <span class="token string">'Fred'</span><span class="token punctuation">,</span>
    lastName<span class="token operator">:</span> <span class="token string">'Flintstone'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="axios-url-config" tabindex="-1"><a class="header-anchor" href="#axios-url-config" aria-hidden="true">#</a> axios(url[, config])</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 发起一个 GET 请求 (默认请求方式)</span>
<span class="token function">axios</span><span class="token punctuation">(</span><span class="token string">'/user/12345'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求方式别名" tabindex="-1"><a class="header-anchor" href="#请求方式别名" aria-hidden="true">#</a> 请求方式别名</h3>
<p>为了方便起见，已经为所有支持的请求方法提供了别名。</p>
<ul>
<li><strong>axios.request(config)</strong></li>
<li><strong>axios.get(url[, config])</strong></li>
<li><strong>axios.delete(url[, config])</strong></li>
<li><strong>axios.head(url[, config])</strong></li>
<li><strong>axios.options(url[, config])</strong></li>
<li><strong>axios.post(url[, data[, config]])</strong></li>
<li><strong>axios.put(url[, data[, config]])</strong></li>
<li><strong>axios.patch(url[, data[, config]])</strong></li>
</ul>
<blockquote>
<p>注意：在使用别名方法时， <code v-pre>url</code>、<code v-pre>method</code>、<code v-pre>data</code> 这些属性都不必在配置中指定。</p>
</blockquote>
<h2 id="axios-实例-用于axios二次封装" tabindex="-1"><a class="header-anchor" href="#axios-实例-用于axios二次封装" aria-hidden="true">#</a> Axios 实例（用于Axios二次封装）</h2>
<p>您可以使用自定义配置新建一个实例。</p>
<h5 id="axios-create-config" tabindex="-1"><a class="header-anchor" href="#axios-create-config" aria-hidden="true">#</a> axios.create([config])</h5>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  baseURL<span class="token operator">:</span> <span class="token string">'https://some-domain.com/api/'</span><span class="token punctuation">,</span>
  timeout<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  headers<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">'X-Custom-Header'</span><span class="token operator">:</span> <span class="token string">'foobar'</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios请求配置" tabindex="-1"><a class="header-anchor" href="#axios请求配置" aria-hidden="true">#</a> Axios请求配置</h2>
<p>这些是创建请求时可以用的配置选项。只有 <code v-pre>url</code> 是必需的。如果没有指定 <code v-pre>method</code>，请求将默认使用 <code v-pre>GET</code> 方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// `url` 是用于请求的服务器 URL</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/user'</span><span class="token punctuation">,</span>

  <span class="token comment">// `method` 是创建请求时使用的方法</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'get'</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。</span>
  <span class="token comment">// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'https://some-domain.com/api/'</span><span class="token punctuation">,</span>

  <span class="token comment">// `transformRequest` 允许在向服务器发送前，修改请求数据</span>
  <span class="token comment">// 它只能用于 'PUT', 'POST' 和 'PATCH' 这几个请求方法</span>
  <span class="token comment">// 数组中最后一个函数必须返回一个字符串， 一个Buffer实例，ArrayBuffer，FormData，或 Stream</span>
  <span class="token comment">// 你可以修改请求头。</span>
  <span class="token literal-property property">transformRequest</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> headers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对发送的 data 进行任意转换处理</span>
    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// `transformResponse` 在传递给 then/catch 前，允许修改响应数据</span>
  <span class="token literal-property property">transformResponse</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对接收的 data 进行任意转换处理</span>
    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// 自定义请求头</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">'X-Requested-With'</span><span class="token operator">:</span> <span class="token string">'XMLHttpRequest'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      
  <span class="token comment">// `params` 是与请求一起发送的 URL 参数</span>
  <span class="token comment">// 必须是一个简单对象或 URLSearchParams 对象</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">ID</span><span class="token operator">:</span> <span class="token number">12345</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `paramsSerializer`是可选方法，主要用于序列化`params`</span>
  <span class="token comment">// (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)</span>
  <span class="token function-variable function">paramsSerializer</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">arrayFormat</span><span class="token operator">:</span> <span class="token string">'brackets'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `data` 是作为请求体被发送的数据</span>
  <span class="token comment">// 仅适用 'PUT', 'POST', 'DELETE 和 'PATCH' 请求方法</span>
  <span class="token comment">// 在没有设置 `transformRequest` 时，则必须是以下类型之一:</span>
  <span class="token comment">// - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams</span>
  <span class="token comment">// - 浏览器专属: FormData, File, Blob</span>
  <span class="token comment">// - Node 专属: Stream, Buffer</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">'Fred'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 发送请求体数据的可选语法</span>
  <span class="token comment">// 请求方式 post</span>
  <span class="token comment">// 只有 value 会被发送，key 则不会</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">'Country=Brasil&amp;City=Belo Horizonte'</span><span class="token punctuation">,</span>

  <span class="token comment">// `timeout` 指定请求超时的毫秒数。</span>
  <span class="token comment">// 如果请求时间超过 `timeout` 的值，则请求会被中断</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 默认值是 `0` (永不超时)</span>

  <span class="token comment">// `withCredentials` 表示跨域请求时是否需要使用凭证</span>
  <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// default</span>

  <span class="token comment">// `adapter` 允许自定义处理请求，这使测试更加容易。</span>
  <span class="token comment">// 返回一个 promise 并提供一个有效的响应 （参见 lib/adapters/README.md）。</span>
  <span class="token function-variable function">adapter</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `auth` HTTP Basic Auth</span>
  <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'janedoe'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">'s00pers3cret'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `responseType` 表示浏览器将要响应的数据类型</span>
  <span class="token comment">// 选项包括: 'arraybuffer', 'document', 'json', 'text', 'stream'</span>
  <span class="token comment">// 浏览器专属：'blob'</span>
  <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">'json'</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// `responseEncoding` 表示用于解码响应的编码 (Node.js 专属)</span>
  <span class="token comment">// 注意：忽略 `responseType` 的值为 'stream'，或者是客户端请求</span>
  <span class="token comment">// Note: Ignored for `responseType` of 'stream' or client-side requests</span>
  <span class="token literal-property property">responseEncoding</span><span class="token operator">:</span> <span class="token string">'utf8'</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// `xsrfCookieName` 是 xsrf token 的值，被用作 cookie 的名称</span>
  <span class="token literal-property property">xsrfCookieName</span><span class="token operator">:</span> <span class="token string">'XSRF-TOKEN'</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// `xsrfHeaderName` 是带有 xsrf token 值的http 请求头名称</span>
  <span class="token literal-property property">xsrfHeaderName</span><span class="token operator">:</span> <span class="token string">'X-XSRF-TOKEN'</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// `onUploadProgress` 允许为上传处理进度事件</span>
  <span class="token comment">// 浏览器专属</span>
  <span class="token function-variable function">onUploadProgress</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">progressEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理原生进度事件</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `onDownloadProgress` 允许为下载处理进度事件</span>
  <span class="token comment">// 浏览器专属</span>
  <span class="token function-variable function">onDownloadProgress</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">progressEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理原生进度事件</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `maxContentLength` 定义了node.js中允许的HTTP响应内容的最大字节数</span>
  <span class="token literal-property property">maxContentLength</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>

  <span class="token comment">// `maxBodyLength`（仅Node）定义允许的http请求内容的最大字节数</span>
  <span class="token literal-property property">maxBodyLength</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>

  <span class="token comment">// `validateStatus` 定义了对于给定的 HTTP状态码是 resolve 还是 reject promise。</span>
  <span class="token comment">// 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，</span>
  <span class="token comment">// 则promise 将会 resolved，否则是 rejected。</span>
  <span class="token function-variable function">validateStatus</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">;</span> <span class="token comment">// 默认值</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `maxRedirects` 定义了在node.js中要遵循的最大重定向数。</span>
  <span class="token comment">// 如果设置为0，则不会进行重定向</span>
  <span class="token literal-property property">maxRedirects</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// `socketPath` 定义了在node.js中使用的UNIX套接字。</span>
  <span class="token comment">// e.g. '/var/run/docker.sock' 发送请求到 docker 守护进程。</span>
  <span class="token comment">// 只能指定 `socketPath` 或 `proxy` 。</span>
  <span class="token comment">// 若都指定，这使用 `socketPath` 。</span>
  <span class="token literal-property property">socketPath</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// default</span>

  <span class="token comment">// `httpAgent` and `httpsAgent` define a custom agent to be used when performing http</span>
  <span class="token comment">// and https requests, respectively, in node.js. This allows options to be added like</span>
  <span class="token comment">// `keepAlive` that are not enabled by default.</span>
  <span class="token literal-property property">httpAgent</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">http<span class="token punctuation">.</span>Agent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">httpsAgent</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">https<span class="token punctuation">.</span>Agent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// `proxy` 定义了代理服务器的主机名，端口和协议。</span>
  <span class="token comment">// 您可以使用常规的`http_proxy` 和 `https_proxy` 环境变量。</span>
  <span class="token comment">// 使用 `false` 可以禁用代理功能，同时环境变量也会被忽略。</span>
  <span class="token comment">// `auth`表示应使用HTTP Basic auth连接到代理，并且提供凭据。</span>
  <span class="token comment">// 这将设置一个 `Proxy-Authorization` 请求头，它会覆盖 `headers` 中已存在的自定义 `Proxy-Authorization` 请求头。</span>
  <span class="token comment">// 如果代理服务器使用 HTTPS，则必须设置 protocol 为`https`</span>
  <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">protocol</span><span class="token operator">:</span> <span class="token string">'https'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">'127.0.0.1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'mikeymike'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">'rapunz3l'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// see https://axios-http.com/zh/docs/cancellation</span>
  <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">CancelToken</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">cancel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// `decompress` 表示响应体是否需要自动解压缩。如果设置为`true`，还将从所有解压缩的响应的响应对象中删除‘Content-Coding’标头--仅限于节点(XHR无法关闭解压缩)</span>
  <span class="token literal-property property">decompress</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 默认值</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应配置" tabindex="-1"><a class="header-anchor" href="#响应配置" aria-hidden="true">#</a> 响应配置</h2>
<p>一个请求的响应包含以下信息。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// `data` 由服务器提供的响应</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `status` 来自服务器响应的 HTTP 状态码</span>
  <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>

  <span class="token comment">// `statusText` 来自服务器响应的 HTTP 状态信息</span>
  <span class="token literal-property property">statusText</span><span class="token operator">:</span> <span class="token string">'OK'</span><span class="token punctuation">,</span>

  <span class="token comment">// `headers` 是服务器响应头</span>
  <span class="token comment">// 所有的 header 名称都是小写，而且可以使用方括号语法访问</span>
  <span class="token comment">// 例如: `response.headers['content-type']`</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `config` 是 `axios` 请求的配置信息</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `request` 是生成此响应的请求</span>
  <span class="token comment">// 在node.js中它是最后一个ClientRequest实例 (in redirects)，</span>
  <span class="token comment">// 在浏览器中则是 XMLHttpRequest 实例</span>
  <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当使用 <code v-pre>then</code> 时，您将接收如下响应:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/12345'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当使用 <code v-pre>catch</code>，或者传递一个<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then" target="_blank" rel="noopener noreferrer">rejection callback<ExternalLinkIcon/></a>作为 <code v-pre>then</code> 的第二个参数时，响应可以通过 <code v-pre>error</code> 对象被使用，正如在<a href="https://www.axios-http.cn/docs/handling_errors" target="_blank" rel="noopener noreferrer">错误处理<ExternalLinkIcon/></a>部分解释的那样。</p>
<h2 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器" aria-hidden="true">#</a> 拦截器</h2>
<p>在请求或响应被 then 或 catch 处理前拦截它们。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 添加请求拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span> <span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 在发送请求之前做些什么</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对请求错误做些什么</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加响应拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span> <span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 2xx 范围内的状态码都会触发该函数。</span>
    <span class="token comment">// 对响应数据做点什么</span>
    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 超出 2xx 范围的状态码都会触发该函数。</span>
    <span class="token comment">// 对响应错误做点什么</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你稍后需要移除拦截器，可以这样：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> myInterceptor <span class="token operator">=</span> axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">eject</span><span class="token punctuation">(</span>myInterceptor<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//消除myInterceptor拦截器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以给自定义的 axios 实例添加拦截器。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="取消请求" tabindex="-1"><a class="header-anchor" href="#取消请求" aria-hidden="true">#</a> 取消请求</h2>
<h3 id="abortcontroller" tabindex="-1"><a class="header-anchor" href="#abortcontroller" aria-hidden="true">#</a> AbortController</h3>
<p>从 <code v-pre>v0.22.0</code> 开始，Axios 支持以 fetch API 方式—— <a href="https://developer.mozilla.org/en-US/docs/Web/API/AbortController" target="_blank" rel="noopener noreferrer"><code v-pre>AbortController</code><ExternalLinkIcon/></a> 取消请求：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//实例化一个取消请求控制器</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/foo/bar'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">signal</span><span class="token operator">:</span> controller<span class="token punctuation">.</span>signal
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 取消请求</span>
controller<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


