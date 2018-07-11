# maijia

> Vue.js重构移动端有赞商城

## Build Setup

``` bash
# 下载依赖
npm install

# 启动项目
npm run dev
浏览器访问locahost:8080，使用手机模式预览。

# 压缩上传
npm run build
```

## 说明：

这是一个基于Vue.js的移动端有赞商城，数据接口使用RAP2接口平台，[点击预览](http://www.blackhu.site/Maijia/dist/index.html)

实现了网站首页、分类页、商品列表页、商品详情页、购物车、以及地址管理页的大部分功能，利用`axios`获取RAP2接口数据，使用`mint-ui`、`swiper`、`velocity-animate`插件实现下拉加载、轮播图、购物车左滑删除等功能，在地址管理页使用`Vue-Router`实现新增地址、修改地址的页面路由，使用`Vuex`管理地址管理的数据。


- 首页：
![首页](http://ozgiv5txv.bkt.clouddn.com/vueShopping1.gif)
抽离了底部导航组件，利用mint-ui插件的无限滚动组件实现下拉加载新数据，利用swiper插件实现了顶部轮播图组件并抽离出作为单独的组件。

- 分类
![分类](http://ozgiv5txv.bkt.clouddn.com/vueShopping2.gif)
使用了抽离的底部导航组件，通过Rap接口平台获取模拟数据，渲染至页面。点击综合排行中的热销商品会跳转至商品详情页，点击其他分类栏中的品牌会跳转至搜索页面，留意url的变化，通过url携带keyword和id。

- 详情
![详情](http://ozgiv5txv.bkt.clouddn.com/vueShopping3.gif)
头部使用了抽离的轮播组件，点击选择规格、加入购物车和立即购买实现相应的浮层效果，可对商品数量增减

- 购物车
![购物车](http://ozgiv5txv.bkt.clouddn.com/vueShopping4.gif)
1. 普通状态下，购物车商品的显示、店铺状态的显示、单商品选择状态、店铺选择状态、全选状态的切换。
2. 编辑状态下，只有编辑的店铺可编辑，对商品数量的增加减少，删除店铺内的商品，店铺内商品全部删除后，店铺也将删除。
3. 普通状态下向左滑动删除商品。

- 个人中心地址管理
![地址管理](http://ozgiv5txv.bkt.clouddn.com/vueShopping5.gif)
1. 利用Vue-Router配置路由，实现地址编辑新增页面的跳转。
2. Vuex分支实现使用Vuex管理地址的数据。