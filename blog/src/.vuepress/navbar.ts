import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: 'Vue系列',
    icon: 'vue',
    link: '/文章/分类/Vue'
  },
  {text: 'leetcode题解',
  icon: 'ability',
  link: '/文章/分类/算法'},
  { text: "分类", icon: "discover", link: "/category/" },
  {
    text: '标签',
    icon: 'tag',
    link: '/tag/笔记/'
  },
  {
    text: '时间轴',
    icon: 'time',
    link: '/timeline/'
  },
]);
