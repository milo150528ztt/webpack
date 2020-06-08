## webpack devServer 配置
1. 本地开发不用总执行 webpack 命令打包
2. 在webpack.config.js中配置开发服务器devServer
3. 需要下载loader 安装 webpack-dev-server
   ```
   npm i webpack-dev-server -D
   ```
4. 启动devServer指令 webpack-dev-server只在本地安装 用npx
 ```
  npx webpack-dev-server
 ```
 用此命令启动不会在build中有输出，仅在内存中编译打包
