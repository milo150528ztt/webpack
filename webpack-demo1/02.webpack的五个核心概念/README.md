# webpack的五个核心概念
1. Entry
   入口(Entry)指示webpack以哪个文件为入口起点开始打包，分析构建内部依赖图
   比如，工程中的main.js

2. Output
   输出(Output)指示webpack打包后的资源bundles输出到哪里去，以及如何命名。
   比如 dist文件夹

3. Loader
   Loader让webpack能够去处理非javascript文件(webpack自身不理解javascript)，比如把less文件转为css

4. Plugins
   插件(plugins)可以用于执行范围更广的任务，范围包括从打包优化和压缩，一直到重新定义环境中的变量等

5. Mode