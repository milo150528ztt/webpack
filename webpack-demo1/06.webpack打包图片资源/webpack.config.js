
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: resolve(__dirname , 'build')
  },
  module: {
    rules: [
      {
        // test代表用正则表达式匹配哪些文件
        test: /\.css$/,
        // use代表使用哪些loader进行处理
        use: [
          // use数组中执行顺序：从右到左、从下到上一次执行
          // 创建style标签,将js中的样式资源插入进去，添加到head中生效
          'style-loader',
          // css-loader将css文件变成commonjs模块加载到js中,里面内容是样式字符串发
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        // 使用多个loader使用use数组
        use: ['style-loader','css-loader','less-loader']
      },
      {
        test: /\.(jpg|png|gif)$/,
        // 使用一个用loader,用options配置参数
        // 下载 url-loader file-loader
        loader: 'url-loader',
        options: {
          // 图片大小小于8kb，会被转为base64处理
          // 优点: 减少请求数量,减轻服务器压力
          // 缺点：图片体积会更大(文件请求速度较慢)
          limit: 8 * 1024
        }
      }
      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
}