# webpack打包样式资源
1. 新建webpack配置文件： webpack.config.js 
   作用：指示webpack做什么工作，当运行webpack指令时，会加载此配置文件中的配置

   所有构建工具都是基于node平台运行的，模块化采用commonjs模块
   src下的源码采用ES6模块化
   结合webpack的5个核心概念编写配置文件
2. webpack.config.js中配置了使用css-loader和style-loader,如果在当前目前中找不到包,会去上级目录中找
3. 因此，在最外层webpack-demo1目录下安装包
   安装包命令
   ```
   npm init
   npm i webpack webpack-cli -D
   npm i style-loader css-loader -D
   ```
   打包命令
   ```
   webpack
   ```
4. 在build文件夹下创建index.html，并引入./build.js， 在浏览器运行index.html
5. 不同的文件必须配置不同的loader处理，在src下创建index.less文件，
   less文件需要配置less-loader,css-loader,style-loader
   编译less文件需要下载包命令：
   ```
   npm i less less-loader -D
   ```