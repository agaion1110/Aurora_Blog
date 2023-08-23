import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";

export default hopeTheme({
  hostname: "https://wei-z.top",
  author: {
    name: "Aurora",
    url: "https://gitee.com/agaion1110",
  },
  iconAssets: "iconfont",
  favicon: "/logo1.png",
  logo: "/logo1.png",
  // 是否显示全屏按钮
  fullscreen: true,
  repo: "https://gitee.com/agaion1110",
  // 滑动滚轮是否隐藏顶部导航栏
  navbarAutoHide: "always",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  // sidebar,

  footer: "大家一起进步哈(●'◡'●)",

  displayFooter: true,

  blog: {
    description: "一个前端萌新🐸",
    intro: "/文章/intro.html",
    medias: {
      Dingding: "https://example.com",
      BiliBili: "https://example.com",
      Gitee: "https://gitee.com/agaion1110",
      GitHub: "https://example.com",
      QQ: "https://example.com",
      Wechat: "https://wx.qq.com/"
    },
    roundAvatar: true,
    sidebarDisplay: "always",
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },


  plugins: {
    blog: true,

    comment: {
      // You should generate and use your own comment service
      provider: "Waline",
      serverURL: "https://waline-comment.vuejs.press",
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
