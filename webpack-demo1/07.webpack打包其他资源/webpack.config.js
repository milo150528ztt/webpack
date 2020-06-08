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
  mode: 'development'
}