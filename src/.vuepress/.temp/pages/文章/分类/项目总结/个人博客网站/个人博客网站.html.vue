<template><div><h1 id="个人博客网站的搭建" tabindex="-1"><a class="header-anchor" href="#个人博客网站的搭建" aria-hidden="true">#</a> 个人博客网站的搭建</h1>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>::: info 博客开发流程
1.初始化vuepress项目
2.选择喜欢的博客主题
3.下载模板主题
4.配置修改成自己想要的风格
5.迁移博客
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- more -->
<h2 id="为什么选择vuepress" tabindex="-1"><a class="header-anchor" href="#为什么选择vuepress" aria-hidden="true">#</a> 为什么选择vuepress</h2>
<blockquote>
<ol>
<li>
<p>vuepress 是 Vuejs 官方提供的一个是Vue驱动的静态网站生成器，适合国内开发人员开发个人静态博客网站，操作简单易上手。</p>
<p>有众多开发人员开发出的博客主题模板供大家选择修改、开发出自己的博客网站。</p>
</li>
<li>
<p>vuepress 是 Vuejs 官方提供的一个是Vue驱动的静态网站生成器，基于Markdown语法生成网页。简单的说它就是一个快速建设文档站点的工具，在简单配置好功能后，需要做的事情就剩下写好一个个 Markdown 文档，</p>
</li>
<li>
<p>一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。</p>
</li>
</ol>
</blockquote>
<h2 id="初始化vuepress项目" tabindex="-1"><a class="header-anchor" href="#初始化vuepress项目" aria-hidden="true">#</a> 初始化vuepress项目</h2>
<p>前提条件：VuePress 需要 <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js (opens new window)<ExternalLinkIcon/></a>&gt;= 8.6</p>
<p>1.新建一个文件作为项目根目录</p>
<p>2.终端打开该项目，对包管理器初始化</p>
<Tabs id="42" :data='[{"title":"npm","id":"npm"},{"title":"yarn","id":"yarn"}]' tab-id="environment">
<template #tab0="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</Tabs>
<p>3.将 VuePress 安装为本地依赖</p>
<Tabs id="53" :data='[{"title":"npm","id":"npm"},{"title":"yarn","id":"yarn"}]' tab-id="environment">
<template #tab0="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</Tabs>
<p>4.在 <code v-pre>package.json</code> 中添加一些 script,这一步骤是可选的，但我们推荐你完成它。在下文中，我们会默认这些 scripts 已经被添加。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"docs:dev"</span><span class="token operator">:</span> <span class="token string">"vuepress dev docs"</span><span class="token punctuation">,</span>
    <span class="token property">"docs:build"</span><span class="token operator">:</span> <span class="token string">"vuepress build docs"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.在本地启动服务器</p>
<Tabs id="68" :data='[{"title":"npm","id":"npm"},{"title":"yarn","id":"yarn"}]' tab-id="environment">
<template #tab0="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="下载自己喜欢的博客模板主题" tabindex="-1"><a class="header-anchor" href="#下载自己喜欢的博客模板主题" aria-hidden="true">#</a> 下载自己喜欢的博客模板主题</h2>
<p>模板网址：<a href="https://www.npmjs.com/search?q=keywords:vuepress-theme" target="_blank" rel="noopener noreferrer">keywords:vuepress-theme - npm search (npmjs.com)<ExternalLinkIcon/></a></p>
<p>下面以<code v-pre>vuepress-theme-hope</code>为例</p>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<p>要将 vuepress-theme-hope 作为文档构建器添加到现有项目中，请在项目根目录中运行以下命令:</p>
<Tabs id="91" :data='[{"title":"npm","id":"npm"},{"title":"yarn","id":"yarn"}]' tab-id="environment">
<template #tab0="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init vuepress-theme-hope <span class="token function">add</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> create vuepress-theme-hope <span class="token function">add</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</Tabs>
<p>在 <code v-pre>[dir]</code> 文件夹内新建 vuepress-theme-hope 项目:</p>
<Tabs id="102" :data='[{"title":"npm","id":"npm"},{"title":"yarn","id":"yarn"}]' tab-id="environment">
<template #tab0="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init vuepress-theme-hope <span class="token punctuation">[</span>dir<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> create vuepress-theme-hope <span class="token punctuation">[</span>dir<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</Tabs>
<p>！这里的 <code v-pre>[dir]</code> 是一个参数，你需要使用真实的文件夹名称替换它，例如 <code v-pre>docs</code>、<code v-pre>blog</code> 或其他你喜欢的名称。</p>
<h2 id="配置网站" tabindex="-1"><a class="header-anchor" href="#配置网站" aria-hidden="true">#</a> 配置网站</h2>
<h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3>
<p>为了更好地自定义你的网站，所有 VuePress 相关的文件都将会被放在<code v-pre>.vuepress</code> 目录下。你的项目结构可能是这样：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.站点配置 | 应用级别的配置（defineUserConfig）：</p>
<p>对所有的主题都生效</p>
<p>一个 VuePress 网站必要的配置文件是 <code v-pre>.vuepress/config.js</code>，它应该导出一个 JavaScript 或者Typescript对象：</p>
<Tabs id="132" :data='[{"title":"ts","id":"ts"},{"title":"js","id":"js"}]' tab-id="language">
<template #tab0="{ title, value, isActive }">
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress-theme-hope"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 此处放置主题配置</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress-theme-hope"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 此处放置主题配置</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<p>2.主题配置：</p>
<p>仅对该主题生效，更换主题将不再生效。一个 VuePress 主题应该负责整个网站的布局和交互细节。在 VuePress 中，目前自带了一个默认的主题（正是你现在所看到的），它是为技术文档而设计的。同时，默认主题提供了一些选项，让你可以去自定义导航栏（navbar）、 侧边栏（sidebar）和 首页（homepage） 等，详情请参见 <a href="https://vuepress.vuejs.org/zh/theme/default-theme-config.html" target="_blank" rel="noopener noreferrer">默认主题<ExternalLinkIcon/></a> 。</p>
<Tabs id="146" :data='[{"title":"ts","id":"ts"},{"title":"js","id":"js"}]' tab-id="language">
<template #tab0="{ title, value, isActive }">
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress-theme-hope"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> zhNavbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./navbar/index.js"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> zhSidebar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./sidebar/index.js"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  hostname<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  blog<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">AuthorName</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span>
      <span class="token doc-comment comment">/**
       * 作者姓名
       */</span>
      name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

      <span class="token doc-comment comment">/**
       * 作者网站
       */</span>
      url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

      <span class="token doc-comment comment">/**
       * 作者 Email
       */</span>
      email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">type</span> <span class="token class-name">Author</span> <span class="token operator">=</span> AuthorName <span class="token operator">|</span> AuthorName<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> AuthorInfo <span class="token operator">|</span> AuthorInfo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress-theme-hope"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> zhNavbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./navbar/index.js"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> zhSidebar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./sidebar/index.js"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token literal-property property">blog</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  type AuthorName <span class="token operator">=</span> string<span class="token punctuation">;</span>
  <span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span>
      <span class="token doc-comment comment">/**
       * 作者姓名
       */</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>

      <span class="token doc-comment comment">/**
       * 作者网站
       */</span>
      url<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>

      <span class="token doc-comment comment">/**
       * 作者 Email
       */</span>
      email<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  type Author <span class="token operator">=</span> AuthorName <span class="token operator">|</span> AuthorName<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> AuthorInfo <span class="token operator">|</span> AuthorInfo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<p>详细请参考： <a href="https://theme-hope.vuejs.press/zh/config/theme/basic.html#hostname" target="_blank" rel="noopener noreferrer">主题基本选项 | vuepress-theme-hope (vuejs.press)<ExternalLinkIcon/></a></p>
<h2 id="迁移博客" tabindex="-1"><a class="header-anchor" href="#迁移博客" aria-hidden="true">#</a> 迁移博客</h2>
<p>首先启用实现了文章信息展示。</p>
<p>页面信息默认全局启用，同时支持页面配置。你可以在特定页面的 front matter 中设置 <code v-pre>pageInfo: false</code> 来局部禁用它。</p>
<p>如果你需要保持全局禁用，请在主题选项中设置 <code v-pre>pageInfo: false</code>。这样你可以在特定页面的 front matter 中设置 <code v-pre>pageInfo</code> 来局部启用它。</p>
<p><code v-pre>pageInfo</code> 默认接受一个字符串数组，可以填入各条目名称，填入的顺序即是各条目显示的顺序。</p>
<p>条目可选的值和对应内容如下:</p>
<table>
<thead>
<tr>
<th>条目</th>
<th>对应内容</th>
<th>页面 frontmatter 值</th>
<th>主题设置的配置项</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>&quot;Author&quot;</code></td>
<td>作者</td>
<td><code v-pre>author</code></td>
<td><code v-pre>author</code></td>
</tr>
<tr>
<td><code v-pre>&quot;Date&quot;</code></td>
<td>写作日期</td>
<td><code v-pre>date</code></td>
<td>N/A</td>
</tr>
<tr>
<td><code v-pre>&quot;Original&quot;</code></td>
<td>是否原创</td>
<td><code v-pre>isOriginal</code></td>
<td>N/A</td>
</tr>
<tr>
<td><code v-pre>&quot;Category&quot;</code></td>
<td>分类</td>
<td><code v-pre>category</code></td>
<td>N/A</td>
</tr>
<tr>
<td><code v-pre>&quot;Tag&quot;</code></td>
<td>标签</td>
<td><code v-pre>tag</code></td>
<td>N/A</td>
</tr>
<tr>
<td><code v-pre>&quot;ReadingTime&quot;</code></td>
<td>预计阅读时间</td>
<td>N/A(自动生成)</td>
<td>N/A</td>
</tr>
<tr>
<td><code v-pre>&quot;Word&quot;</code></td>
<td>字数</td>
<td>N/A(自动生成)</td>
<td>N/A</td>
</tr>
<tr>
<td><code v-pre>&quot;PageView&quot;</code></td>
<td>访问量</td>
<td><code v-pre>pageview</code> (仅 Waline 可用)</td>
<td><code v-pre>plugins.comment.pageview</code></td>
</tr>
</tbody>
</table>
<p>默认会显示 “作者，访问量，写作日期，分类，标签，预计阅读时间”</p>
<p>eg:</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">author</span><span class="token punctuation">:</span> Mr.Hope	 // 作者
<span class="token key atrule">date</span><span class="token punctuation">:</span> 2020<span class="token punctuation">-</span>01<span class="token punctuation">-</span>01 //写作日期
<span class="token key atrule">pageview</span><span class="token punctuation">:</span> false  //浏览量</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分类设置：</p>
<p>只需要在页面 frontmatter 中设置 <code v-pre>category</code> 数组，并设置一个或多个文章所属的分类，该文章会自动渲染在 <code v-pre>/category/&lt;分类名&gt;/</code> 分类页面的列表中。</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">category</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> HTML
  <span class="token punctuation">-</span> Web</span>
<span class="token punctuation">---</span></span>

页面内容...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>标签：</p>
<p>只需要在页面的 frontmatter 中设置 <code v-pre>tag</code>，并设置一个或多个文章所属的标签，该文章会自动渲染在 <code v-pre>/tag/&lt;标签名&gt;/</code> 标签页面的列表中。</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">tag</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> HTML
  <span class="token punctuation">-</span> Web</span>
<span class="token punctuation">---</span></span>

页面内容...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是我对项目的简单总结，大家如果想要开发出自己的网站，还需要根据官方文档系统学习。</p>
<p><a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">主页 | vuepress-theme-hope (vuejs.press)<ExternalLinkIcon/></a></p>
</div></template>


