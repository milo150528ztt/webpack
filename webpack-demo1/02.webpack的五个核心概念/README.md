# webpack的五个核心概念
1. Entry
   入口(Entry)指示webpack以哪个文件为入口起点开始打包，分析构建内部依赖图
   比如，工程中的main.js

2. Output
   输出(Output)指示webpack打包后的资源bundles输出到哪里去，以及如何命名。
   比如 dist文件夹

3. Loader
   Loader让webpack能够去处理非javascript文件(webpack自身只理解javascript)。比如把less文件转为css

4. Plugins
   插件(plugins)可以用于执行范围更广的任务，范围包括从打包优化和压缩，一直到重新定义环境中的变量等

5. Mode
   模式(Mode) 指示webpack使用相应模式的配置
   >模式
   >
   | 选项 | 描述 | 特点
   | --- | --- | ---
   | development  | 会将process.env.NODE-ENV的值设置为 development | 能让代码本地调试运行的环境 |
   | production  | 会将process.env.NODE-ENV的值设置为 production | 能让代码优化上线运行的环境 |

>生产环境production处理的问题：

   >问题1：webpack将css 编译到 js中为样式字符串,使js体积很大，页面加载速度变慢，再编译到html的style标签中，可能会出现闪屏的效果，体验差

   >问题2：代码压缩

   >问题3：兼容性