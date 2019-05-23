 import VueRouter from 'vue-router'


 import home from './components/c_tabbar/Home.vue'
 import member from './components/c_tabbar/Member.vue'
 import shopcar from './components/c_tabbar/ShopCar.vue'
 import search from './components/c_tabbar/Search.vue'
 import newsList from './components/c_news/NewsList.vue'
 import newsInfo from './components/c_news/NewsInfo.vue'

// // 3. 创建路由对象
var router = new VueRouter({
  routes: [
    
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/member', component: member },
    { path: '/shopcar', component:shopcar },
    { path: '/search', component: search },
    { path: '/home/newsList', component: newsList },
    { path: '/home/newsInfo/:id', component: newsInfo }
  ],
  linkActiveClass:"mui-active"
})

// 把路由对象暴露出去
export default router