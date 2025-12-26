# 前端面试题 - JavaScript 基础

这里是一些基础题目的练习。

<QuizSplit>
  <template #question>

### 题目 1：闭包输出
请问以下代码输出什么？为什么？

```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```
</template>
<template #answer>

### 答案 1：
输出五次 `5`。这是因为 `var` 声明的变量 `i
` 是函数作用域的，在循环结束后，`i` 的值变为 `5`。所有的 `setTimeout` 回调函数在执行时都会访问到同一个 `i`，此时它的值已经是 `5`。
</template>
</QuizSplit>