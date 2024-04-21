// https://vitepress.dev/guide/custom-theme
import {h} from 'vue'
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
// @ts-ignore
import Comment from "./Comment.vue";
// @ts-ignore
import siteList from "./components/siteList.vue";
import './style/index.css'

// 导航配置
import {useData} from 'vitepress'
// @ts-ignore
import NavLink from './components/NavLink.vue'
// @ts-ignore
import NavLinks from './components/NavLinks.vue'

export default {
    extends: DefaultTheme,
    Layout: () => {
        const props: Record<string, any> = {}
        // 获取 frontmatter
        const {frontmatter} = useData()

        /* 添加自定义 class */
        if (frontmatter.value?.layoutClass) {
            props.class = frontmatter.value.layoutClass
        }
        return h(DefaultTheme.Layout, props, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
            'doc-after': () => h(Comment), // 导入评论组件
        })
    },
    enhanceApp({app, router, siteData}) {
        app.component("SiteList", siteList)
        app.component("NavLink", NavLink)
        app.component("MNavLinks", NavLinks)
    }
} satisfies Theme
