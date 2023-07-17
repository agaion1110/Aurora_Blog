import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";
export default hopeTheme({
  hostname: "https://118.24.93.28/blog",
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
  // 打印按钮
  print: true,
  hideSiteNameOnMobile: false,
  docsDir: "docs",

  blog: {
    medias: {
      Dingding: "https://example.com",
      BiliBili: "https://example.com",
      Gitee: "https://gitee.com/agaion1110",
      GitHub: "https://example.com",
      QQ: "https://example.com",
      CSDN: ["https://blog.csdn.net/weixin_63050915?spm=1000.2115.3001.5343","/src/.vuepress/public/logo.svg"],
      Wechat: "https://wx.qq.com/"
    },
    roundAvatar: true,
    sidebarDisplay: "always",
  },

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "大家一起进步哈(●'◡'●)",

      displayFooter: true,

      blog: {
        description: "一个前端开发者",
        intro: "/文章/intro.html",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "大家一起进步哈(●'◡'●)",

      displayFooter: true,

      blog: {
        description: "一个前端开发者",
        intro: "/文章/intro.html",
      },
    },
  },

  //加密配置
  encrypt: {
    config: {
    },
  },

  plugins: {
    blog: true,
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
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
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
  },
});
