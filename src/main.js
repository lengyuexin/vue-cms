import Vue from 'vue'

 import VueRouter from 'vue-router'

Vue.use(VueRouter)


// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'


// 导入全部 Mint-UI 中的组件   
import mint from 'mint-ui'

Vue.use(mint)




import app from './App.vue'

//import router from './router.js'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  //router:router
})

// 注意： App 这个组件，是通过 VM 实例的 render 函数，渲染出来的， render 函数如果要渲染 组件， 渲染出来的组件，只能放到 el: '#app' 所指定的 元素中；
// Account 和 GoodsList 组件， 是通过 路由匹配监听到的，所以， 这两个组件，只能展示到 属于 路由的 <router-view></router-view> 中去；