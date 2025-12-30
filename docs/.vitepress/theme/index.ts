import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import Comment from "./Comment.vue";
import "./style/index.css";
import Layout from "./components/Layout.vue";

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

    // 添加自定义 class
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }

    // 导入评论组件
    return h(Layout, props, {
      // 这里定义的 slot 会传递给你的 Layout.vue
      // 注意：你的 Layout.vue 内部需要处理这些 slot，否则评论组件不会显示
      "doc-after": () => h(Comment),
    });
  },
  enhanceApp({ app, router, siteData }) {
    googleAnalytics({
      id: "G-9KTNT67SH4",
    });
    app.component("NavLink", NavLink);
    app.component("MNavLinks", NavLinks);
  },
} satisfies Theme;
