// webpack打包的入口起点js

/* 
  1. 运行指令
    开发环境 webpack ./src/index.js -o ./build/build.js --mode=development
        webpack会以 ./src/index.js 为起点开始打包,打包输出到 ./build/build.js，整体打包环境是开发环境

    生产环境 webpack ./src/index.js -o ./build/build.js --mode=production
        webpack会以 ./src/index.js 为起点开始打包,打包输出到 ./build/build.js，整体打包环境是生产环境
      打包后较开发环境不同的是 build.js 被压缩
*/
function add(x, y) {
  return x + y;
}

console.log(add(1,2));