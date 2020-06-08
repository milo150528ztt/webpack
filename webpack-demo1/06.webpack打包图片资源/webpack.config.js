
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
        // 问题：处理不了html中img标签中的图片
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        // 使用一个用loader,用options配置参数
        // 下载 url-loader file-loader
        loader: 'url-loader',
        options: {
          // 图片大小小于8kb，会被转为base64处理
          // 优点: 减少请求数量,减轻服务器压力
          // 缺点：图片体积会更大(文件请求速度较慢)
          limit: 8 * 1024,
          // 处理html中的img标签的图片直接用html-loader打包时会报错,因为url-loader默认使用es6模块化解析,而html-loader引入图片是commonjs
          // 解析时会出现问题: [object Module]
          // 解决办法：关闭url-loader的commonjs模块化,使用es6来解析
          esModule: false,
          // 给图片进行重命名
          // [hash:10] 取hash值得前10位
          // [.ext]取文件原来扩展名
          name: '[hash:10].[ext]'
        }
      },
      {
        test: /\.html$/,
        // 处理html中img图片 (负责引入img 可以用url-loader处理)
        use: [ 'html-loader' ]
      }
    ]
  },
  plugins: [
    // 打包html资源
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
}