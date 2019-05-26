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
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(MintUI);

import 'mint-ui/lib/style.css'



import app from './App.vue'

Vue.filter('dataFormat',(data)=>{
return data.toLocaleString();

})

import router from './router.js'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router:router
})

