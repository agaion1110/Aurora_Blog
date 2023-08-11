const t=JSON.parse(`{"key":"v-303e9700","path":"/%E6%96%87%E7%AB%A0/%E5%88%86%E7%B1%BB/%E9%A1%B9%E7%9B%AE%E6%80%BB%E7%BB%93/git%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7/%E5%85%B3%E4%BA%8ESSL%E8%AF%81%E4%B9%A6%E9%97%AE%E9%A2%98.html","title":"SSL certificate problem: unable to get local issuer certificate 的一种解决方案","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2023-08-10T00:00:00.000Z","category":["git使用技巧","学习笔记"],"tag":["笔记"],"star":3810,"sticky":true,"copy.disableCopy":true,"description":"SSL certificate problem: unable to get local issuer certificate 的一种解决方案 今天遇到这样一个问题，因为平时项目托管到gitee上，所以当今天突然要使用github时，问题就来了，当我们创建完新仓库后，本地项目将要上传到远端仓库。 git init git add . git commit -m \\"first commit\\" git branch -M main git remote add origin 仓库url地址 git push origin main","head":[["meta",{"property":"og:url","content":"https://wei-z.top/%E6%96%87%E7%AB%A0/%E5%88%86%E7%B1%BB/%E9%A1%B9%E7%9B%AE%E6%80%BB%E7%BB%93/git%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7/%E5%85%B3%E4%BA%8ESSL%E8%AF%81%E4%B9%A6%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"Aurora's Blog"}],["meta",{"property":"og:title","content":"SSL certificate problem: unable to get local issuer certificate 的一种解决方案"}],["meta",{"property":"og:description","content":"SSL certificate problem: unable to get local issuer certificate 的一种解决方案 今天遇到这样一个问题，因为平时项目托管到gitee上，所以当今天突然要使用github时，问题就来了，当我们创建完新仓库后，本地项目将要上传到远端仓库。 git init git add . git commit -m \\"first commit\\" git branch -M main git remote add origin 仓库url地址 git push origin main"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-11T07:39:11.000Z"}],["meta",{"property":"article:author","content":"Aurora"}],["meta",{"property":"article:tag","content":"笔记"}],["meta",{"property":"article:published_time","content":"2023-08-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-11T07:39:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SSL certificate problem: unable to get local issuer certificate 的一种解决方案\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-11T07:39:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Aurora\\",\\"url\\":\\"https://gitee.com/agaion1110\\"}]}"]]},"headers":[],"git":{"createdTime":1691739551000,"updatedTime":1691739551000,"contributors":[{"name":"Aurora","email":"1852831787@qq.com","commits":1}]},"readingTime":{"minutes":1.27,"words":380},"filePathRelative":"文章/分类/项目总结/git使用技巧/关于SSL证书问题.md","localizedDate":"2023年8月10日","excerpt":"<h1> SSL certificate problem: unable to get local issuer certificate 的一种解决方案</h1>\\n<p>今天遇到这样一个问题，因为平时项目托管到gitee上，所以当今天突然要使用github时，问题就来了，当我们创建完新仓库后，本地项目将要上传到远端仓库。</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">git</span> init\\n<span class=\\"token function\\">git</span> <span class=\\"token function\\">add</span> <span class=\\"token builtin class-name\\">.</span>\\n<span class=\\"token function\\">git</span> commit <span class=\\"token parameter variable\\">-m</span> <span class=\\"token string\\">\\"first commit\\"</span>\\n<span class=\\"token function\\">git</span> branch <span class=\\"token parameter variable\\">-M</span> main\\n<span class=\\"token function\\">git</span> remote <span class=\\"token function\\">add</span> origin 仓库url地址\\n<span class=\\"token function\\">git</span> push origin main\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
