---
tags: [JavaScript，执行机制，预编译]
date: 2025-12-25
title: 深入理解 JavaScript 执行机制：从预编译到 AO 对象
desc: 深入探讨 JavaScript 执行机制的核心原理，包括预编译、AO 对象等关键概念。
---

# 深入理解 JavaScript 执行机制：从预编译到 AO 对象
在前端面试或深入学习 JavaScript 时，我们经常遇到类似“变量提升”、“函数提升”以及复杂的 console.log 输出问题。要彻底搞懂这些，就必须深入 JavaScript 的底层执行机制。

本文将带你梳理 JS 的执行流程，并重点拆解函数预编译的四个核心步骤。

## 一、 JavaScript 的宏观执行流程
虽然 JavaScript 是一门解释型语言，但它并非一行一行“读完直接执行”，而是有一个“预处理”的过程。整体流程大致可以分为五个阶段：

- 词法分析 (Lexical Analysis)：将代码拆分成最小的语法单元（Token）。
- 语法分析 (Syntax Analysis)：检查代码是否符合语法规则。
- 语法树生成 (AST)：将代码转化为抽象语法树（Abstract Syntax Tree）。
- 代码生成 (预编译)：这是我们今天要讲的重点，包含了变量提升等操作。
- 代码执行：JS 引擎按照生成的指令开始逐行执行代码。

注意：我们常说的“预编译”主要发生在代码执行前的极短时间内。

## 二、 预编译的核心规则
在预编译阶段，JavaScript 引擎会遵循以下两条主要规则（俗称“提升”）：

变量提升：var 声明的变量会被提升到当前作用域的顶端，但只提升声明，**不提升赋值**。

函数提升：function 声明的函数会整体提升（包括函数体），且优先级高于变量提升。

## 三、 函数预编译的“四部曲”
当函数被调用，但代码尚未执行时，会创建一个执行期上下文（Execution Context）。为了管理这个上下文中的变量，引擎会创建一个活动对象（Activation Object，简称 AO）。

这个过程严格遵循以下四个步骤：

1. 创建 AO 对象
创建一个空的活动对象 AO = {}。

2. 找形参和变量声明
查找函数内部的形参和 var 变量声明。将变量名和形参名作为 AO 的属性名。**值为 undefined**。

3. 实参和形参相统一
将传递进来的实参值赋给 AO 中对应的形参属性。

4. 找函数声明
查找函数内部的 function 声明。将函数名作为 AO 的属性名。值为函数体。
> 关键点：这一步会覆盖之前步骤中可能存在的同名属性（如形参或变量声明）。

## 四、 实战演练：代码执行全过程拆解
让我们通过一段经典的代码来验证上述理论：
```JavaScript
function fn(a) {
    console.log(a); // 第 1 处打印
    var a = 123;
    console.log(a); // 第 2 处打印

    function a(){}
    console.log(a); // 第 3 处打印

    var b = function(){}
    console.log(b); // 第 4 处打印
    function d(){}
}
fn(1);
```


第一阶段：预编译（生成 AO）如果是全局的话就是GO、它也等于window
按照“四部曲”一步步来：

Step 1: 创建 AO

```JavaScript
AO {

}
```

Step 2: 找形参和变量声明 这里有形参 a，变量声明 var a 和 var b。
```JavaScript
AO {
    a: undefined,
    b: undefined
    // d 是函数声明，这一步先不管
}
```

Step 3: 实参和形参相统一 外部调用 fn(1)，所以 a 被赋值为 1。
```JavaScript
AO {
    a: 1,
    b: undefined
}
```


Step 4: 找函数声明 这里有 function a(){} 和 function d(){}。
d 放入 AO。
a 也放入 AO，直接覆盖了之前的值（也就是覆盖了 1）。

```JavaScript
AO {
    a: function a(){},
    b: undefined,
    d: function d(){}
}
```
预编译结束，AO 对象定格在此状态，准备开始执行代码。


第二阶段：代码逐行执行
现在，JS 引擎带着上面的 AO 对象开始从上到下执行代码：

执行 console.log(a)，去 AO 里找 a。此时 AO.a 是 function a(){}。输出：function a(){}

执行 var a = 123;这是一个赋值操作。AO.a 从函数体被修改为 123。此时 AO 变为：{ a: 123, ... }

执行 console.log(a)读取 AO.a。输出：123

执行 function a(){}
这行代码在预编译阶段已经被提取处理过了，执行阶段直接跳过。

执行 console.log(a)，AO.a 依然是 123。输出：123

执行 var b = function(){}这是一个函数表达式赋值。AO.b 从 undefined 被赋值为 function(){}。

执行 console.log(b)读取 AO.b。输出：function(){}执行 function d(){}函数声明，预编译已处理，跳过。


## 其他题目
题目1：
```javascript
function bar(){
    return foo;
    foo = 10;
    function foo(){}
    var foo = 11;
}
console.log(bar());
```

题目2:
```javascript
console.log(bar());
function bar(){
    foo = 10;
    function foo(){}
    var foo = 1
    return foo;
}
console.log(bar());
```

题目3
```javascript
a = 100;
fuction demo(e){
    function e(){}
    arguments[0] = 2;
    console.log(e);
    if(a){
        var b = 123;
        function c(){} // 现在function不能写在if里面了，这里只做演示
    }
    var c;
    a = 10;
    var a;
    console.log(b);
    f = 123;
    console.lgo(c)
    console.log(a);
}
var a;
demo(1)
console.log(a);
console.log(f);
```


## 总结
通过这个过程，我们可以清晰地看到 JavaScript 是如何在混乱的代码中建立秩序的。记住这个简单的口诀来应对面试中的 AO 问题：
“建对象，找变量，传实参，提函数”
理解了 AO（活动对象）的演变过程，你就理解了 JavaScript 作用域和闭包的基石。

