// loader 1.下载 2.使用(配置loader使用)
// plugins 1.下载 2.引入 3.使用
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // loader的配置
    ]
  },
  plugins: [
    // plugin配置 html-webpack-plugin插件
    // new HtmlWebpackPlugin() 功能:默认会创建一个空的html文件,并自动引入打包输出的所有资源(JS/CSS)
    // 如果需要有结构的html文件
    new HtmlWebpackPlugin({
      // 复制./src/index.html文件，并自动引入打包输出的所有资源(JS/CSS)
      template: './src/index.html'
    })
  ],
  mode: 'development'
}