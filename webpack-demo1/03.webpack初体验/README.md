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
6. node命令执行
   ```
    node ./build/build.js
    ```