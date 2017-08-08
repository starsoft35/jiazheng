# 家政

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



## 底部菜单

在`.vue`文件的`template`底部引入：

``` html
<Menu actived="four"></Menu>
```

参数`actived`默认4个选项：

* first 第一个菜单
* second 第二个菜单
* third 第三个菜单
* four 第四个菜单



## 头部菜单

在`.vue`文件的`template`头部进入：

``` html
<Header title="全部服务" back="/first"></Header>
```

1. 参数 `title` 表示页面名称
2. 参数 `back` 表示点击返回的地址，默认3种情况：
   * 空，则默认上次浏览页面，等同于`history.go(-1)`
   * `hidden`，则隐藏返回按钮
   * 字符串，则跳转到对应地址，例如：`/ucenter`，返回到个人中心页面