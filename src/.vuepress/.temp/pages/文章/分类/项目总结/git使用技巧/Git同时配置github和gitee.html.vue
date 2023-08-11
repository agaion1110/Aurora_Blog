<template><div><h1 id="git同时配置github和gitee" tabindex="-1"><a class="header-anchor" href="#git同时配置github和gitee" aria-hidden="true">#</a> Git同时配置github和gitee</h1>
<h2 id="配置git用户名和邮箱" tabindex="-1"><a class="header-anchor" href="#配置git用户名和邮箱" aria-hidden="true">#</a> 配置Git用户名和邮箱</h2>
<p>如果已经设置过可以跳过</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name 用户名
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email 邮箱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生成ssh-keys" tabindex="-1"><a class="header-anchor" href="#生成ssh-keys" aria-hidden="true">#</a> 生成SSH keys</h2>
<p>许多Git托管网站（如<a href="https://so.csdn.net/so/search?q=Gitee&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">Gitee<ExternalLinkIcon/></a>和GitHub）都使用SSH协议进行认证，因此为了向Gitee和GitHub提供SSH公钥，必须事先为其生成一份SSH密钥对。这个过程在所有操作系统上都是相似的：</p>
<ol>
<li>
<p>进入存放密钥对的文件夹，SSH密钥对存放在 <code v-pre>~/.ssh</code> 目录下。在Windows系统下，安装键盘的 <code v-pre>Windows</code> 键和 <code v-pre>R</code> 键输入 <code v-pre>.ssh</code> 回车即可打开</p>
<figure><img src="https://img-blog.csdnimg.cn/87eb23506a604c34bdeac63afb2d5994.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>生成SSH key:</p>
<p>在<code v-pre>~/.ssh</code> 目录下进入Git Bash，输入下列命令然后一直回车即可：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-f</span> id_rsa.gitee <span class="token parameter variable">-C</span> <span class="token string">"gitee"</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-f</span> id_rsa.github <span class="token parameter variable">-C</span> <span class="token string">"github"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参数含义：</p>
<ul>
<li>-t：指定密钥类型，默认是 rsa ，可以省略</li>
<li>rsa：指使用RSA算法</li>
<li>-f：指定存储密钥的文件名</li>
<li>-C：设置注释文字</li>
</ul>
<p>若生成成功，则出现:</p>
<figure><img src="https://img-blog.csdnimg.cn/5837f02632d24c3b83e5808863094dd2.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>同时，在刚才的 <code v-pre>.ssh</code> 文件夹下，将会生成4个新文件：</p>
<figure><img src="https://img-blog.csdnimg.cn/0c81c1dc36734ad2aee44eaef4df8647.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>其中：</p>
<ul>
<li>id_rsa.xx：私钥</li>
<li>id_rsa_xx.xx.pub：私钥对应的公钥</li>
</ul>
</li>
</ol>
<h2 id="添加私钥到ssh-agent中" tabindex="-1"><a class="header-anchor" href="#添加私钥到ssh-agent中" aria-hidden="true">#</a> 添加私钥到ssh-agent中</h2>
<p>Git默认读取的文件文件名为id_rsa，因此我们需要将生成的密钥添加到ssh-agent中。在刚才打开的Git Bash窗口中输入：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ssh-agent <span class="token function">bash</span>
ssh-add ~/.ssh/id_rsa.gitee
ssh-add ~/.ssh/id_rsa.github
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h2>
<p>在 <code v-pre>~/.ssh</code> 目录下打开 <code v-pre>config</code> 文件，若没有则新建一个名为 <code v-pre>config</code> 的文件（<strong>注意，这个文件不带扩展名，全面就叫做config</strong>），然后添加以下内容：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#Gitee</span>
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
User <span class="token function">git</span>
IdentityFile ~/.ssh/id_rsa.gitee

<span class="token comment">#GitHub</span>
Host github.com
HostName github.com
PreferredAuthentications publickey
User <span class="token function">git</span>
IdentityFile ~/.ssh/id_rsa.github
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加公钥到托管网站" tabindex="-1"><a class="header-anchor" href="#添加公钥到托管网站" aria-hidden="true">#</a> 添加公钥到托管网站</h2>
<p>Gitee添加公钥</p>
<p>登录Gitee，进入 <code v-pre>设置</code> ，点击 <code v-pre>SSH公钥</code> ，输入“标题”以及“公钥”。Gitee对应的公钥存放在 <code v-pre>id_rsa.gitee.pub</code> 文件中，打开全部复制即可：</p>
<figure><img src="https://img-blog.csdnimg.cn/4621a15022214460aec4750e5dadfd44.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>GitHub添加公钥</p>
<p>登录GitHub，进入 <code v-pre>Settings</code> ，依次点击 <code v-pre>SSH and GPG keys</code> -&gt; <code v-pre>New SSH key</code> ，输入“Title”以及“Key”。GitHub对应的公钥存放在 <code v-pre>id_rsa.github.pub</code> 文件中，打开全部复制即可：</p>
<figure><img src="https://img-blog.csdnimg.cn/77b983c5aa154075b3b8c41da9446ea6.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="测试是否添加成功" tabindex="-1"><a class="header-anchor" href="#测试是否添加成功" aria-hidden="true">#</a> 测试是否添加成功</h2>
<h2 id="测试是否添加成功-1" tabindex="-1"><a class="header-anchor" href="#测试是否添加成功-1" aria-hidden="true">#</a> 测试是否添加成功</h2>
<p>依次在Git Bash中输入：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@gitee.com <span class="token comment"># 测试Gitee</span>
<span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com <span class="token comment"># 测试GitHub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第一次连接会让输入 <code v-pre>yes/no</code> ，输入 <code v-pre>yes</code> 即可：</p>
<figure><img src="https://img-blog.csdnimg.cn/e4798e672e084452932dfafc3204e9e4.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>出现下面即代表添加成功：</p>
<figure><img src="https://img-blog.csdnimg.cn/1c6324caf29640e5ac786d506e504388.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


