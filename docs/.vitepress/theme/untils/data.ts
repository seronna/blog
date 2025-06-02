// @ts-ignore
import type {NavData} from './types'

export const NAV_DATA: NavData[] = [
    {
        title: 'AI 导航',
        items: [
            {
                icon: '/public/openai.png',
                title: 'ChatGPT',
                link: 'https://chat.openai.com/chat'
            },
            {
                icon: 'https://chat.deepseek.com/deepseek-chat.jpeg',
                title: 'DeepSeek',
                link: 'https://chat.deepseek.com/'
            },
            {
                icon: '/icons/gemini.png',
                title: "Gemini",
                link: "https://gemini.google.com/app",
            },
            {
                icon: 'https://www.notion.so/images/logo-ios.png',
                title: 'Notion AI（笔记）',
                link: 'https://www.notion.so'
            },
            {
                icon: 'https://www.midjourney.com/apple-touch-icon.png',
                title: 'Midjourney（绘画）',
                link: 'https://www.midjourney.com'
            },
        ]
    },
    {
        title: 'Vue 生态',
        items: [
            {
                icon: 'https://cn.vuejs.org/logo.svg',
                title: 'Vue 3',
                desc: '渐进式 JavaScript 框架',
                link: 'https://cn.vuejs.org'
            },
            {
                icon: 'https://cn.vuejs.org/logo.svg',
                title: 'Vue 2',
                desc: '渐进式 JavaScript 框架',
                link: 'https://v2.cn.vuejs.org'
            },
            {
                icon: 'https://cn.vuejs.org/logo.svg',
                title: 'Vue Router',
                desc: 'Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由',
                link: 'https://router.vuejs.org/zh'
            },
            {
                icon: 'https://pinia.vuejs.org/logo.svg',
                title: 'Pinia',
                desc: '符合直觉的 Vue.js 状态管理库',
                link: 'https://pinia.vuejs.org/zh'
            },
            {
                icon: 'https://nuxt.com/icon.png',
                title: 'Nuxt.js',
                desc: '一个基于 Vue.js 的通用应用框架',
                link: 'https://nuxt.com'
            },
            {
                icon: 'https://vueuse.org/favicon.svg',
                title: 'VueUse',
                desc: 'Vue Composition API 的常用工具集',
                link: 'https://vueuse.org'
            },
            {
                icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
                title: 'Element Plus',
                desc: '基于 Vue 3，面向设计师和开发者的组件库',
                link: 'https://element-plus.org'
            },
            {
                icon: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
                title: 'Ant Design Vue',
                desc: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
                link: 'https://antdv.com'
            },
            {
                icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
                title: 'Vant',
                desc: '轻量、可定制的移动端 Vue 组件库',
                link: 'https://vant-ui.github.io/vant'
            },
            {
              icon:"https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/favicon.png",
              title: 'VChart',
              desc:'字节跳动开源的开箱即用的多端图表库',
              link: 'https://visactor.io/vchart'
            }
        ]
    },
    {
        title: '前端学习资料',
        items: [
            {
                icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
                title: 'MDN | Web 开发者指南',
                desc: 'Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资',
                link: 'https://developer.mozilla.org/zh-CN'
            },
            {
                icon: 'https://static.runoob.com/images/favicon.ico',
                title: '菜鸟教程',
                desc: '学的不仅是技术，更是梦想！',
                link: 'https://www.runoob.com'
            },
            {
                icon: '/icons/es6.svg',
                title: 'ES6 入门教程',
                desc: '阮一峰的网络日志',
                link: 'http://es6.ruanyifeng.com'
            }
        ]
    },
    {
        title: '社区',
        items: [
            {
                title: 'Github',
                icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>'
                },
                desc: '一个面向开源及私有软件项目的托管平台',
                link: 'https://github.com'
            },
            {
                icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
                title: 'Stack Overflow',
                desc: '全球最大的技术问答网站',
                link: 'https://stackoverflow.com'
            },
            {
                title: '稀土掘金',
                icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
                desc: '面向全球中文开发者的技术内容分享与交流平台',
                link: 'https://juejin.cn'
            },
            {
                title: '知乎',
                icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png',
                desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
                link: 'https://juejin.cn'
            }
        ]
    },
    {
        title:'运维',
        items:[
            {
                icon:'https://1panel.cn/img/favicon.png',
                title: '1Panel',
                desc:'新一代的 Linux 服务器运维管理面板',
                link: 'https://1panel.cn/'
            }
        ]
    },
   {
       title:'文档',
       items:[
       {
           icon:'https://saduck.top/favicon.png',
           title: 'saduck',
           desc:'一个免费的考公考编知识网站，包含行测、申论、公基、词语查询、行测助手、备考资料。',
           link: 'https://saduck.top/'
       },
       {
           title: 'nodejs文档',
           desc:'Node.js v22.13.0 文档',
           link: 'https://nodejs.cn/api/v22/'
       },
   ]
   },
   {
       title:'常用工具',
       items:[
           {
                  icon:'',
                  title:'Javascript Playground',
                  desc:'网页版在线 JavaScript 运行器，还提供前端学习教程，以实际演练的形式。',
                  link: 'https://playcode.io/'
           }
       ]
   }
]