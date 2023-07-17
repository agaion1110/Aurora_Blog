import{_ as s,W as a,X as n,$ as i,Y as e,Z as l,a1 as t}from"./framework-474f8844.js";const d="/assets/image-20230714214608803-388cf6de.png",c="/assets/image-20230714214824499-e006c729.png",r="/assets/image-20230714214952546-f1f43a32.png",o="/assets/image-20230714220343377-4043312a.png",p={},m=e("h1",{id:"项目部署上线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#项目部署上线","aria-hidden":"true"},"#"),l(" 项目部署上线")],-1),u=t('<h2 id="买一个服务器" tabindex="-1"><a class="header-anchor" href="#买一个服务器" aria-hidden="true">#</a> 买一个服务器</h2><p>1.选择一个优惠的平台购买弹性云服务器ESC</p><p>2.云服务器ESC</p><ul><li>地域选择：不同地域的实例之间内网互不相通；选择靠近的地域，可降低网络时延、提高访问速度</li><li>套餐：选择合适的就行，简单项目买最基础的就可以</li><li>镜像：这里我选择CentOS 7（linux服务器适合，不会浪费太多空间）</li><li>管理设置：选择自定义密码并记住密码</li></ul><h2 id="利用xshell和xftp连接服务器" tabindex="-1"><a class="header-anchor" href="#利用xshell和xftp连接服务器" aria-hidden="true">#</a> 利用Xshell和Xftp连接服务器</h2><p>1.在Xshell中新建连接：</p><blockquote><ul><li>定义连接名称</li><li>输入服务器公网IP，端口号默认22，</li><li>点击用户身份认证，输入用户名（默认root）和登录密码点击确认</li><li>点击连接，接收并保存ssh密钥即可连接云服务器成功</li></ul></blockquote><p><img src="'+d+'" alt="image-20230714214608803" style="zoom:50%;"><img src="'+c+'" alt="image-20230714214824499" style="zoom:50%;"></p><img src="'+r+`" alt="image-20230714214952546" style="zoom:67%;"><p>2.安装nginx</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> epel-release
yum update
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> nginx
<span class="token comment"># 开启nginx服务</span>
systemctl start nginx 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.打包博客项目代码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run docs:build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.在usr文件目录下创建一个项目的文件，如app。将dist文件利用Xftp传输到服务器上的该文件中。</p><figure><img src="`+o+`" alt="image-20230714220343377" tabindex="0" loading="lazy"><figcaption>image-20230714220343377</figcaption></figure><p>5.编写nginx配置文件my.conf文件（my可变）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先转移到conf.d目录下</span>
<span class="token builtin class-name">cd</span> /etc/nginx/conf.d/
<span class="token comment"># 创建并打开my.conf配置文件</span>
<span class="token function">vim</span> my.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写配置代码</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
	listen		80;
<span class="token comment">	#由域名放域名，没有就填locahost</span>
	server_name	locahost; 
<span class="token key attr-name">	location</span> <span class="token value attr-value">/ {</span>
<span class="token comment">		#配置项目地址</span>
<span class="token key attr-name">		root</span> <span class="token value attr-value">/usr/app/dist; </span>
<span class="token comment">		#配置主页位置</span>
<span class="token key attr-name">		index</span> <span class="token value attr-value">index.html; </span>
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.使配置生效</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至此，项目上线，可通过正常ip或者域名访问网站。</p>`,22);function v(b,g){return a(),n("div",null,[m,i(" more "),u])}const f=s(p,[["render",v],["__file","部署上线.html.vue"]]);export{f as default};
