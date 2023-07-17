<template><div><h1 id="个人博客网站的搭建" tabindex="-1"><a class="header-anchor" href="#个人博客网站的搭建" aria-hidden="true">#</a> 个人博客网站的搭建</h1>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>::: info 博客开发流程
1.初始化vuepress项目
2.选择喜欢的博客主题
3.下载模板主题
4.配置修改成自己想要的风格
5.迁移博客
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="为什么选择vuepress" tabindex="-1"><a class="header-anchor" href="#为什么选择vuepress" aria-hidden="true">#</a> 为什么选择vuepress</h2>
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
<Tabs id="41" :data='[{"title":"npm","id":"npm"},{"title":"yarn","id":"yarn"}]'>
<template #tab0="{ title, value, isActive }">
<p>npm init</p>
</template>
<template #tab1="{ title, value, isActive }">
<p>yarn init</p>
</template>
</Tabs>
<p>3.将 VuePress 安装为本地依赖</p>
</div></template>


