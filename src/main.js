import Vue from 'vue'

 import VueRouter from 'vue-router'

Vue.use(VueRouter) 

import vueResource from 'vue-resource'

Vue.use(vueResource)


// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'


// 导入全部 Mint-UI 中的组件   
import {Header,Swipe,SwipeItem} from 'mint-ui'

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);




import app from './App.vue'

import router from './router.js'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router:router
})

