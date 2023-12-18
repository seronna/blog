// https://vitepress.dev/guide/custom-theme
import {h} from 'vue'
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
// @ts-ignore
import Comment from "./Comment.vue";

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
            'doc-after': () => h(Comment), // 导入评论组件
        })
    },
    enhanceApp({app, router, siteData}) {
        // ...
    }
} satisfies Theme
