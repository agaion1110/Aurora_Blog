const e=JSON.parse(`{"key":"v-93e441b4","path":"/%E6%96%87%E7%AB%A0/%E5%88%86%E7%B1%BB/Vue/%E7%BB%84%E4%BB%B6%E9%97%B4%E6%B6%88%E6%81%AF%E7%9A%84%E4%BC%A0%E9%80%92/Pinia%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86.html","title":"Pinia— Vue 3的官方状态管理库","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2023-07-27T00:00:00.000Z","category":["vue"],"tag":["笔记","面试题"],"star":3727,"sticky":false,"copy.disableCopy":true,"description":"Pinia— Vue 3的官方状态管理库 状态管理 什么是状态管理 状态管理指的是在应用程序中，对应用程序数据（即状态）进行有效组织、维护和更新的一系列技术和方法。它通常包括确定和记录应用程序所需的所有状态数据，以及管理这些数据的变化和使用。状态管理可以帮助开发人员设计和实现可维护性高、可扩展性好的应用程序，并提高应用程序的性能和用户体验。 Vue的状态管理称为Vue状态管理模式，是一种在Vue的核心框架中提供了一种将状态与视图分离的思想，以更好地管理应用程序的状态和数据。理论上来说，每一个 Vue 组件实例都已经在“管理”它自己的响应式状态了。我们以一个简单的计数器组件为例：","head":[["meta",{"property":"og:url","content":"https://wei-z.top/%E6%96%87%E7%AB%A0/%E5%88%86%E7%B1%BB/Vue/%E7%BB%84%E4%BB%B6%E9%97%B4%E6%B6%88%E6%81%AF%E7%9A%84%E4%BC%A0%E9%80%92/Pinia%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Aurora's Blog"}],["meta",{"property":"og:title","content":"Pinia— Vue 3的官方状态管理库"}],["meta",{"property":"og:description","content":"Pinia— Vue 3的官方状态管理库 状态管理 什么是状态管理 状态管理指的是在应用程序中，对应用程序数据（即状态）进行有效组织、维护和更新的一系列技术和方法。它通常包括确定和记录应用程序所需的所有状态数据，以及管理这些数据的变化和使用。状态管理可以帮助开发人员设计和实现可维护性高、可扩展性好的应用程序，并提高应用程序的性能和用户体验。 Vue的状态管理称为Vue状态管理模式，是一种在Vue的核心框架中提供了一种将状态与视图分离的思想，以更好地管理应用程序的状态和数据。理论上来说，每一个 Vue 组件实例都已经在“管理”它自己的响应式状态了。我们以一个简单的计数器组件为例："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-27T08:49:52.000Z"}],["meta",{"property":"article:author","content":"Aurora"}],["meta",{"property":"article:tag","content":"笔记"}],["meta",{"property":"article:tag","content":"面试题"}],["meta",{"property":"article:published_time","content":"2023-07-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-27T08:49:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Pinia— Vue 3的官方状态管理库\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-27T08:49:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Aurora\\",\\"url\\":\\"https://gitee.com/agaion1110\\"}]}"]]},"headers":[{"level":2,"title":"状态管理","slug":"状态管理","link":"#状态管理","children":[{"level":3,"title":"什么是状态管理","slug":"什么是状态管理","link":"#什么是状态管理","children":[]},{"level":3,"title":"vue状态管理的优点","slug":"vue状态管理的优点","link":"#vue状态管理的优点","children":[]},{"level":3,"title":"vue状态管理使用场景","slug":"vue状态管理使用场景","link":"#vue状态管理使用场景","children":[]}]},{"level":2,"title":"Pinia","slug":"pinia","link":"#pinia","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"创建大仓库并引入安装","slug":"创建大仓库并引入安装","link":"#创建大仓库并引入安装","children":[]},{"level":3,"title":"创建小仓库","slug":"创建小仓库","link":"#创建小仓库","children":[]},{"level":3,"title":"组件上的状态管理","slug":"组件上的状态管理","link":"#组件上的状态管理","children":[]}]}],"git":{"createdTime":1690447792000,"updatedTime":1690447792000,"contributors":[{"name":"Aurora","email":"1852831787@qq.com","commits":1}]},"readingTime":{"minutes":4.6,"words":1380},"filePathRelative":"文章/分类/Vue/组件间消息的传递/Pinia状态管理.md","localizedDate":"2023年7月27日","excerpt":"<h1> Pinia— Vue 3的官方状态管理库</h1>\\n<h2> 状态管理</h2>\\n<h3> 什么是状态管理</h3>\\n<p><strong>状态管理</strong>指的是在应用程序中，对应用程序数据（即状态）进行有效组织、维护和更新的一系列技术和方法。它通常包括确定和记录应用程序所需的所有状态数据，以及管理这些数据的变化和使用。状态管理可以帮助开发人员设计和实现可维护性高、可扩展性好的应用程序，并提高应用程序的性能和用户体验。</p>\\n<p>Vue的状态管理称为Vue状态管理模式，是一种在Vue的核心框架中提供了一种将<strong>状态与视图分离</strong>的思想，以更好地管理应用程序的状态和数据。理论上来说，每一个 Vue 组件实例都已经在“管理”它自己的响应式状态了。我们以一个简单的计数器组件为例：</p>","autoDesc":true}`);export{e as data};
