import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "",
  { text: "分类", icon: "discover", link: "/文章/分类/" },
  {
    text: "精选博文",
    icon: "edit",
    prefix: "/文章/分类/",
    children: [
      {
        text: "this指向问题",
        icon: "edit",
        prefix: "js/this_problem/",
        children: [
          { text: "改变this指向", icon: "edit", link: "改变this指向" },
          { text: "箭头函数", icon: "edit", link: "箭头函数" }
        ],
      },
      {
        text: "学习笔记",
        icon: "edit",
        prefix: "internet/",
        children: [
          { text: "计网概念", icon: "edit", link: "NO1 计网体系结构/计算机网络的概念" },
          { text: "体系结构", icon: "edit", link: "NO1 计网体系结构/体系结构&参考模型" }
        ],
      },
    ],
  },
  {
    text: "项目地址",
    icon: "note",
    children: [
      {
        text: "项目1213",
        icon: "note",
        link: "https://theme-hope.vuejs.press/zh/",
      }
    ]
  },
]);

