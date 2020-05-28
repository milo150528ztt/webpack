# webpack初体验
1. npm 初始化包描述文件,通过npm init生成package.json文件
```
npm init
```
2. 全局安装webpack和webpack-cli,webpack-cli作用是可以用webpack指令使用webpack内部的功能， 全局安装会替换到旧版
   ```
  npm i webpack webpack-cli -g
  ```
3. 本地安装，将webpack添加到package.json中的开发依赖， -D 是安装开发依赖
  ```
  npm i webpack webpack-cli -D
  ```
4. 在工程中新建目录
   src -- 源代码目录
   build -- 通过webpack打包生成文件的输出目录
   index.js -- webpack打包的入口起点文件
5. 通过命令开始打包
  开发环境
    ```
    webpack ./src/index.js -o ./build/build.js --mode=development
    ```
  生产环境
    ```
    webpack ./src/index.js -o ./build/build.js --mode=production
    ```
6. 运行项目
  6.1 node命令运行项目
   ```
    node ./build/build.js
   ```
  6.2 在build文件夹下创建index.html,并引入build.js文件，<script src="./build.js"></script>， 直接在浏览器打开index.html文件
7. webpack可以打包js 、 json文件，不可以打包css 、img 等文件，在src下新建一个.json文件
  在src下新建一个data.json文件，index.js中用ES6引入json模块，webpack可以打包json文件

8. 结论：
   a. webpack可以处理js/json资源，不能处理css/img等其他资源
   b. 生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化
   b. 生产环境比开发环境多一个压缩js代码