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
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        // 打包其他资源 (除了css|js|html以外的其他资源)
        // exclude 打包排除哪些资源
        exclude: /\.(css|js|html)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    // 打包html资源
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  // 开发服务器devServer,用来自动化(自动编译、自动打开浏览器、自动刷新浏览器)
  // 只会在内存中编译打包 不会有任何输出
  devServer: {
    // 项目构建后路径
    contentBase: resolve(__dirname ,'build'),
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 3000,
    // 自动打开浏览器
    open: true
  }
}