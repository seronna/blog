// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import Comment from "./Comment.vue";
import "./style/index.css";

// 游览量配置
import { inBrowser } from "vitepress";
import busuanzi from "busuanzi.pure.js";
import DataPanel from "./components/DataPanel.vue";

// 导航配置
import { useData } from "vitepress";
import NavLink from "./components/NavLink.vue";
import NavLinks from "./components/NavLinks.vue";

// Google分析
import googleAnalytics from "vitepress-plugin-google-analytics";

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {};
    // 获取 frontmatter
    const { frontmatter } = useData();

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }
    return h(DefaultTheme.Layout, props, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "doc-after": () => h(Comment), // 导入评论组件
    });
  },
  enhanceApp({ app, router, siteData }) {
    googleAnalytics({
      id: "G-9KTNT67SH4",
    });
    app.component("NavLink", NavLink);
    app.component("MNavLinks", NavLinks);
    // 添加网站访问量
    app.component("DataPanel", DataPanel);
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch();
      };
    }
  },
} satisfies Theme;
