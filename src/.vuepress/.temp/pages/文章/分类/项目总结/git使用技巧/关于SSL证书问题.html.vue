<template><div><h1 id="ssl-certificate-problem-unable-to-get-local-issuer-certificate-的一种解决方案" tabindex="-1"><a class="header-anchor" href="#ssl-certificate-problem-unable-to-get-local-issuer-certificate-的一种解决方案" aria-hidden="true">#</a> SSL certificate problem: unable to get local issuer certificate 的一种解决方案</h1>
<p>今天遇到这样一个问题，因为平时项目托管到gitee上，所以当今天突然要使用github时，问题就来了，当我们创建完新仓库后，本地项目将要上传到远端仓库。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"first commit"</span>
<span class="token function">git</span> branch <span class="token parameter variable">-M</span> main
<span class="token function">git</span> remote <span class="token function">add</span> origin 仓库url地址
<span class="token function">git</span> push origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就报错了：</p>
<p><code v-pre>fatal: unable to access 'https://github.com/friklogff/Student-registration-management-system.git/': SSL certificate problem: unable to get local issuer certificate</code>
这里显示我们的SSL证书出现了问题。</p>
<p>这里我们确认一下自己ssh公钥是否有问题，如果实在有问题请参考我的另一篇文章，如何给github和gitee同时添加公钥并同时管理</p>
<p>如果没有问题，我们可以使用一下几种方式继续：</p>
<ol>
<li>检查本地电脑的系统时间是否正确。如果系统时间偏差太大,会导致 SSL <a href="https://so.csdn.net/so/search?q=%E8%AF%81%E4%B9%A6&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">证书<ExternalLinkIcon/></a>无法验证。</li>
<li>尝试更新 Git 的 SSL 证书,运行命令:</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> <span class="token function">git</span> config <span class="token parameter variable">--global</span> http.sslVerify <span class="token string">"false"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>在控制面板增加 GitHub 的 SSL 证书为受信证书。</li>
<li>使用 SSH 链接而不是 HTTPS 链接来推送。(这种方法很快，推荐🤙)</li>
<li>检查防火墙、代理或网络设置是否在阻塞对 GitHub 的访问。</li>
<li>尝试在其他网络环境推送。</li>
</ol>
</div></template>


