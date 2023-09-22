import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { popperPlugin } from "./plugins/vuepress-plugin-popper";
import { hitokotoPlugin } from "./plugins/vuepress-plugin-hitokoto";
import { PopperShape } from "@moefy-canvas/theme-popper";
import theme from "./theme.js";
import { path } from "@vuepress/utils";
import {
  canvasPlugin,
  CanvasPluginType,
} from "./plugins/vuepress-plugin-canvas";
export default defineUserConfig({
  base: "/",
  lang: 'zh-CN',
  title: "Aurora's Blog",
  description: '这是我的第一个 VuePress 站点',
  alias: {
    "@MyLink": path.resolve(__dirname, "./components/Mylink.vue"),
    "@MyCoverLink": path.resolve(__dirname, "./components/MyCoverLink.vue"),
  },
  theme,
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        }
      },
    }),
    // 鼠标特效插件
    popperPlugin({
      config: {
        shape: PopperShape.Star,
        size: 1.95,
        numParticles: 10,
      },
    }),
    // 一言插件
    hitokotoPlugin({}),
    // 背景插件
    canvasPlugin({
      type: CanvasPluginType.Figure,
      ribbonOption: {
        zIndex: 5,
        alpha: 0.8,
        size: 90,
      },
    }),
  ],
});

