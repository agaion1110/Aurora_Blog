import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  { text: "分类", icon: "discover", link: "/文章/分类/" },
  {
    text: "精选博文",
    icon: "edit",
    prefix: "/文章/分类/",
    children: [
      {
        text: "leetcode算法",
        icon: "edit",
        prefix: "算法/",
        children: [
          { text: "双指针法", icon: "edit", link: "双指针法" },
          { text: "最小覆盖子串", icon: "edit", link: "最小覆盖子串" },
        ],
      },
      {
        text: "学习笔记",
        icon: "edit",
        prefix: "项目总结/",
        children: [
          { text: "个人博客网站的搭建", icon: "edit", link: "个人博客网站/个人博客网站" }
        ],
      },
      {
        text: "前端面试常考",
        icon: "edit",
        prefix: "js/Promise/",
        children: [
          { text: "Promise基本概念", icon: "edit", link: "Promise对象" },
          { text: "手撕Promise", icon: "edit", link: "手写Promise" }
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
