## webpack打包除css less html js 图片以外的其他资源
1. 比如字体图标
   可以先从 https://www.iconfont.cn 中下载字体代码
2. 在html中使用
   ```
   <span class="iconfont icon-icon-test"></span>
   ```
3. loader中其他资源的打包配置,用file-loader
 ```
  exclude: /\.(css|js|html)$/
 ```
