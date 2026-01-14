import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import './style/index.css';
import Tags from './components/Tags.vue';
import TagsLayout from './components/TagsLayout.vue';

// 导航配置
import { useData } from 'vitepress';
import NavLink from './components/NavLink.vue';
import NavLinks from './components/NavLinks.vue';

// Google分析
// @ts-ignore
import googleAnalytics from 'vitepress-plugin-google-analytics';

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {};
    // 获取 frontmatter
    const { frontmatter } = useData();

    // 如果是自定义标签布局
    if (frontmatter.value?.layout === 'tags') {
      return h(TagsLayout);
    }

    // 添加自定义 class
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }

    // 渲染默认布局
    return h(DefaultTheme.Layout, props, {});
  },
  enhanceApp({ app, router, siteData }) {
    googleAnalytics({
      id: 'G-9KTNT67SH4',
    });
    app.component('NavLink', NavLink);
    app.component('MNavLinks', NavLinks);
    app.component('Tags', Tags);
    app.component('TagsLayout', TagsLayout);
  },
} satisfies Theme;
