/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },
  { text: '标签', link: '/content/mohen/' },
  { text: '图鉴', link: '/archive/' },
  { text: '导航', link: '/nav/' },
  {
    text: '学习笔记',
    items: [
      {
        text: '前端',
        link: '/content/zhaji/frontend/',
      },
      {
        text: '后端',
        link: '/content/zhaji/backend/',
      },
      {
        text: '设计模式',
        link: '/content/zhaji/design-patterns/',
      },
      {
        text: '文档搭建',
        link: '/content/zhaji/doc-build/',
      },
    ],
  },
  { text: 'Bug/填坑', link: '/content/qilu/' },
  { text: '记录', link: '/content/shiyi/' },
  { text: '剪影', link: '/about/' },
];
