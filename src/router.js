 import VueRouter from 'vue-router'


 import home from './components/c_tabbar/Home.vue'
 import member from './components/c_tabbar/Member.vue'
 import shopcar from './components/c_tabbar/ShopCar.vue'
 import search from './components/c_tabbar/Search.vue'
 import newsList from './components/c_news/NewsList.vue'
 import newsInfo from './components/c_news/NewsInfo.vue'
 import photoList from './components/c_photos/PhotoList.vue'
 import musicList from './components/c_music/MusicList.vue'
 import musicInfo from './components/c_music/MusicInfo.vue'
 import goodsList from './components/c_goods/GoodsList.vue'
 import goodsInfo from './components/c_goods/GoodsInfo.vue'


// // 3. 创建路由对象
var router = new VueRouter({
  routes: [
    
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
    { path: '/home/goodsInfo/:id', component: goodsInfo }

  ],
  linkActiveClass:"mui-active"
})

// 把路由对象暴露出去
export default router