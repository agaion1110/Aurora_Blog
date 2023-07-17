import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: 'zh-CN',
  title: "Aurora's Blog",
  description: '这是我的第一个 VuePress 站点',
  base: "/",
  theme
});
