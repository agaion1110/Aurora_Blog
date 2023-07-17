<template><div><h1 id="计算机网络体系结构" tabindex="-1"><a class="header-anchor" href="#计算机网络体系结构" aria-hidden="true">#</a> 计算机网络体系结构</h1>
<h3 id="分层" tabindex="-1"><a class="header-anchor" href="#分层" aria-hidden="true">#</a> 分层</h3>
<ol>
<li><strong>实体</strong>：第n层的活动元素称为n层实体。同一层的实体叫对等实体。</li>
<li><strong>协议</strong>：为进行网络中的对等实体数据交换而建立的规则、标准或约定称为网络协议。【水平方向看】
<ol>
<li>语法：规定传输数据的格式</li>
<li>语义：规定要完成的功能</li>
<li>同步：规定各种操作的顺序</li>
</ol>
</li>
<li><strong>接口</strong>（访问服务点SAP）：上层使用下层服务的入口。</li>
<li><strong>服务</strong>：下层为相邻的上层提供的功能调用。【垂直】</li>
</ol>
<!-- more -->
<p><strong>SDU服务数据单元</strong>：为完成用户所要求的功能而应传送的数据。</p>
<p><strong>PCI协议控制信息</strong>：控制协议操作的信息。</p>
<p><strong>PDU协议控制数据单元</strong>：对等层次之传送的数据单位。</p>
<h3 id="网络分层结构" tabindex="-1"><a class="header-anchor" href="#网络分层结构" aria-hidden="true">#</a> 网络分层结构</h3>
<p>7层OSI参考模型（法定标准）、4层TCP/IP参考模型（事实标准）</p>
<h4 id="osi参考模型" tabindex="-1"><a class="header-anchor" href="#osi参考模型" aria-hidden="true">#</a> OSI参考模型</h4>
<p>物理层¹、数据链路层²、网络层³、传输层⁴、会话层⁵、表示层⁶、应用层⁷</p>
<p><code v-pre>前三层（通信子网：数据通信）、后三层（资源子网：数据处理）</code></p>
<h5 id="osi参考模型解释通信过程" tabindex="-1"><a class="header-anchor" href="#osi参考模型解释通信过程" aria-hidden="true">#</a> OSI参考模型解释通信过程</h5>
<figure><img src="@source/文章/分类/Internet/计网体系结构/assets/1.png" alt="1" tabindex="0" loading="lazy"><figcaption>1</figcaption></figure>
<figure><img src="@source/文章/分类/Internet/计网体系结构/assets/2.png" alt="2" tabindex="0" loading="lazy"><figcaption>2</figcaption></figure>
<h5 id="应用层" tabindex="-1"><a class="header-anchor" href="#应用层" aria-hidden="true">#</a> 应用层</h5>
<p>定义：所有能和用户交互产生网络流量的程序</p>
<p>典型应用层服务：文件传输（FTP）、电子邮件（SMTP）、万维网（HTTP）</p>
<h5 id="表示层" tabindex="-1"><a class="header-anchor" href="#表示层" aria-hidden="true">#</a> 表示层</h5>
<p>定义：用于处理两个通信系统中交换信息的表示方式（语法和语义）</p>
<p>功能：数据格式交换、数据加密解密、数据压缩和恢复</p>
<h5 id="会话层" tabindex="-1"><a class="header-anchor" href="#会话层" aria-hidden="true">#</a> 会话层</h5>
<p>定义：向表示层实体/用户进程提供<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="red"><mtext>建立连接</mtext></mstyle></mrow><annotation encoding="application/x-tex">\textcolor{red}{建立连接}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord cjk_fallback" style="color:red;">建立连接</span></span></span></span>在连接上<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="red"><mtext>有序</mtext></mstyle></mrow><annotation encoding="application/x-tex">\textcolor{red}{有序}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord cjk_fallback" style="color:red;">有序</span></span></span></span>地传输数据。这是会话，也是建立同步（SYN）</p>
<p>功能：</p>
<ol>
<li>建立、管理、终止会话。</li>
<li>使用校验点可使会话在通信失效时从<mark>校验点/同步点</mark>继续恢<strong>复通信，实现数据同步</strong>。适用于传输大文件</li>
</ol>
<h5 id="传输层" tabindex="-1"><a class="header-anchor" href="#传输层" aria-hidden="true">#</a> 传输层</h5>
<p>定义：负责主机两个进程的通信，即端到端通信。传输单位时报文段或用户数据报。</p>
<p>主要协议：TCP、UDP</p>
<p>功能：（<mark>可差</mark>的也能<mark>留用</mark>？）</p>
<ol>
<li><strong>可</strong>靠传输、不可靠传输</li>
<li><strong>差</strong>错控制</li>
<li><strong>流</strong>量控制</li>
<li>复<strong>用</strong>分用</li>
</ol>
<h5 id="网络层" tabindex="-1"><a class="header-anchor" href="#网络层" aria-hidden="true">#</a> 网络层</h5>
<p>主要任务是把<mark>分组</mark>从源端传到目的端，为分组交换网上的不同主机提供通信服务。网络层传输单位是<mark>数据报</mark>。</p>
<p>主要协议：SP、IPX、ICMP、IGMP、ARP</p>
<p>功能：</p>
<ol>
<li>路由选择 <mark><em>最佳路径</em></mark></li>
<li>流量控制</li>
<li>差错控制</li>
<li>拥塞控制</li>
</ol>
<h5 id="数据链路层" tabindex="-1"><a class="header-anchor" href="#数据链路层" aria-hidden="true">#</a> 数据链路层</h5>
<p>主要任务是把网络层传下来的数据报<mark>组装成帧</mark>。数据链路层/链路层的传输单位是<mark>帧</mark>。</p>
<p>主要协议：SDLC、HDLC、PPP、STP</p>
<p>功能：</p>
<ol>
<li>成帧（定义帧的开始和结束）</li>
<li>差错控制 <mark>帧率+错位</mark></li>
<li>流量控制</li>
<li>访问（接入）控制 <mark>控制对信道的访问</mark></li>
</ol>
<h5 id="物理层" tabindex="-1"><a class="header-anchor" href="#物理层" aria-hidden="true">#</a> 物理层</h5>
<p>主要人物是在屋里媒体上实现比特流的透明传输。</p>
<p>物理层传输单位是比特。</p>
<p>透明传输：指不管传输数据是什么样的比特组合，都应当能够在链路上传达。</p>
<p>主要协议：	Rj45、802.3</p>
<p>功能：</p>
<ul>
<li>定义接口特性</li>
<li>定义传输模式 <mark>单工、半双工、双工</mark></li>
<li>定义传输速率</li>
<li>比特同步</li>
<li>比特编码</li>
</ul>
<h4 id="tcp-ip参考模型" tabindex="-1"><a class="header-anchor" href="#tcp-ip参考模型" aria-hidden="true">#</a> TCP/IP参考模型</h4>
<h5 id="_5层参考模型的数据封装与解封装" tabindex="-1"><a class="header-anchor" href="#_5层参考模型的数据封装与解封装" aria-hidden="true">#</a> 5层参考模型的数据封装与解封装</h5>
<figure><img src="@source/文章/分类/Internet/计网体系结构/assets/3.png" alt="3" tabindex="0" loading="lazy"><figcaption>3</figcaption></figure>
<figure><img src="@source/文章/分类/Internet/计网体系结构/assets/4.png" alt="4" tabindex="0" loading="lazy"><figcaption>4</figcaption></figure>
</div></template>


