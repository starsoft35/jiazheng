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

在`.vue`文件的`template`头部引入：

``` html
<Header title="全部服务" back="/first"></Header>
```

1. 参数 `title` 表示页面名称
2. 参数 `back` 表示点击返回的地址，默认3种情况：
   * 空，则默认上次浏览页面，等同于`history.go(-1)`
   * `hidden`，则隐藏返回按钮
   * 字符串，则跳转到对应地址，例如：`/ucenter`，返回到个人中心页面



## 分页菜单

在`.vue`文件的`template`头部引入：

```html
<Pagination :render="render" :param="pagination" :need-token="true" uri="/memberBill/list">
  	...
</Pagination>
```

* render: 表示渲染数据对象函数 ，实例如下：

  ```javascript
  render(response) {
    	# response表示分页请求返回的数据对象
    	for (var i in response.result.list) {
        	# pagination.content为列表数据存在的数组
      	this.pagination.content.push({
            	amount: response.result.list[i].bill,
            	label: response.result.list[i].title,
            	date: response.result.list[i].time
      	})
    	}
  }
  ```

* param: 表示分页数据集合，固定如下格式：

  ```javascript
  pagination: {
  	content: [],
  	page: 1, 
  	pageSize: 10
  }
  ```

* need-token: 表示该分页请求是否需要访问凭证（`access_token`），`true`表示需要凭证,`false`表示不需要凭证

* uri: 表示分页请求的地址