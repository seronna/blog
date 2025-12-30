/* configs/nav.ts */
import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.Config["nav"] = [
  { text: "原点", link: "/" },
  { text: "标签", link: "/content/mohen/" },
  { text: "导航", link: "/nav/" },
  { text: "图鉴", link: "/archive/" },
  {
    text: "札记",
    items: [
      {
        text: "前端",
        link: "/content/zhaji/frontend/",
      },
      {
        text: "后端",
        link: "/content/zhaji/backend/",
      },
      {
        text: "设计模式",
        link: "/content/zhaji/design-patterns/",
      },
      {
        text: "文档搭建",
        link: "/content/zhaji/doc-build/",
      },
    ],
  },
  { text: "歧路", link: "/content/qilu/" },
  { text: "拾遗", link: "/content/shiyi/" },
  { text: "剪影", link: "/about/" },
];
