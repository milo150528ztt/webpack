const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/build.js',
    path: resolve(__dirname, 'build') 
  },
  module: {
    rules: [
      {
        // 处理css
        test: /\.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader']
      }
    ]
  },
  plugins: [
    // 插件配置
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // 对输出的css文件进行重命名
      filename: 'css/build.css'
    })
  ],
  mode: 'development'
};