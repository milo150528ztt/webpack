# webpack开发环境配置
1. webpack.config.js中配置loader、plugin、devServer
2. 在src下分目录
3. 打包输出目录配置:
   ##### 3.1 在相应的loader中的options属性中配置,
      比如：图片打包到imgs，在处理图片资源的loader中配置：outputPath: 'imgs'
   ##### 3.2 build.js输出到js文件夹下, 修改output的filename
      ```
        output: {
          filename: 'js/build.js',
          path: resolve(__dirname, 'build')
        },
      ```
4. 运行命令
   有输出的运行
   ```
    webpack
   ```
   或者本地无输出的运行命令
   ```
    npx webpack-dev-server
   ```