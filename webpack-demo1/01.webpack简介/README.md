# webpack 简介

1.在 index.html 中引入外部样式表 index.less 文件,浏览器打开页面时样式未生效

2.在 index.html 中引入 index.js,index.js 中 import jquery 模块(ES6语法)，
浏览器打开页面时控制台 SyntaxError 。
npm 命令安装 jquery 模块，在此工程目录下打开终端，执行：

```
  npm init
  npm i jquery
```
so,浏览器不支持less、ES6，需要利用构建工具将less转为css，将ES6转为js,webpack是构建工具的一种

### webpack概念
**webpack是一种前端资源构建工具，一个静态模块打包器(module bundler)**

**在webpack看来，前端的所有资源文件(js/json/css/img/less...)都会作为模块处理**

**它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源(bundle)**