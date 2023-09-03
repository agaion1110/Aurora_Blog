import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: 'zh-CN',
  title: "Aurora's Blog",
  description: '这是我的第一个 VuePress 站点',

  theme,
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        }
      },
    }),
  ],
});
