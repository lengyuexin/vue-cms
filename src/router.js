 import VueRouter from 'vue-router' //导入vue-router
//c_tabbar组件系列
 import home from './components/c_tabbar/Home.vue'//导入Home.vue
 import member from './components/c_tabbar/Member.vue'//导入Member.vue
 import shopcar from './components/c_tabbar/ShopCar.vue'//导入ShopCar.vue
 import search from './components/c_tabbar/Search.vue'//导入Search.vue
//c_news组件系列
 import newsList from './components/c_news/NewsList.vue'//导入NewsList.vue
 import newsInfo from './components/c_news/NewsInfo.vue'//导入NewsInfo.vue
//c_photos组件系列
 import photoList from './components/c_photos/PhotoList.vue'//导入PhotoList.vue
//c_music组件系列
 import musicList from './components/c_music/MusicList.vue'//导入MusicList.vue
 import musicInfo from './components/c_music/MusicInfo.vue'//导入MusicInfo.vue
//c_goods组件系列
 import goodsList from './components/c_goods/GoodsList.vue'//导入GoodsList.vue
 import goodsInfo from './components/c_goods/GoodsInfo.vue'//导入GoodsInfo.vue


//创建路由对象
var router = new VueRouter({
  routes: [
    //建立路由匹配规则
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/member', component: member },
    { path: '/shopcar', component:shopcar },
    { path: '/search', component: search },
    { path: '/home/newsList', component: newsList },
    { path: '/home/newsInfo/:id', component: newsInfo },
    { path: '/home/photoList', component: photoList },
    { path: '/home/musicList', component: musicList },
    { path: '/home/musicInfo/:id', component: musicInfo },
    { path: '/home/goodsList', component: goodsList },
    { path: '/home/goodsInfo/:id', component: goodsInfo}
  ],
  linkActiveClass:"mui-active"//手动设置当前选中样式
})

// 把路由对象暴露出去
export default router