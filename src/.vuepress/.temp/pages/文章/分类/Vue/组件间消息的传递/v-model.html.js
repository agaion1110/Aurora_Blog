export const data = JSON.parse("{\"key\":\"v-0f383d9e\",\"path\":\"/%E6%96%87%E7%AB%A0/%E5%88%86%E7%B1%BB/Vue/%E7%BB%84%E4%BB%B6%E9%97%B4%E6%B6%88%E6%81%AF%E7%9A%84%E4%BC%A0%E9%80%92/v-model.html\",\"title\":\"组件v-mdodel传数据\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2023-07-27T00:00:00.000Z\",\"category\":[\"vue\"],\"tag\":[\"笔记\",\"面试题\"],\"star\":false,\"sticky\":false,\"copy.disableCopy\":true,\"description\":\"组件v-mdodel传数据 v-model在原生元素上的用法 v-model 可以在组件上使用以实现双向数据绑定。 首先让我们回忆一下 v-model 在原生元素上的用法： &lt;input v-model=\\\"searchText\\\" /&gt; 它会被vue框架展开为下面的形式： &lt;input :value=\\\"searchText\\\" @input=\\\"searchText = $event.target.value\\\" /&gt;\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://wei-z.top/%E6%96%87%E7%AB%A0/%E5%88%86%E7%B1%BB/Vue/%E7%BB%84%E4%BB%B6%E9%97%B4%E6%B6%88%E6%81%AF%E7%9A%84%E4%BC%A0%E9%80%92/v-model.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Aurora's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"组件v-mdodel传数据\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"组件v-mdodel传数据 v-model在原生元素上的用法 v-model 可以在组件上使用以实现双向数据绑定。 首先让我们回忆一下 v-model 在原生元素上的用法： &lt;input v-model=\\\"searchText\\\" /&gt; 它会被vue框架展开为下面的形式： &lt;input :value=\\\"searchText\\\" @input=\\\"searchText = $event.target.value\\\" /&gt;\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-07-27T06:46:56.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Aurora\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"笔记\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"面试题\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-07-27T00:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-07-27T06:46:56.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"组件v-mdodel传数据\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-07-27T00:00:00.000Z\\\",\\\"dateModified\\\":\\\"2023-07-27T06:46:56.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Aurora\\\",\\\"url\\\":\\\"https://gitee.com/agaion1110\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"v-model在原生元素上的用法\",\"slug\":\"v-model在原生元素上的用法\",\"link\":\"#v-model在原生元素上的用法\",\"children\":[]},{\"level\":2,\"title\":\"v-model在组件上的运用（父子组件间数据传递）\",\"slug\":\"v-model在组件上的运用-父子组件间数据传递\",\"link\":\"#v-model在组件上的运用-父子组件间数据传递\",\"children\":[{\"level\":3,\"title\":\"父组件中绑定v-model：\",\"slug\":\"父组件中绑定v-model\",\"link\":\"#父组件中绑定v-model\",\"children\":[]},{\"level\":3,\"title\":\"子组件接收父组件传递的props和自定义事件\",\"slug\":\"子组件接收父组件传递的props和自定义事件\",\"link\":\"#子组件接收父组件传递的props和自定义事件\",\"children\":[]}]},{\"level\":2,\"title\":\"v-model 的参数\",\"slug\":\"v-model-的参数\",\"link\":\"#v-model-的参数\",\"children\":[]}],\"git\":{\"createdTime\":1690440416000,\"updatedTime\":1690440416000,\"contributors\":[{\"name\":\"Aurora\",\"email\":\"1852831787@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":1.8,\"words\":540},\"filePathRelative\":\"文章/分类/Vue/组件间消息的传递/v-model.md\",\"localizedDate\":\"2023年7月27日\",\"excerpt\":\"<h1> 组件v-mdodel传数据</h1>\\n<h2> v-model在原生元素上的用法</h2>\\n<p><code>v-model</code> 可以在组件上使用以实现双向数据绑定。</p>\\n<p>首先让我们回忆一下 <code>v-model</code> 在原生元素上的用法：</p>\\n<div class=\\\"language-vue line-numbers-mode\\\" data-ext=\\\"vue\\\"><pre class=\\\"language-vue\\\"><code><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>input</span> <span class=\\\"token attr-name\\\">v-model</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>searchText<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token punctuation\\\">/&gt;</span></span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div></div></div><p>它会被vue框架展开为下面的形式：</p>\\n<div class=\\\"language-vue line-numbers-mode\\\" data-ext=\\\"vue\\\"><pre class=\\\"language-vue\\\"><code><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>input</span>\\n  <span class=\\\"token attr-name\\\">:value</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>searchText<span class=\\\"token punctuation\\\">\\\"</span></span>\\n  <span class=\\\"token attr-name\\\">@input</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>searchText = $event.target.value<span class=\\\"token punctuation\\\">\\\"</span></span>\\n<span class=\\\"token punctuation\\\">/&gt;</span></span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
