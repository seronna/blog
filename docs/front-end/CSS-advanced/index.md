## @规则

at-rule: @规则、@语句、CSS语句

- import，写法 @import “路径” 导入另外一个css文件
- charset “utf-8” 告诉该游览器使用的字符编码集（必须写到第一行）


## web字体和图标

### web字体
解决用户电脑上没有安装相应字体的问题，强制让用户下载该字体

使用@font-face指令制作一个字体

### 字体图标
网站：www.iconfont.cn


## 块级格式化上下文（BFC）
它是一块**独立的渲染区域**，它规定了在该区域中，常规流块盒的布局
- 常规流块盒在水平方向上，必须撑满包含块
- 常规流块盒在包含块的垂直方向上依次摆放
- 常规流块盒若外边距无缝相邻，则进行外边距合并
- 常规流块盒的自动高度和摆放位置，无视浮动元素

BFC渲染区域：这个区域有某个HTML元素创建，以下元素会在其内部创建BFC区域
1. 根元素
2. 浮动和绝对定位元素
3. overflow不等于visible的块盒

![](./image.png)

不同的BFC区域，它们进行渲染时互不干扰

创建BFC的元素，隔绝了它内部和外部的联系，内部的渲染不会影响到外部
具体规则
- 创建BFC的元素，它的自动高度需要计算浮动元素
在以下图片中container容器的背景颜色未显示出来，是因为高度塌陷了，在以前的写法中可以使用clearfix来消除，
现在则可以使用以下方法
1. 创建绝对定位（position： absolute）（不推荐）
2. 使用浮动：float：left（不推荐）
3. 副作用最小的方式使用 overflow：hidden （最推荐，只要不是visiable就行）
::: info 提示
如果仅仅是解决高度坍塌，还是推荐以前的方法，这里只是介绍一个可用的方法
:::   
![](./bfc-text1.png)
- 创建BFC的元素，它的边框盒不会与浮动元素重叠

在以下代码中表明常规流元素在摆放时看不见浮动的元素，如果要设置左边和右边的边距要设置左边的margin-right才有效，设置右边的margin-left无效。**此方法可以用于左边固定，右边自动适应的场景**
![](./bfc-text2.png)
- 创建BFC的元素，不会和它的子元素进行外边距合并（处在不同bfc的元素，它们的外边距不会合并）

以下代码中的container容器和child子元素，它们的外边距就合并了
```html
<style>
      .container {
        background: #008c8c;
        height: 500px;
        margin-top: 30px;
        /* overflow: hidden; */
      }
      .child {
        height: 100px;
        margin: 50px;
        background: red;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="child"></div>
    </div>
  </body>
</html>
```
![](./bfc-text3.png)