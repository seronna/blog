/* configs/nav.ts */
import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.Config["nav"] = [
  { text: "原点", link: "/" },
  { text: "墨痕", link: "/content/mohen/" },
  {
    text: "卷帙",
    items: [
      {
        text: "前端",
        link: "/content/juanzhi/frontend/",
      },
      {
        text: "后端",
        link: "/content/juanzhi/backend/",
      },
      {
        text: "设计模式",
        link: "/content/juanzhi/design-patterns/",
      },
    ],
  },
  { text: "呓语", link: "/content/yiyu/" },
  { text: "歧路", link: "/content/qilu/" },
  { text: "剪影", link: "/about/" },
  {
    text: "札记",
    items: [
      {
        text: "文档搭建",
        link: "/content/zhaji/doc-build/",
      },
    ],
  },
  { text: "拾遗", link: "/content/shiyi/" },
];
