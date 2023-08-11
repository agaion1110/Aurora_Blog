export const data = JSON.parse("{\"key\":\"v-ef9edc0e\",\"path\":\"/%E6%96%87%E7%AB%A0/%E5%88%86%E7%B1%BB/%E7%AE%97%E6%B3%95/.~KMP%E7%AE%97%E6%B3%95.html\",\"title\":\"KMP算法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"KMP算法 什么时KMP算法 KMP算法是一种改进的字符串匹配算法 由D.E.Knuth，J.H.Morris和 V.R.Pratt提出的，因此人们称它为克努特—莫里斯—普拉特操作（简称KMP算法）。 KMP的主要思想是当出现字符串不匹配时，可以知道一部分之前已经匹配的文本内容，可以利用这些信息避免从头再去做匹配了。 所以如何记录已经匹配的文本内容，是KMP的重点，也就是next数组。 next数组 next数组其实就是模式字符串（模式串）的前缀表prefix，前缀表是用来回退的，它记录了模式串与主串(文本串)不匹配的时候，模式串应该从哪里开始重新匹配。\"},\"headers\":[{\"level\":2,\"title\":\"什么时KMP算法\",\"slug\":\"什么时kmp算法\",\"link\":\"#什么时kmp算法\",\"children\":[]},{\"level\":2,\"title\":\"next数组\",\"slug\":\"next数组\",\"link\":\"#next数组\",\"children\":[]}],\"readingTime\":{\"minutes\":1.18,\"words\":355},\"filePathRelative\":\"文章/分类/算法/.~KMP算法.md\",\"excerpt\":\"<h1> KMP算法</h1>\\n<h2> 什么时KMP算法</h2>\\n<p><strong>KMP算法是一种改进的字符串匹配算法</strong></p>\\n<p>由D.E.Knuth，J.H.Morris和     V.R.Pratt提出的，因此人们称它为克努特—莫里斯—普拉特操作（简称KMP算法）。</p>\\n<p>KMP的主要思想是<strong>当出现字符串不匹配时，可以知道一部分之前已经匹配的文本内容，可以利用这些信息避免从头再去做匹配了。</strong></p>\\n<p>所以如何记录已经匹配的文本内容，是KMP的重点，也就是next数组。</p>\\n<h2> next数组</h2>\\n<p>next数组其实就是<strong>模式字符串（模式串）的前缀表<code>prefix</code></strong>，前缀表是用来回退的，它记录了模式串与主串(文本串)不匹配的时候，模式串应该从哪里开始重新匹配。</p>\",\"autoDesc\":true}")

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
