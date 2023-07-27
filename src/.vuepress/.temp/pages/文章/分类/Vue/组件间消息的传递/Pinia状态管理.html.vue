<template><div><h1 id="pinia—-vue-3的官方状态管理库" tabindex="-1"><a class="header-anchor" href="#pinia—-vue-3的官方状态管理库" aria-hidden="true">#</a> Pinia— Vue 3的官方状态管理库</h1>
<h2 id="状态管理" tabindex="-1"><a class="header-anchor" href="#状态管理" aria-hidden="true">#</a> 状态管理</h2>
<h3 id="什么是状态管理" tabindex="-1"><a class="header-anchor" href="#什么是状态管理" aria-hidden="true">#</a> 什么是状态管理</h3>
<p><strong>状态管理</strong>指的是在应用程序中，对应用程序数据（即状态）进行有效组织、维护和更新的一系列技术和方法。它通常包括确定和记录应用程序所需的所有状态数据，以及管理这些数据的变化和使用。状态管理可以帮助开发人员设计和实现可维护性高、可扩展性好的应用程序，并提高应用程序的性能和用户体验。</p>
<p>Vue的状态管理称为Vue状态管理模式，是一种在Vue的核心框架中提供了一种将<strong>状态与视图分离</strong>的思想，以更好地管理应用程序的状态和数据。理论上来说，每一个 Vue 组件实例都已经在“管理”它自己的响应式状态了。我们以一个简单的计数器组件为例：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- 视图 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>{{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token comment">// 状态</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// 动作</span>
<span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count<span class="token punctuation">.</span>value<span class="token operator">++</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它是一个独立的单元，由以下几个部分组成：</p>
<ul>
<li><strong>状态</strong>：驱动整个应用的数据源；</li>
<li><strong>视图</strong>：对<strong>状态</strong>的一种声明式映射；</li>
<li><strong>交互</strong>：状态根据用户在<strong>视图</strong>中的输入而作出相应变更的可能方式。</li>
</ul>
<p>下面是“单向数据流”这一概念的简单图示：</p>
<figure><img src="https://cn.vuejs.org/assets/state-flow.a8bc738e.png" alt="单向数据流—状态管理机制" tabindex="0" loading="lazy"><figcaption>单向数据流—状态管理机制</figcaption></figure>
<p>然而，当我们有<strong>多个组件共享一个共同的状态</strong>时，就没有这么简单了：</p>
<blockquote>
<ol>
<li>多个视图可能都依赖于同一份状态。</li>
<li>来自不同视图的交互也可能需要更改同一份状态。</li>
</ol>
<p>注：即要实现组件间通信</p>
</blockquote>
<p>对于情景 1，一个可行的办法是将共享状态“提升”到共同的祖先组件上去，再通过 props 传递下来。然而在深层次的组件树结构中这么做的话，很快就会使得代码变得繁琐冗长。</p>
<p>对于情景 2，我们经常发现自己会直接通过模板引用获取父/子实例，或者通过触发的事件尝试改变和同步多个状态的副本。但这些模式的健壮性都不甚理想，很容易就会导致代码难以维护。</p>
<p>**一个更简单直接的解决方案是抽取出组件间的共享状态，放在一个全局单例中来管理。**这样我们的组件树就变成了一个大的“视图”，而任何位置上的组件都可以访问其中的状态或触发动作。</p>
<h3 id="vue状态管理的优点" tabindex="-1"><a class="header-anchor" href="#vue状态管理的优点" aria-hidden="true">#</a> vue状态管理的优点</h3>
<p>Vue状态管理具有以下优点：</p>
<ol>
<li>中心化管理数据，提高了程序的可维护性；</li>
<li>在多个组件之间共享状态，提高了开发效率；</li>
<li>支持强大的工具库，如Vuex、Pinia等，为状态管理提供了更多的扩展选项。</li>
</ol>
<h3 id="vue状态管理使用场景" tabindex="-1"><a class="header-anchor" href="#vue状态管理使用场景" aria-hidden="true">#</a> vue状态管理使用场景</h3>
<p>Vue状态管理是在应用程序变得比较复杂时，进行管理和优化的一种方式。在以下场景的时候，使用Vue状态管理将非常有用：</p>
<ol>
<li>应用程序中有一些共享状态需要维护；</li>
<li>应用程序的复杂度日益提高，代码不好维护；</li>
<li>多个组件中使用相同状态的时候，减少耦合度；</li>
<li>需要对应用程序状态进行持久化存储；</li>
<li>需要管理异步请求的状态时。</li>
</ol>
<h2 id="pinia" tabindex="-1"><a class="header-anchor" href="#pinia" aria-hidden="true">#</a> Pinia</h2>
<p>Pinia 是 Vue 的存储库，它允许跨组件/页面共享状态。</p>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> pinia
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建大仓库并引入安装" tabindex="-1"><a class="header-anchor" href="#创建大仓库并引入安装" aria-hidden="true">#</a> 创建大仓库并引入安装</h3>
<p>创建store文件夹，并在根目录创建<code v-pre>(index.ts/index.js)</code>用于创建大仓库</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//创建大仓库</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span><span class="token punctuation">;</span>
<span class="token comment">//createPinia方法可以用于创建大仓库</span>
<span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//对外暴露,安装仓库</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大仓库创建后需要在入口文件<code v-pre>（main.ts/main.js）</code>引入并安装：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//引入仓库</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'./store'</span>
<span class="token comment">// 创建app</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token comment">//安装大仓库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建小仓库" tabindex="-1"><a class="header-anchor" href="#创建小仓库" aria-hidden="true">#</a> 创建小仓库</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//定义info小仓库</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"pinia"</span><span class="token punctuation">;</span>
<span class="token comment">//第一个仓库:小仓库名字  第二个参数:小仓库配置对象</span>
<span class="token comment">//defineStore方法执行会返回一个函数,函数作用就是让组件可以获取到仓库数据</span>
<span class="token keyword">let</span> useInfoStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">"info"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">//存储数据:state</span>
    <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            count<span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span>
            arr<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    actions<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//注意:函数没有context上下文对象</span>
        <span class="token comment">//没有commit、没有mutations去修改数据</span>
        <span class="token function">updateNum</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+=</span> a<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    getters<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> result<span class="token operator">:</span><span class="token builtin">any</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prev<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> next<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> prev <span class="token operator">+</span> next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> result<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//对外暴露方法</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> useInfoStore<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件上的状态管理" tabindex="-1"><a class="header-anchor" href="#组件上的状态管理" aria-hidden="true">#</a> 组件上的状态管理</h3>
<p>Child1：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>child<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>{{ infoStore.count }}---{{infoStore.total}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateCount<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击我修改仓库数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> useInfoStore <span class="token keyword">from</span> <span class="token string">"../../store/modules/info"</span><span class="token punctuation">;</span>
<span class="token comment">//获取小仓库对象</span>
<span class="token keyword">let</span> infoStore <span class="token operator">=</span> <span class="token function">useInfoStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>infoStore<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//修改数据方法</span>
<span class="token keyword">const</span> <span class="token function-variable function">updateCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">//仓库调用自身的方法去修改仓库的数据</span>
  infoStore<span class="token punctuation">.</span><span class="token function">updateNum</span><span class="token punctuation">(</span><span class="token number">66</span><span class="token punctuation">,</span><span class="token number">77</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Child2:</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>child1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    {{ infoStore.count }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateTodo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ todoStore.arr }}{{todoStore.total}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> useInfoStore <span class="token keyword">from</span> <span class="token string">"../../store/modules/info"</span><span class="token punctuation">;</span>
<span class="token comment">//获取小仓库对象</span>
<span class="token keyword">let</span> infoStore <span class="token operator">=</span> <span class="token function">useInfoStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//引入组合式API函数仓库</span>
<span class="token keyword">import</span> useTodoStore <span class="token keyword">from</span> <span class="token string">"../../store/modules/todo"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> todoStore <span class="token operator">=</span> <span class="token function">useTodoStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//点击p段落去修改仓库的数据</span>
<span class="token keyword">const</span> <span class="token function-variable function">updateTodo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  todoStore<span class="token punctuation">.</span><span class="token function">updateTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


