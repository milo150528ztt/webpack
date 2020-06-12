# webpack-css兼容性处理

1. 下载插件
   > css兼容性处理需要用到postcss-loader
   > postcss-preset-env 可以使postcss识别不同的环境
   > postcss-preset-env 帮助postcss找到package.json中browserslist里面的配置,通过配置加载指定的css兼容性样式
```
npm i postcss-loader postcss-preset-env -D
```
2. browserslist在package.json中配置
   
   >可在github中搜索 browserslist 关键字, 查看配置信息 

3. postcss官网 
   >https://www.postcss.com.cn/