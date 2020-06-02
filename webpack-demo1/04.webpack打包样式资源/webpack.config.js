/* 
webpack配置文件
*/
const { resolve } = require('path');
// commonjs模块暴露
module.exports = {
  entry: './src/index.js',
  output: {
    // 输出文件名
    filename: 'build.js',
    // 输出路径
    path: resolve(__dirname , 'build')
  },

} 
