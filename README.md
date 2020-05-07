# Small

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 安装插件
less安装：
1. 安装，npm install less less-loader@5.0.0 --save-dev
> 这里less-loader需要制定版本，不一定非要指定5.0.0，最新版本会报错误
2. 配置，build/webpack.base.config.js 的 rules 节点下新增（不增加也没有报错）
```
{
    test: /\.less$/,
    loader: 'style-loader!css-loader!less-loader'
}
```
font awesome 字体图标安装
1. 安装，npm install font-awesome -S
2. 配置，在main.js中全局引入 import 'font-awesome/css/font-awesome.min.css'



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
