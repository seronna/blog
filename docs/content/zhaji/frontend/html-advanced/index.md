## iframe 元素
框架页

通常用于在网页中嵌入另一个页面

iframe 可替换元素

1. 通常行盒
2. 通常显示的内容取决于元素的属性
3. CSS不能完全控制其中的样式
4. 具有行快盒的特点


## 在页面中使用flash

使用object或者embed这两个元素

它们都是可替换元素

MIME（Multipurpose Internet Mail Extensions）多用途互联网邮件用途
比如，资源是一个jpg图片，MIME：image/jpeg
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>使用flash</title>
    <style>
      object {
        width: 500px;
        height: 400px;
      }
    </style>
  </head>
  <body>
    <!-- <object data="./example.swf" type="swf">
      <param name="quality" value="high" />
    </object> -->
    <!-- <embed src="./example.swf" type="application/x-shockwave-flash" /> -->

    <!-- 更兼容的写法 -->
    <object data="./example.swf" type="swf">
      <param name="quality" value="high" />
      <embed src="./example.swf" type="application/x-shockwave-flash" />
    </object>
  </body>
</html>

```

## 表单元素

一系列元素，主要用于收集用户数据

### input元素
输入框
- type属性：输入框类型
type: search,搜索框，有兼容性问题
type: range,滑块
type: checkbox
type: file 选择文件上传
- value属性：输入框的值
- placeholder：显示提示的文本

input元素可以制作按钮,当type值为reset、button、submit时


### select元素

下拉选择框
配合option元素使用

### textarea
多行文本框

### 按钮元素
button，默认submit
- type属性：按钮类型
type: submit 提交按钮
type: reset 重置按钮
type: button 普通按钮



## 配合表单元素的其他元素

### label
普通元素，通常配合单选和多选框使用，
- 显示关联
可以通过for属性，让label元素关联某一个表单元素，for属性书写表单元素ID的值
- 隐示关联
  直接将input元素写在label元素中

### datalist
数据列表
该元素本身不会显示到页面，通常用于和普通文本框配合
```html
请输入您常用的浏览器
      <input list="userAgent" type="text" />
      <datalist id="userAgent">
        <option value="chorme">谷歌</option>
        <option value="bing">bing游览器</option>
      </datalist>
```

### form元素

通常情况下将整个表单元素放置到form元素的内部，作用是当提交表单时，会将form元素内部的内容以合适的方式提交到服务器
form元素对静态页面无意义


### filedset 元素
表单分组

## 表单状态
readonly属性：只读
disabled属性: 是否禁用，会改变表单显示样式


## 美化表单元素

### 新的伪类

1. focus 元素聚焦时样式
2. checked 单选或多选被选中时的样式

### 常见用法
1. 重置表单元素样式
2. 设置textarea是否能调整尺寸
css属性
- both：默认值
- none
- horizontal
- vertical: 垂直方向可以调整尺寸
3. 文本框中文字到边缘的距离(使用 padding或者text-indent)
4. **控制单选和多选的样式**
> 思路：自己写一个元素仿照单选或者多选的样式然后将自带的样式隐藏
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      input {
        padding: 0 10px;
      }
      /* input {
        text-indent: 1rem;
      } */
      .radio {
        width: 12px;
        height: 12px;
        border: 1px solid #999;
        border-radius: 50%;
        cursor: pointer;
      }
      .radio.checked {
        border-color: red;
      }
      .radio.checked::after {
        content: "";
        display: block;
        width: 5px;
        height: 5px;
        background-color: black;
        margin-left: 3.5px;
        margin-top: 3.5px;
        border-radius: 50%;
      }

      .radio-item .radio {
        width: 12px;
        height: 12px;
        border: 1px solid #999;
        border-radius: 50%;
        cursor: pointer;
        display: inline-block;
      }
      .radio-item input:checked + .radio {
        border-color: aqua;
      }
      .radio-item input:checked ~ span {
        color: aquamarine;
      }
      .radio-item input:checked + .radio::after {
        content: "";
        display: block;
        width: 5px;
        height: 5px;
        background-color: black;
        margin-left: 3.5px;
        margin-top: 3.5px;
        border-radius: 50%;
      }
      .radio-item input[type="radio"] {
        display: none;
      }
    </style>
  </head>
  <body>
    <input type="text" name="" id="" />
    <input type="radio" name="" id="" />
    <input type="checkbox" name="" id="" />
    <div class="radio checked"></div>
    <p>
      请选择性别
      <label class="radio-item">
        <input name="gender" type="radio" />
        <span class="radio"></span>
        <span>男</span>
      </label>
      <label class="radio-item">
        <input name="gender" type="radio" />
        <span class="radio"></span>
        <span>女</span>
      </label>
    </p>
  </body>
</html>
```