## 语义化

### 开始

属性的分类：全局属性、局部属性
空元素： 没有结束标记

### 元素的嵌套

元素不能相互嵌套
父元素 子元素 兄弟元素 祖先元素 后代元素

### 标准的文档结构

HTML：页面、 文档

```html
<!DOCTYPE html>
```

文档声明，告诉浏览器，当前文档使用的 HTML 标准是 HTML5
不写文档声明会导致游览器进入怪异渲染模式

```html
<html lang="en"></html>
```

根元素 html (可以不写)

### 什么是语义化

1. 每一个 HTML 元素都有具体的含义
   a 元素：超链接
   p 元素：段落
2. 所有元素与展示效果无关
   元素展示到页面的效果由 CSS 决定

- **重要：选择什么元素 取决于内容的含义，而不是显示出的效果**

### 为什么需要语义化

1. 为了搜索引擎优化（SEO）
2. 为了让游览器理解网页。（阅读模式、语音模式）

## 文本元素

### 文本元素

HTML5 中支持的元素：HTML 元素周期表

### h

h1-h6:表示一级标题到六级标题

### p

> lorem 乱数假文
> 快捷键： p\*6>lorem1 快速生成 6 个段落

### span（无语义）

> 用于包裹文字，没有语义，一般用于包裹文字，设置文字的样式
> 以前：某些元素会独占一行，比如 p、h1-h6、div 等（块级元素） 某些元素不会独占一行，比如 span、a 等（行级元素）
> HTML5 已经弃用这种说法 （W3C 官方说的）

### pre

预格式化文本元素
空白折叠： 在源代码中连续空格字符（空格 换行、制表）在页面显示时，会折叠为一个空格
例外：在 pre 元素中，会按照源代码中的格式显示，不会折叠空格

pre 元素的本质：它有一个默认的 CSS 样式

```css
pre {
  white-space: pre-wrap;
}
```

> 显示代码时，通常外面套一个 code 元素再在里面加 pre 或者给 code 直接加一个属性

## HTML Entity

实体字符：用来表示特殊字符的字符

实体字符通常在页面中显示一些特殊符号

1. &单词;
2. &#数字;

- 空格：&nbsp;
- 大于号：&gt;
- 小于号：&lt;
- 引号：&quot;
- 撇号：&apos;
- 与符号：&amp;
- 版权符号：&copy;
- 注册符号：&reg;
- 商标符号：&trade;
- 欧元符号：&euro;
- 英镑符号：&pound;
- 美元符号：&dollar;
- 分符号：&cent;
- yen 符号：&yen;
- 版权符号：&copy;
- &符号本身：&amp;

## a 元素

### href 属性

hyper reference(引用)

1. 普通链接（跳转地址）
2. 锚链接（跳转到某个锚点）

```html
<a href="#chapter1">这是一个链接</a>
<a href="#chapter2">这是一个链接</a>

<h2 id="chapter1">章节1</h2>
<p>这是章节1的内容</p>

<h2 id="chapter2">章节2</h2>
<p>这是章节2的内容</p>
```

3. 功能性链接

- 点击后，触发某个功能
- 发送邮件 (要求用户计算机安装有邮件发送软件如 exchange)
- 拨号

```html
<a href="javascript:alert('hello world')">这是一个链接</a>
<a href="mailto:123@qq.com">这是一个链接</a>
<a href="tel:13800000000">这是一个链接</a>
```

> 快捷键： ((h2>{章节&i})+p>lorem)*2
> 快捷键： a[href="chapter$"]*6

### target 属性

- \_self：在当前窗口打开（默认）
- \_blank：在新窗口打开

## 路径的写法

### 站内资源和站外资源

站内资源：当前站点下的资源
站外资源：非当前站点下的资源

### 绝对路径和相对路径

绝对路径：从根目录开始的路径
相对路径：从当前文件所在目录开始的路径

站外资源： 绝对路径
站内资源： 相对路径

```
协议名://主机名:端口号/路径
```

协议名: http、https、ftp、file
端口号: 如果协议是 http 或 https，端口号默认是 80 或 443

2. 相对路径
   以 ./ 开头的路径：当前目录
   以 ../ 开头的路径：上一级目录
   以 / 开头的路径：根目录

## 图片元素

### img 元素

image 缩写

src 属性，source

alt 属性，当图片资源失效时，将使用该属性的问题替代图片

## 和 a 元素 结合使用

### 和 map 元素

点击图片的不同区域，跳转到不同的链接

```html
<a>
  <img usemap="#solarMap" src="" />
</a>
<map name="solarMap">
  <area
    shape="circle"
    coords="360,204,48"
    href="https://www.baidu.com"
    target="blank"
  />
  <area
    shape="rect"
    coords="200,100,300,200"
    href="https://www.baidu.com"
    target="blank"
  />
  <area
    shape="poly"
    coords="100,100,200,100,200,200"
    href="https://www.baidu.com"
    target="blank"
  />
</map>
```

```html
<div style="position: relative;height: 500px;">
<iframe style="position: absolute; width: 100%; height: 500px; left: 0; top: 0;" src="https://leetcode.cn/problems/insert-into-a-sorted-circular-linked-list/" frameborder="1" scrolling="yes"</iframe>
</div>
```

### figure 元素

指代 定义,通常用于把图片、图片标题、图片描述等内容包裹起来
子元素：figcaption

```html
<figure>
  <a>
    <img usemap="#solarMap" src="" />
  </a>
  <figcaption>
    <h2>图片标题</h2>
  </figcaption>
  <p>图片描述</p>
</figure>
```

## 多媒体元素

### video 视频

视频元素，用于嵌入视频内容

视频元素的属性 
- src：视频文件的路径 
- controls：显示视频的控制条(取值只能为 controls) 
- autoplay：视频加载完成后自动播放 
- loop：视频播放完成后循环播放 
- muted：视频加载完成后静音播放 
- poster：视频加载完成前显示的图片
::: tip 说明
某些只有两种状态 1.不写 2.取值为属性名，这种属性叫布尔属性
:::

```html
<video src="" controls autoplay loop muted poster=""></video>
```

### audio 音频

音频元素，用于嵌入音频内容

音频元素的属性：
- src：音频文件的路径
- controls：显示音频的控制条

```html
<audio src="" controls></audio>
```

### 兼容性

1. 旧版本的游览器不支持这两个元素
2. 不同的游览器支持的音视频格式可能不一致

```html
<video controls>
  <source src="" type="video/mp4" />
  <source src="" type="video/ogg" />
  <source src="" type="video/webm" />
</video>
```

## 列表元素

### 有序列表

ol：ordered list
li： list item

属性：

- type：有序列表的类型
  - 1：数字
  - A：大写字母
  - a：小写字母
  - I：大写罗马数字
  - i：小写罗马数字
- reversed：是否倒序
  > 必要情况下，才需要设置 type 属性，大部分情况使用 css 中的 list-style-type 来设置

```html
<ol type="1">
  <li>有序列表1</li>
  <li>有序列表2</li>
  <li>有序列表3</li>
</ol>
```

### 无序列表

常用于制作菜单 、目录等
ul：unordered list
li： list item

```html
<ul>
  <li>无序列表1</li>
  <li>无序列表2</li>
  <li>无序列表3</li>
</ul>
```

## 定义列表

通常用于一些术语的定义
dl：definition list
dt：definition title
dd：definition description

```html
<dl>
  <dt>定义列表1</dt>
  <dd>定义列表1的描述</dd>
  <dt>定义列表2</dt>
  <dd>定义列表2的描述</dd>
  <dt>定义列表3</dt>
  <dd>定义列表3的描述</dd>
</dl>
```

## 容器元素

容器元素：该元素代表一块区域，内部用于放置其他元素

### div 元素

div：division 的缩写，用于划分区域（没有语义）

### 语义化容器元素

- header 头部
- nav 导航
- main 主要内容
- article 文章
- section 章节
- aside 侧边栏
- footer 页脚，也可以表示文章的尾部

## 元素包含关系

以前： 块级元素可以包含行级元素，行级元素不能包含块级元素，a 元素除外

元素的包含关系由元素的内容类别决定。

例如，查看 h1 元素中是否可以包含 p 元素
mdn 中找到元素的短语内容

总结：

1. 容器元素中可以包含任何元素
2. a 元素中几乎可以包含任何元素
3. 某些元素有固定的子元素（ul>li,ol>li,dl>dt+dd）
4. 标题元素和段落元素不能相互嵌套，不能包含容器元素