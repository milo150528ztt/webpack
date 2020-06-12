const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 设置node环境变量: 
process.env.NODE_ENV = 'development';

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
          'css-loader',
          /*
           * // CSS兼容性处理
            // 使用loader的默认配置
             'postcss-loader',
            // postcss-preset-env 通过package.json中browserslist配置去加载指定的css兼容性样式
           "browserslist": {
                // 若要使用开发环境,需要设置node环境变量: process.env.NODE_ENV = development
              "development": [
                "last 1 chrome version",
                "last 1 firefox version",
                "last 1 safari version"
              ],
              // 默认是生产环境
              "production": [
                ">0.2%",
                "not dead",
                "not op_mini all"
              ]
            } 
           */
        // 修改loader的配置
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => {
                // postcss的插件
                require('postcss-preset-env')()
              }
            }
          }
        ]
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