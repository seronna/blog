/* configs/sidebar.ts */
import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
  // 卷帙 - 技术学习笔记
  "/content/juanzhi/frontend/": [
    {
      text: "入门",
      collapsed: false,
      items: [
        { text: "HTML", link: "/content/juanzhi/frontend/html/" },
        { text: "HTML进阶", link: "/content/juanzhi/frontend/html-advanced/" },
        { text: "CSS", link: "/content/juanzhi/frontend/CSS/" },
        { text: "CSS进阶", link: "/content/juanzhi/frontend/CSS-advanced/" },
        { text: "JavaScript", link: "/content/juanzhi/frontend/js/" },
      ],
    },
    {
      text: "进阶",
      items: [],
    },
  ],

  "/content/juanzhi/backend/c/": [
    { text: "C语言入门", link: "/content/juanzhi/backend/c/" },
    {
      text: "变量与进制",
      link: "/content/juanzhi/backend/c/第02章_变量与进制.md",
    },
    {
      text: "运算符与流程控制",
      link: "/content/juanzhi/backend/c/第03章_运算符与流程控制.md",
    },
    { text: "指针", link: "/content/juanzhi/backend/c/第05章_指针(重点).md" },
    { text: "函数", link: "/content/juanzhi/backend/c/第06章_函数.md" },
    {
      text: "结构体与共用体",
      link: "/content/juanzhi/backend/c/第07章_结构体与共用体.md",
    },
    {
      text: "C语言常用函数",
      link: "/content/juanzhi/backend/c/第08章_C语言常用函数.md",
    },
    { text: "文章操作", link: "/content/juanzhi/backend/c/第09章_文件操作.md" },
  ],

  // 札记 - 技术日常分享
  "/content/zhaji/doc-build/": [
    {
      text: "介绍",
      items: [
        { text: "前言", link: "/content/zhaji/doc-build/preface/index.md" },
      ],
    },
    {
      text: "基础设置",
      collapsed: false,
      items: [
        {
          text: "快速上手",
          link: "/content/zhaji/doc-build/getting-started/index.md",
        },
        {
          text: "配置",
          link: "/content/zhaji/doc-build/configuration/index.md",
        },
        { text: "页面", link: "/content/zhaji/doc-build/page/index.md" },
        {
          text: "Frontmatter",
          link: "/content/zhaji/doc-build/frontmatter/index.md",
        },
      ],
    },
    {
      text: "进阶玩法",
      collapsed: false,
      items: [
        {
          text: "markdown",
          link: "/content/zhaji/doc-build/markdown/index.md",
        },
      ],
    },
  ],

  // 其他目录的基础配置
  "/content/juanzhi/": [
    {
      text: "技术学习笔记",
      items: [
        { text: "前端", link: "/content/juanzhi/frontend/" },
        { text: "后端", link: "/content/juanzhi/backend/" },
        { text: "设计模式", link: "/content/juanzhi/design-patterns/" },
      ],
    },
  ],

  "/content/zhaji/": [
    {
      text: "技术日常分享",
      items: [{ text: "文档搭建", link: "/content/zhaji/doc-build/" }],
    },
  ],

  "/content/yiyu/": [
    {
      text: "生活随笔",
      items: [],
    },
  ],

  "/content/qilu/": [
    {
      text: "Bug/填坑",
      items: [],
    },
  ],

  "/content/shiyi/": [
    {
      text: "收藏",
      items: [{ text: "重要文章", link: "/content/shiyi/important/" }],
    },
  ],

  "/content/mohen/": [
    {
      text: "标签",
      items: [],
    },
  ],
};
