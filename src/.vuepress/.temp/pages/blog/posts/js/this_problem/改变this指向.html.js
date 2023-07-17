export const data = JSON.parse("{\"key\":\"v-4197a2e0\",\"path\":\"/blog/posts/js/this_problem/%E6%94%B9%E5%8F%98this%E6%8C%87%E5%90%91.html\",\"title\":\"改变this指向\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"edit\",\"category\":[\"js\"],\"tag\":[\"红\",\"圆\"],\"star\":true,\"sticky\":true,\"description\":\"改变this指向 重点:箭头函数,不能改变this指向,只有普通function函数,能改变this指向 改变this指向的方法 call()方法 语法: 函数.call(参数1,其他参数....可以是多个或者没有 ) 作用: 调用并且执行函数,同时,将函数的this指向,定义为指定的内容(参数1) 参数1,是改变的this的指向 其他参数,是原始函数的实参,原始函数有几个形参,此时就要对应的输入几个实参,没有形参,就没有实参 apply()方法 语法: 函数.apply(参数1,参数2) 只有两个参数 参数1:改变的this的指向内容 参数2:原始函数的实参,必须是一个数组的形式,将实参定义成数组的单元 其他用法和作用于 .call是相同的 总结: call方法与apply方法,作用,效果,都是完全一致的 只是对于原始函数的参数赋值方法,不同 call方法是通过其他多个参数来实现 apply方法是通过一个数组参数,来实现 两个方法没有本质的区别,爱用哪个用那个 bind()方法 语法: const 变量 = 函数.bind(参数1); 作用：不是立即执行函数（下一篇博客有介绍 立即执行函数）\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/blog/posts/js/this_problem/%E6%94%B9%E5%8F%98this%E6%8C%87%E5%90%91.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Aurora's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"改变this指向\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"改变this指向 重点:箭头函数,不能改变this指向,只有普通function函数,能改变this指向 改变this指向的方法 call()方法 语法: 函数.call(参数1,其他参数....可以是多个或者没有 ) 作用: 调用并且执行函数,同时,将函数的this指向,定义为指定的内容(参数1) 参数1,是改变的this的指向 其他参数,是原始函数的实参,原始函数有几个形参,此时就要对应的输入几个实参,没有形参,就没有实参 apply()方法 语法: 函数.apply(参数1,参数2) 只有两个参数 参数1:改变的this的指向内容 参数2:原始函数的实参,必须是一个数组的形式,将实参定义成数组的单元 其他用法和作用于 .call是相同的 总结: call方法与apply方法,作用,效果,都是完全一致的 只是对于原始函数的参数赋值方法,不同 call方法是通过其他多个参数来实现 apply方法是通过一个数组参数,来实现 两个方法没有本质的区别,爱用哪个用那个 bind()方法 语法: const 变量 = 函数.bind(参数1); 作用：不是立即执行函数（下一篇博客有介绍 立即执行函数）\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Aurora\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"红\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"圆\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"改变this指向\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Aurora\\\",\\\"url\\\":\\\"https://mrhope.site\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"改变this指向的方法\",\"slug\":\"改变this指向的方法\",\"link\":\"#改变this指向的方法\",\"children\":[]}],\"readingTime\":{\"minutes\":2.49,\"words\":746},\"filePathRelative\":\"blog/posts/js/this_problem/改变this指向.md\",\"excerpt\":\"<h1> 改变this指向</h1>\\n<p><mark>重点:箭头函数,不能改变this指向,只有普通function函数,能改变this指向</mark></p>\\n<h2> 改变this指向的方法</h2>\\n<ol>\\n<li>\\n<p>call()方法\\n语法: 函数.call(参数1,其他参数....可以是多个或者没有 )\\n作用: 调用并且执行函数,同时,将函数的this指向,定义为指定的内容(参数1)\\n参数1,是改变的this的指向\\n其他参数,是原始函数的实参,原始函数有几个形参,此时就要对应的输入几个实参,没有形参,就没有实参</p>\\n</li>\\n<li>\\n<p>apply()方法\\n语法: 函数.apply(参数1,参数2)  只有两个参数\\n参数1:改变的this的指向内容\\n参数2:原始函数的实参,必须是一个数组的形式,将实参定义成数组的单元\\n其他用法和作用于 .call是相同的</p>\\n<p>总结: call方法与apply方法,作用,效果,都是完全一致的\\n只是对于原始函数的参数赋值方法,不同\\ncall方法是通过其他多个参数来实现\\napply方法是通过一个数组参数,来实现\\n两个方法没有本质的区别,爱用哪个用那个</p>\\n</li>\\n<li>\\n<p>bind()方法\\n语法: const 变量 = 函数.bind(参数1);\\n作用：不是立即执行函数（下一篇博客有介绍 立即执行函数）</p>\\n</li>\\n</ol>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
