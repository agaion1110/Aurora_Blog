export const data = JSON.parse("{\"key\":\"v-5882512f\",\"path\":\"/%E6%96%87%E7%AB%A0/%E5%88%86%E7%B1%BB/js/Promise/Promise%E5%9F%BA%E7%A1%80.html\",\"title\":\"Promise对象\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2023-07-20T00:00:00.000Z\",\"category\":[\"js\"],\"tag\":[\"Promise\",\"面试题\"],\"star\":3720,\"sticky\":true,\"copy.disableCopy\":true,\"description\":\"Promise对象 Promise概念 Promise 对象表示异步操作最终的完成（或失败）以及其结果值。 一个 Promise 是一个代理，它代表一个在创建 promise 时不一定已知的值。它允许你将处理程序与异步操作的最终成功值或失败原因关联起来。这使得异步方法可以像同步方法一样返回值：异步方法不会立即返回最终值，而是返回一个 promise，以便在将来的某个时间点提供该值。 一个待定的 Promise 最终状态可以是已兑现并返回一个值，或者是已拒绝并返回一个原因（错误）。当其中任意一种情况发生时，通过 Promise 的 then 方法串联的处理程序将被调用。如果绑定相应处理程序时 Promise 已经兑现或拒绝，这处理程序将被立即调用，因此在异步操作完成和绑定处理程序之间不存在竞态条件。 如果一个 Promise 已经被兑现或拒绝，即不再处于待定状态，那么则称之为已敲定（settled）。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://wei-z.top/%E6%96%87%E7%AB%A0/%E5%88%86%E7%B1%BB/js/Promise/Promise%E5%9F%BA%E7%A1%80.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Aurora's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Promise对象\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Promise对象 Promise概念 Promise 对象表示异步操作最终的完成（或失败）以及其结果值。 一个 Promise 是一个代理，它代表一个在创建 promise 时不一定已知的值。它允许你将处理程序与异步操作的最终成功值或失败原因关联起来。这使得异步方法可以像同步方法一样返回值：异步方法不会立即返回最终值，而是返回一个 promise，以便在将来的某个时间点提供该值。 一个待定的 Promise 最终状态可以是已兑现并返回一个值，或者是已拒绝并返回一个原因（错误）。当其中任意一种情况发生时，通过 Promise 的 then 方法串联的处理程序将被调用。如果绑定相应处理程序时 Promise 已经兑现或拒绝，这处理程序将被立即调用，因此在异步操作完成和绑定处理程序之间不存在竞态条件。 如果一个 Promise 已经被兑现或拒绝，即不再处于待定状态，那么则称之为已敲定（settled）。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://wei-z.top/\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-07-25T07:45:12.000Z\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"Promise对象\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Aurora\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Promise\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"面试题\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-07-20T00:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-07-25T07:45:12.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Promise对象\\\",\\\"image\\\":[\\\"https://wei-z.top/\\\"],\\\"datePublished\\\":\\\"2023-07-20T00:00:00.000Z\\\",\\\"dateModified\\\":\\\"2023-07-25T07:45:12.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Aurora\\\",\\\"url\\\":\\\"https://gitee.com/agaion1110\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Promise概念\",\"slug\":\"promise概念\",\"link\":\"#promise概念\",\"children\":[]},{\"level\":2,\"title\":\"为什么要使用Promise\",\"slug\":\"为什么要使用promise\",\"link\":\"#为什么要使用promise\",\"children\":[]},{\"level\":2,\"title\":\"异步编程\",\"slug\":\"异步编程\",\"link\":\"#异步编程\",\"children\":[]},{\"level\":2,\"title\":\"Promise的状态\",\"slug\":\"promise的状态\",\"link\":\"#promise的状态\",\"children\":[]},{\"level\":2,\"title\":\"Promise 对象的值\",\"slug\":\"promise-对象的值\",\"link\":\"#promise-对象的值\",\"children\":[]},{\"level\":2,\"title\":\"promise的基本流程\",\"slug\":\"promise的基本流程\",\"link\":\"#promise的基本流程\",\"children\":[]},{\"level\":2,\"title\":\"如何使用Promise\",\"slug\":\"如何使用promise\",\"link\":\"#如何使用promise\",\"children\":[]},{\"level\":2,\"title\":\"Promise的几个关键问题\",\"slug\":\"promise的几个关键问题\",\"link\":\"#promise的几个关键问题\",\"children\":[{\"level\":3,\"title\":\"如何改变promise的状态？\",\"slug\":\"如何改变promise的状态\",\"link\":\"#如何改变promise的状态\",\"children\":[]},{\"level\":3,\"title\":\"一个promise指定多个成功/失败回调函数，都会调用吗？\",\"slug\":\"一个promise指定多个成功-失败回调函数-都会调用吗\",\"link\":\"#一个promise指定多个成功-失败回调函数-都会调用吗\",\"children\":[]},{\"level\":3,\"title\":\"改变promise状态和指定回调函数谁先谁后？\",\"slug\":\"改变promise状态和指定回调函数谁先谁后\",\"link\":\"#改变promise状态和指定回调函数谁先谁后\",\"children\":[]},{\"level\":3,\"title\":\"Promise.then()方法的返回结果特点\",\"slug\":\"promise-then-方法的返回结果特点\",\"link\":\"#promise-then-方法的返回结果特点\",\"children\":[]},{\"level\":3,\"title\":\"promise如何串连多个操作任务？\",\"slug\":\"promise如何串连多个操作任务\",\"link\":\"#promise如何串连多个操作任务\",\"children\":[]},{\"level\":3,\"title\":\"promise异常传透？\",\"slug\":\"promise异常传透\",\"link\":\"#promise异常传透\",\"children\":[]},{\"level\":3,\"title\":\"promise异常传透\",\"slug\":\"promise异常传透-1\",\"link\":\"#promise异常传透-1\",\"children\":[]},{\"level\":3,\"title\":\"中断promise链\",\"slug\":\"中断promise链\",\"link\":\"#中断promise链\",\"children\":[]}]}],\"git\":{\"createdTime\":1689864910000,\"updatedTime\":1690271112000,\"contributors\":[{\"name\":\"Aurora\",\"email\":\"1852831787@qq.com\",\"commits\":2},{\"name\":\"‘洋芋炒Ç土豆’\",\"email\":\"‘1852831787@qq.com’\",\"commits\":2}]},\"readingTime\":{\"minutes\":5.5,\"words\":1650},\"filePathRelative\":\"文章/分类/js/Promise/Promise基础.md\",\"localizedDate\":\"2023年7月20日\",\"excerpt\":\"<h1> Promise对象</h1>\\n<h2> Promise概念</h2>\\n<p><strong><code>Promise</code></strong> 对象表示异步操作最终的完成（或失败）以及其结果值。</p>\\n<p>一个 <strong><code>Promise</code></strong> 是一个代理，它代表一个在创建 promise 时不一定已知的值。它允许你将处理程序与异步操作的最终成功值或失败原因关联起来。这使得异步方法可以像同步方法一样返回值：异步方法不会立即返回最终值，而是返回一个 <em>promise</em>，以便在将来的某个时间点提供该值。</p>\\n<p>一个待定的 Promise <em>最终状态</em>可以是<em>已兑现</em>并返回一个值，或者是<em>已拒绝</em>并返回一个原因（错误）。当其中任意一种情况发生时，通过 Promise 的 <code>then</code> 方法串联的处理程序将被调用。如果绑定相应处理程序时 Promise 已经兑现或拒绝，这处理程序将被立即调用，因此在异步操作完成和绑定处理程序之间不存在竞态条件。</p>\\n<p>如果一个 Promise 已经被兑现或拒绝，即不再处于待定状态，那么则称之为已<em>敲定（settled）</em>。</p>\\n\",\"autoDesc\":true}")
