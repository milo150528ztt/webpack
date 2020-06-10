# webpack提取css成单独文件
>css被css-loader编译到js中，会导致js体积变大,js中的样式字符串被style-loader编译到html的style标签中,可能会出现闪屏

>提取css成单独文件，html中用link标签引入
1. 下载插件
```
npm i mini-css-extract-plugin -D
```
2. 在webpack.config.js中引入mini-css-extract-plugin，并在plugins中new, 还可以对输出的css重命名
3. 修改处理css资源的loader配置，将style-loader修改为 MiniCssExtractPlugin.loader
   ```
    {
        // 处理css
        test: /\.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader']
      }
   ```