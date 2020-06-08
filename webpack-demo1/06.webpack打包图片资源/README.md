# 在webpack.config.js中有说明打包图片需要的loader、图片转为base64设置、图片怎么重命名、html中的img怎么解析
## 1. 打包图片资源
loader: url-loader
下载 url-loader file-loader, 因为url-loader需要依赖file-loader
```
npm i url-loader file-loader -D
```
打包图片资源时,图片在css中引入可以直接用url-loader处理,但是html中的img标签就不能被处理
## 2. html中img标签中的图片处理需要下载 html-loader
   ```
   npm i html-loader -D
   ```
## 3. 打包
   ```
  webpack
   ```
  # 打包html中img标签的图片暂时有一个问题不知道怎么解决
 