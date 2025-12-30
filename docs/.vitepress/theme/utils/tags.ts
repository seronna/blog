// 此文件由脚本自动生成，请勿手动修改
// 生成时间：2025/12/30 23:38:25
// 标签文章数据
export interface Article {
  title: string;
  path: string;
  date: string;
  tags: string[];
  desc: string;
}

export interface TagData {
  tag: string;
  count: number;
  articles: Article[];
}

export const TAGS_DATA: TagData[] = [
  {
    "tag": "学习笔记",
    "count": 13,
    "articles": [
      {
        "title": "第01章_C语言入门",
        "path": "/content/zhaji/backend/c/",
        "date": "2025-12-30",
        "tags": [
          "C语言",
          "学习笔记"
        ],
        "desc": "- **人类语言**：是人与人之间用于沟通的一种方式。例如：中国人与中国人用普通话沟通。而中国人要和英国人交流，可以使用普通话或英语。"
      },
      {
        "title": "第02章_变量与进制",
        "path": "/content/zhaji/backend/c/第02章_变量与进制.md",
        "date": "2025-12-30",
        "tags": [
          "C语言",
          "学习笔记"
        ],
        "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
      },
      {
        "title": "第03章_运算符与流程控制",
        "path": "/content/zhaji/backend/c/第03章_运算符与流程控制.md",
        "date": "2025-12-30",
        "tags": [
          "C语言",
          "学习笔记"
        ],
        "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
      },
      {
        "title": "第05章_指针",
        "path": "/content/zhaji/backend/c/第05章_指针(重点).md",
        "date": "2025-12-30",
        "tags": [
          "C语言",
          "学习笔记"
        ],
        "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
      },
      {
        "title": "第06章_函数",
        "path": "/content/zhaji/backend/c/第06章_函数.md",
        "date": "2025-12-30",
        "tags": [
          "C语言",
          "学习笔记"
        ],
        "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
      },
      {
        "title": "第07章_结构体与共用体",
        "path": "/content/zhaji/backend/c/第07章_结构体与共用体.md",
        "date": "2025-12-30",
        "tags": [
          "C语言",
          "学习笔记"
        ],
        "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
      },
      {
        "title": "第08章_C语言常用函数",
        "path": "/content/zhaji/backend/c/第08章_C语言常用函数.md",
        "date": "2025-12-30",
        "tags": [
          "C语言",
          "学习笔记"
        ],
        "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
      },
      {
        "title": "第09章_文件操作",
        "path": "/content/zhaji/backend/c/第09章_文件操作.md",
        "date": "2025-12-30",
        "tags": [
          "C语言",
          "学习笔记"
        ],
        "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
      },
      {
        "title": "命令模式",
        "path": "/content/zhaji/design-patterns/command-patterns/",
        "date": "2025-12-30",
        "tags": [
          "设计模式",
          "学习笔记"
        ],
        "desc": "通过命令模式，我们可以将执行特定任务的对象与调用方法的对象解耦。 假设我们有一个在线食品配送平台。用户可以下单、跟踪和取消订单。"
      },
      {
        "title": "为网页添加样式",
        "path": "/content/zhaji/frontend/CSS/",
        "date": "2025-12-30",
        "tags": [
          "CSS",
          "学习笔记"
        ],
        "desc": "CSS 规则 = 选择器 + 声明块"
      },
      {
        "title": "@规则",
        "path": "/content/zhaji/frontend/CSS-advanced/",
        "date": "2025-12-30",
        "tags": [
          "CSS",
          "学习笔记"
        ],
        "desc": "at-rule: @规则、@语句、CSS语句"
      },
      {
        "title": "语义化",
        "path": "/content/zhaji/frontend/html/",
        "date": "2025-12-30",
        "tags": [
          "HTML",
          "学习笔记"
        ],
        "desc": "属性的分类：全局属性、局部属性 空元素： 没有结束标记"
      },
      {
        "title": "iframe 元素",
        "path": "/content/zhaji/frontend/html-advanced/",
        "date": "2025-12-30",
        "tags": [
          "HTML",
          "学习笔记"
        ],
        "desc": "通常用于在网页中嵌入另一个页面"
      }
    ]
  },
  {
    "tag": "杂记",
    "count": 12,
    "articles": [
      {
        "title": "后端技术",
        "path": "/content/zhaji/backend/",
        "date": "2025-12-30",
        "tags": [
          "杂记"
        ],
        "desc": "后端技术是指服务器端的开发技术，包括编程语言、框架、数据库等。"
      },
      {
        "title": "设计模式",
        "path": "/content/zhaji/design-patterns/",
        "date": "2025-12-30",
        "tags": [
          "杂记"
        ],
        "desc": "设计模式是解决软件设计中常见问题的可复用方案。"
      },
      {
        "title": "静态部署",
        "path": "/content/zhaji/doc-build/assets/",
        "date": "2025-12-30",
        "tags": [
          "杂记"
        ],
        "desc": "> 更新时间：2024-1-28"
      },
      {
        "title": "配置",
        "path": "/content/zhaji/doc-build/configuration/",
        "date": "2025-12-30",
        "tags": [
          "杂记"
        ],
        "desc": "> 更新时间：2024-1-28"
      },
      {
        "title": "Frontmatter",
        "path": "/content/zhaji/doc-build/frontmatter/",
        "date": "2025-12-30",
        "tags": [
          "杂记"
        ],
        "desc": "> 更新时间：2024-1-28"
      },
      {
        "title": "快速上手",
        "path": "/content/zhaji/doc-build/getting-started/",
        "date": "2025-12-30",
        "tags": [
          "杂记"
        ],
        "desc": "> 更新时间：2024-1-28"
      },
      {
        "title": "文档搭建",
        "path": "/content/zhaji/doc-build/",
        "date": "2025-12-30",
        "tags": [
          "杂记"
        ],
        "desc": "本部分记录了如何使用 VitePress 搭建和配置文档网站。"
      },
      {
        "title": "Markdown",
        "path": "/content/zhaji/doc-build/markdown/",
        "date": "2025-12-30",
        "tags": [
          "杂记"
        ],
        "desc": "VitePress 使用 markdown-it 作为解析器，并使用 Shiki 来突出显示语言语法"
      },
      {
        "title": "页面",
        "path": "/content/zhaji/doc-build/page/",
        "date": "2025-12-30",
        "tags": [
          "杂记"
        ],
        "desc": "> 更新时间：2024-3-26"
      },
      {
        "title": "前言",
        "path": "/content/zhaji/doc-build/preface/",
        "date": "2025-12-30",
        "tags": [
          "杂记"
        ],
        "desc": "> 更新时间：2024-1-28"
      },
      {
        "title": "JavaScript 学习笔记",
        "path": "/content/zhaji/frontend/JavaScript/",
        "date": "2025-12-30",
        "tags": [
          "杂记"
        ],
        "desc": ""
      },
      {
        "title": "1. HTML",
        "path": "/content/zhaji/frontend/",
        "date": "2025-12-30",
        "tags": [
          "杂记"
        ],
        "desc": ""
      }
    ]
  },
  {
    "tag": "C语言",
    "count": 8,
    "articles": [
      {
        "title": "第01章_C语言入门",
        "path": "/content/zhaji/backend/c/",
        "date": "2025-12-30",
        "tags": [
          "C语言",
          "学习笔记"
        ],
        "desc": "- **人类语言**：是人与人之间用于沟通的一种方式。例如：中国人与中国人用普通话沟通。而中国人要和英国人交流，可以使用普通话或英语。"
      },
      {
        "title": "第02章_变量与进制",
        "path": "/content/zhaji/backend/c/第02章_变量与进制.md",
        "date": "2025-12-30",
        "tags": [
          "C语言",
          "学习笔记"
        ],
        "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
      },
      {
        "title": "第03章_运算符与流程控制",
        "path": "/content/zhaji/backend/c/第03章_运算符与流程控制.md",
        "date": "2025-12-30",
        "tags": [
          "C语言",
          "学习笔记"
        ],
        "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
      },
      {
        "title": "第05章_指针",
        "path": "/content/zhaji/backend/c/第05章_指针(重点).md",
        "date": "2025-12-30",
        "tags": [
          "C语言",
          "学习笔记"
        ],
        "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
      },
      {
        "title": "第06章_函数",
        "path": "/content/zhaji/backend/c/第06章_函数.md",
        "date": "2025-12-30",
        "tags": [
          "C语言",
          "学习笔记"
        ],
        "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
      },
      {
        "title": "第07章_结构体与共用体",
        "path": "/content/zhaji/backend/c/第07章_结构体与共用体.md",
        "date": "2025-12-30",
        "tags": [
          "C语言",
          "学习笔记"
        ],
        "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
      },
      {
        "title": "第08章_C语言常用函数",
        "path": "/content/zhaji/backend/c/第08章_C语言常用函数.md",
        "date": "2025-12-30",
        "tags": [
          "C语言",
          "学习笔记"
        ],
        "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
      },
      {
        "title": "第09章_文件操作",
        "path": "/content/zhaji/backend/c/第09章_文件操作.md",
        "date": "2025-12-30",
        "tags": [
          "C语言",
          "学习笔记"
        ],
        "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
      }
    ]
  },
  {
    "tag": "CSS",
    "count": 2,
    "articles": [
      {
        "title": "为网页添加样式",
        "path": "/content/zhaji/frontend/CSS/",
        "date": "2025-12-30",
        "tags": [
          "CSS",
          "学习笔记"
        ],
        "desc": "CSS 规则 = 选择器 + 声明块"
      },
      {
        "title": "@规则",
        "path": "/content/zhaji/frontend/CSS-advanced/",
        "date": "2025-12-30",
        "tags": [
          "CSS",
          "学习笔记"
        ],
        "desc": "at-rule: @规则、@语句、CSS语句"
      }
    ]
  },
  {
    "tag": "HTML",
    "count": 2,
    "articles": [
      {
        "title": "语义化",
        "path": "/content/zhaji/frontend/html/",
        "date": "2025-12-30",
        "tags": [
          "HTML",
          "学习笔记"
        ],
        "desc": "属性的分类：全局属性、局部属性 空元素： 没有结束标记"
      },
      {
        "title": "iframe 元素",
        "path": "/content/zhaji/frontend/html-advanced/",
        "date": "2025-12-30",
        "tags": [
          "HTML",
          "学习笔记"
        ],
        "desc": "通常用于在网页中嵌入另一个页面"
      }
    ]
  },
  {
    "tag": "设计模式",
    "count": 1,
    "articles": [
      {
        "title": "命令模式",
        "path": "/content/zhaji/design-patterns/command-patterns/",
        "date": "2025-12-30",
        "tags": [
          "设计模式",
          "学习笔记"
        ],
        "desc": "通过命令模式，我们可以将执行特定任务的对象与调用方法的对象解耦。 假设我们有一个在线食品配送平台。用户可以下单、跟踪和取消订单。"
      }
    ]
  },
  {
    "tag": "JavaScript",
    "count": 1,
    "articles": [
      {
        "title": "深入理解 JavaScript 执行机制：从预编译到 AO 对象",
        "path": "/content/shiyi/important/",
        "date": "2025-12-25",
        "tags": [
          "JavaScript",
          "执行机制",
          "预编译"
        ],
        "desc": "深入探讨 JavaScript 执行机制的核心原理，包括预编译、AO 对象等关键概念。"
      }
    ]
  },
  {
    "tag": "执行机制",
    "count": 1,
    "articles": [
      {
        "title": "深入理解 JavaScript 执行机制：从预编译到 AO 对象",
        "path": "/content/shiyi/important/",
        "date": "2025-12-25",
        "tags": [
          "JavaScript",
          "执行机制",
          "预编译"
        ],
        "desc": "深入探讨 JavaScript 执行机制的核心原理，包括预编译、AO 对象等关键概念。"
      }
    ]
  },
  {
    "tag": "预编译",
    "count": 1,
    "articles": [
      {
        "title": "深入理解 JavaScript 执行机制：从预编译到 AO 对象",
        "path": "/content/shiyi/important/",
        "date": "2025-12-25",
        "tags": [
          "JavaScript",
          "执行机制",
          "预编译"
        ],
        "desc": "深入探讨 JavaScript 执行机制的核心原理，包括预编译、AO 对象等关键概念。"
      }
    ]
  }
];

// 导出所有文章（已去重）
export const ALL_ARTICLES: Article[] = [
  {
    "title": "第01章_C语言入门",
    "path": "/content/zhaji/backend/c/",
    "date": "2025-12-30",
    "tags": [
      "C语言",
      "学习笔记"
    ],
    "desc": "- **人类语言**：是人与人之间用于沟通的一种方式。例如：中国人与中国人用普通话沟通。而中国人要和英国人交流，可以使用普通话或英语。"
  },
  {
    "title": "第02章_变量与进制",
    "path": "/content/zhaji/backend/c/第02章_变量与进制.md",
    "date": "2025-12-30",
    "tags": [
      "C语言",
      "学习笔记"
    ],
    "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
  },
  {
    "title": "第03章_运算符与流程控制",
    "path": "/content/zhaji/backend/c/第03章_运算符与流程控制.md",
    "date": "2025-12-30",
    "tags": [
      "C语言",
      "学习笔记"
    ],
    "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
  },
  {
    "title": "第05章_指针",
    "path": "/content/zhaji/backend/c/第05章_指针(重点).md",
    "date": "2025-12-30",
    "tags": [
      "C语言",
      "学习笔记"
    ],
    "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
  },
  {
    "title": "第06章_函数",
    "path": "/content/zhaji/backend/c/第06章_函数.md",
    "date": "2025-12-30",
    "tags": [
      "C语言",
      "学习笔记"
    ],
    "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
  },
  {
    "title": "第07章_结构体与共用体",
    "path": "/content/zhaji/backend/c/第07章_结构体与共用体.md",
    "date": "2025-12-30",
    "tags": [
      "C语言",
      "学习笔记"
    ],
    "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
  },
  {
    "title": "第08章_C语言常用函数",
    "path": "/content/zhaji/backend/c/第08章_C语言常用函数.md",
    "date": "2025-12-30",
    "tags": [
      "C语言",
      "学习笔记"
    ],
    "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
  },
  {
    "title": "第09章_文件操作",
    "path": "/content/zhaji/backend/c/第09章_文件操作.md",
    "date": "2025-12-30",
    "tags": [
      "C语言",
      "学习笔记"
    ],
    "desc": "讲师：尚硅谷-宋红康（江湖人称：康师傅）"
  },
  {
    "title": "后端技术",
    "path": "/content/zhaji/backend/",
    "date": "2025-12-30",
    "tags": [
      "杂记"
    ],
    "desc": "后端技术是指服务器端的开发技术，包括编程语言、框架、数据库等。"
  },
  {
    "title": "命令模式",
    "path": "/content/zhaji/design-patterns/command-patterns/",
    "date": "2025-12-30",
    "tags": [
      "设计模式",
      "学习笔记"
    ],
    "desc": "通过命令模式，我们可以将执行特定任务的对象与调用方法的对象解耦。 假设我们有一个在线食品配送平台。用户可以下单、跟踪和取消订单。"
  },
  {
    "title": "设计模式",
    "path": "/content/zhaji/design-patterns/",
    "date": "2025-12-30",
    "tags": [
      "杂记"
    ],
    "desc": "设计模式是解决软件设计中常见问题的可复用方案。"
  },
  {
    "title": "静态部署",
    "path": "/content/zhaji/doc-build/assets/",
    "date": "2025-12-30",
    "tags": [
      "杂记"
    ],
    "desc": "> 更新时间：2024-1-28"
  },
  {
    "title": "配置",
    "path": "/content/zhaji/doc-build/configuration/",
    "date": "2025-12-30",
    "tags": [
      "杂记"
    ],
    "desc": "> 更新时间：2024-1-28"
  },
  {
    "title": "Frontmatter",
    "path": "/content/zhaji/doc-build/frontmatter/",
    "date": "2025-12-30",
    "tags": [
      "杂记"
    ],
    "desc": "> 更新时间：2024-1-28"
  },
  {
    "title": "快速上手",
    "path": "/content/zhaji/doc-build/getting-started/",
    "date": "2025-12-30",
    "tags": [
      "杂记"
    ],
    "desc": "> 更新时间：2024-1-28"
  },
  {
    "title": "文档搭建",
    "path": "/content/zhaji/doc-build/",
    "date": "2025-12-30",
    "tags": [
      "杂记"
    ],
    "desc": "本部分记录了如何使用 VitePress 搭建和配置文档网站。"
  },
  {
    "title": "Markdown",
    "path": "/content/zhaji/doc-build/markdown/",
    "date": "2025-12-30",
    "tags": [
      "杂记"
    ],
    "desc": "VitePress 使用 markdown-it 作为解析器，并使用 Shiki 来突出显示语言语法"
  },
  {
    "title": "页面",
    "path": "/content/zhaji/doc-build/page/",
    "date": "2025-12-30",
    "tags": [
      "杂记"
    ],
    "desc": "> 更新时间：2024-3-26"
  },
  {
    "title": "前言",
    "path": "/content/zhaji/doc-build/preface/",
    "date": "2025-12-30",
    "tags": [
      "杂记"
    ],
    "desc": "> 更新时间：2024-1-28"
  },
  {
    "title": "为网页添加样式",
    "path": "/content/zhaji/frontend/CSS/",
    "date": "2025-12-30",
    "tags": [
      "CSS",
      "学习笔记"
    ],
    "desc": "CSS 规则 = 选择器 + 声明块"
  },
  {
    "title": "@规则",
    "path": "/content/zhaji/frontend/CSS-advanced/",
    "date": "2025-12-30",
    "tags": [
      "CSS",
      "学习笔记"
    ],
    "desc": "at-rule: @规则、@语句、CSS语句"
  },
  {
    "title": "JavaScript 学习笔记",
    "path": "/content/zhaji/frontend/JavaScript/",
    "date": "2025-12-30",
    "tags": [
      "杂记"
    ],
    "desc": ""
  },
  {
    "title": "语义化",
    "path": "/content/zhaji/frontend/html/",
    "date": "2025-12-30",
    "tags": [
      "HTML",
      "学习笔记"
    ],
    "desc": "属性的分类：全局属性、局部属性 空元素： 没有结束标记"
  },
  {
    "title": "iframe 元素",
    "path": "/content/zhaji/frontend/html-advanced/",
    "date": "2025-12-30",
    "tags": [
      "HTML",
      "学习笔记"
    ],
    "desc": "通常用于在网页中嵌入另一个页面"
  },
  {
    "title": "1. HTML",
    "path": "/content/zhaji/frontend/",
    "date": "2025-12-30",
    "tags": [
      "杂记"
    ],
    "desc": ""
  },
  {
    "title": "深入理解 JavaScript 执行机制：从预编译到 AO 对象",
    "path": "/content/shiyi/important/",
    "date": "2025-12-25",
    "tags": [
      "JavaScript",
      "执行机制",
      "预编译"
    ],
    "desc": "深入探讨 JavaScript 执行机制的核心原理，包括预编译、AO 对象等关键概念。"
  }
];
