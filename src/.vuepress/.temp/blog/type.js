export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-7f831610","v-6794bb83","v-efb67ada","v-978de902","v-40da31cf","v-77988118","v-44816efd","v-06c2edc3","v-d1658ea4","v-9fac680a","v-23a843aa","v-21b02116","v-5a986478","v-c2257a64","v-8be487f6","v-70586f3d"]}},"star":{"/":{"path":"/star/","keys":["v-7f831610","v-06c2edc3","v-d1658ea4","v-6794bb83","v-9fac680a","v-23a843aa","v-efb67ada","v-978de902","v-40da31cf"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-7f831610","v-77988118","v-44816efd","v-06c2edc3","v-d1658ea4","v-6794bb83","v-9fac680a","v-23a843aa"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

