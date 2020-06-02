/* 
webpack配置文件
*/
const { resolve } = require('path');
// commonjs模块暴露
module.exports = {
  // 入口起点
  entry: './src/index.js',
  output: {
    // 输出文件名
    filename: 'build.js',
    // 输出路径 (绝对路径避免出错),__dirname是nodejs的一个变量,代表当前文件的目录绝对路径
    path: resolve(__dirname , 'build')
  },
  // loader的配置
  // 不同文件必须配置不同loader处理
  module: {
    rules: [
      // 详细loader配置
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
        // 检测文件类型
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 将less文件编译成css文件
          // 需要下载less-loader和less两个包
          'less-loader'
        ]
      }
    ]
  },
  // plugins的配置
  plugins: [
    // 详细的plugins的配置
  ],
  // 模式
  mode: 'development' // 开发
  // mode: 'production' // 生产
} 
