/* configs/nav.ts */
import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.Config["nav"] = [
  { text: "主页", link: "/" },
  {
    text: "导航",
    link: "/nav/",
  },
  {
    text: "前端",
    items: [
      {
        text: "HTML",
        link: "/front-end/html/",
      },
      {
        text: "CSS",
        link: "/front-end/CSS/",
      },
      {
        text: "HTML进阶",
        link: "/front-end/html-advanced/",
      },
      {
        text: "CSS进阶",
        link: "/front-end/CSS-advanced/",
      },
    ],
  },
  {
    text: "后端",
    items: [
      {
        items: [{ text: "C语言笔记", link: "/back-end/c/" }],
      },
    ],
  },
  {
    text: "面试",
    items: [
      {
        items: [{ text: "前端面试题", link: "/interview/" }],
      }
    ],
  },
  {
    text: "文档搭建",
    items: [
      {
        text: "介绍",
        items: [{ text: "前言", link: "/doc-build/preface/" }],
      },
      {
        text: "基础设置",
        items: [
          { text: "快速上手", link: "/doc-build/getting-started/" },
          { text: "配置", link: "/doc-build/configuration/" },
          { text: "页面", link: "/doc-build/page/" },
          { text: "Frontmatter", link: "/doc-build/frontmatter/" },
        ],
      },
      {
        text: "进阶玩法",
        items: [{ text: "markdown", link: "/doc-build/markdown/" }],
      },
    ],
  },
  { text: "技术栈", link: "/about/" },
];
