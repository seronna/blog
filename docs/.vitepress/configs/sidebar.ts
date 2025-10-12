/* configs/nav.ts */
import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/front-end/": [
    {
      text: "入门",
      collapsed: false,
      items: [
        { text: "HTML", link: "/front-end/html/" },
        { text: "HTML进阶", link: "/front-end/html-advanced/" },
        { text: "CSS", link: "/front-end/css/" },
        { text: "JavaScript", link: "/front-end/js/" },
      ],
    },
    {
      text: "进阶",
      items: [],
    },
  ],
  "/back-end/c": [
    { text: "C语言入门", link: "/back-end/c/" },
    { text: "变量与进制", link: "/back-end/c/第02章_变量与进制.md" },
    {
      text: "运算符与流程控制",
      link: "/back-end/c/第03章_运算符与流程控制.md",
    },
    { text: "指针", link: "/back-end/c/第05章_指针(重点).md" },
    { text: "函数", link: "/back-end/c/第06章_函数.md" },
    { text: "结构体与共用体", link: "/back-end/c/第07章_结构体与共用体.md" },
    { text: "C语言常用函数", link: "/back-end/c/第08章_C语言常用函数.md" },
    { text: "文章操作", link: "/back-end/c/第09章_文件操作.md" },
  ],
  "/doc-build/": [
    {
      text: "介绍",
      items: [{ text: "前言", link: "/doc-build/preface/index.md" }],
    },
    {
      text: "基础设置",
      collapsed: false,
      items: [
        { text: "快速上手", link: "/doc-build/getting-started/index.md" },
        { text: "配置", link: "/doc-build/configuration/index.md" },
        { text: "页面", link: "/doc-build/page/index.md" },
        { text: "Frontmatter", link: "/doc-build/frontmatter/index.md" },
      ],
    },
    {
      text: "进阶玩法",
      collapsed: false,
      items: [
        { text: "markdown", link: "/doc-build/markdown/index.md" },
        { text: "团队", link: "/doc-build/team/index.md" },
        { text: "静态部署", link: "/doc-build/assets/index.md" },
      ],
    },
  ],
};
