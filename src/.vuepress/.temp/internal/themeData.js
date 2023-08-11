export const themeData = JSON.parse("{\"encrypt\":{\"config\":{}},\"author\":{\"name\":\"Aurora\",\"url\":\"https://gitee.com/agaion1110\"},\"logo\":\"/logo1.png\",\"fullscreen\":true,\"repo\":\"https://gitee.com/agaion1110\",\"navbarAutoHide\":\"always\",\"print\":true,\"hideSiteNameOnMobile\":false,\"docsDir\":\"docs\",\"blog\":{\"medias\":{\"Dingding\":\"https://example.com\",\"BiliBili\":\"https://example.com\",\"Gitee\":\"https://gitee.com/agaion1110\",\"GitHub\":\"https://example.com\",\"QQ\":\"https://example.com\",\"Wechat\":\"https://wx.qq.com/\"},\"roundAvatar\":true,\"sidebarDisplay\":\"always\"},\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\",\"print\":\"打印\"},\"blogLocales\":{\"article\":\"文章\",\"articleList\":\"文章列表\",\"category\":\"分类\",\"tag\":\"标签\",\"timeline\":\"时间轴\",\"timelineTitle\":\"昨日不在\",\"all\":\"全部\",\"intro\":\"个人介绍\",\"star\":\"收藏\"},\"paginationLocales\":{\"prev\":\"上一页\",\"next\":\"下一页\",\"navigate\":\"跳转到\",\"action\":\"前往\",\"errorText\":\"请输入 1 到 $page 之前的页码！\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[\"\",{\"text\":\"分类\",\"icon\":\"discover\",\"link\":\"/文章/分类/\"},{\"text\":\"精选博文\",\"icon\":\"edit\",\"prefix\":\"/文章/分类/\",\"children\":[{\"text\":\"leetcode算法\",\"icon\":\"edit\",\"prefix\":\"算法/\",\"children\":[{\"text\":\"双指针法\",\"icon\":\"edit\",\"link\":\"双指针法\"},{\"text\":\"最小覆盖子串\",\"icon\":\"edit\",\"link\":\"最小覆盖子串\"}]},{\"text\":\"学习笔记\",\"icon\":\"edit\",\"prefix\":\"项目总结/\",\"children\":[{\"text\":\"个人博客网站的搭建\",\"icon\":\"edit\",\"link\":\"个人博客网站/个人博客网站\"}]},{\"text\":\"前端面试常考\",\"icon\":\"edit\",\"prefix\":\"js/Promise/\",\"children\":[{\"text\":\"Promise基本概念\",\"icon\":\"edit\",\"link\":\"Promise对象\"},{\"text\":\"手撕Promise\",\"icon\":\"edit\",\"link\":\"手写Promise\"}]}]},{\"text\":\"项目地址\",\"icon\":\"note\",\"children\":[{\"text\":\"项目1213\",\"icon\":\"note\",\"link\":\"https://theme-hope.vuejs.press/zh/\"}]}],\"footer\":\"大家一起进步哈(●'◡'●)\",\"displayFooter\":true,\"blog\":{\"description\":\"一个前端开发者\",\"intro\":\"/文章/intro.html\"}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
