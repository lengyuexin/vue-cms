import Vue from 'vue' // 导入Vue
import VueRouter from 'vue-router' // vue-router
Vue.use(VueRouter) // 挂载vue-router
import vueResource from 'vue-resource' // 导入vue-resource
Vue.use(vueResource) // 挂载vue-resource
import './lib/mui/css/mui.min.css' //导入全部MUI的样式
import './lib/mui/css/icons-extra.css' // 导入扩展图标样式
import MintUI from 'mint-ui' // 导入全部 Mint-UI 中的组件 
import 'mint-ui/lib/style.css' // 导入mint-ui样式
Vue.use(MintUI); // 挂载Mint-UI 中的组件
import 'mint-ui/lib/style.css' // 导入Vue
import app from './App.vue' // 导入app.vue
// 定义全局时间过滤器
Vue.filter('dataFormat', (data) => {return data.toLocaleString(); })
import router from './router.js' //导入路由
//实例化
let vm = new Vue({
    el: '#app',
    render: c => c(app), //挂载app
    router: router //挂载路由表
})