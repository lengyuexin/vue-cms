import Vue from 'vue' // 导入Vue
import VueRouter from 'vue-router' // vue-router
Vue.use(VueRouter) // 挂载vue-router
import VueX from 'vuex' // vuex
Vue.use(VueX) // 挂载vuex
import vueResource from 'vue-resource' // 导入vue-resource
Vue.use(vueResource) // 挂载vue-resource
import VuePreview from 'vue-preview' // 导入vue-preview
Vue.use(VuePreview) // 挂载vue-preview
import './lib/mui/css/mui.min.css' //导入全部MUI的样式
import './lib/mui/css/icons-extra.css' // 导入扩展图标样式
import MintUI from 'mint-ui' // 导入全部 Mint-UI 中的组件 
import 'mint-ui/lib/style.css' // 导入mint-ui样式
Vue.use(MintUI); // 挂载Mint-UI 中的组件
import 'mint-ui/lib/style.css' // 导入Vue
import app from './App.vue' // 导入app.vue
// 定义全局时间过滤器
Vue.filter('dataFormat', (data) => { return data.toLocaleString(); })
import router from './router.js' //导入路由


//从本地存储获取购物车
let cartList = JSON.parse(localStorage.getItem('cartList') || '[]')

const store = new VueX.Store({
    state: {
        'cartList': cartList

    },
    mutations: {
        //加入购物车
        add_cart(state, product) {
            let isFind = false; // 假设在购物车中，没有找到对应的商品
            //购物车中有相同商品，数量累加
            state.cartList.some(item => {
                if (item.id === product.id) {
                    item.count += product.count
                    isFind = true;
                    return true; //终止查找
                }
            })
            if (!isFind) {
                // 没找到相同商品或购物车为空，直接添加商品进去
                state.cartList.push(product)
            }
            // 将购物车数据持久化到本地存储
            // localStorage.setItem('cartList', JSON.stringify(state.cartList))
            localStorage.setItem('cartList', JSON.stringify(state.cartList))
        },
        updateGoodsInfo(state, goodsinfo) {
            // 修改购物车中商品的数量值--同步徽标

            state.cartList.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            // 当修改完商品的数量，把最新的购物车数据，保存到 本地存储中
            localStorage.setItem('cartList', JSON.stringify(state.cartList))
        },
        removeFormCartList(state, id) {
            // 根据Id，从store 中的购物车中删除对应的那条商品数据
            state.cartList.some((item, i) => {
                if (item.id == id) {
                    state.cartList.splice(i, 1)
                    return true;
                }
            })
            // 将删除完毕后的，最新的购物车数据，同步到 本地存储中
            localStorage.setItem('cartList', JSON.stringify(state.cartList))
        },
        clear(state) {
               state.cartList.forEach((item, i) => {
             
                    state.cartList.splice(i, state.cartList.length)
               
            })
            // 将删除完毕后的，最新的购物车数据，同步到 本地存储中
            localStorage.setItem('cartList', JSON.stringify(state.cartList))
           
            window.location.href="http://127.0.0.1:3000/#/home/goodsList"
        },
        //更新购物开关状态
        updateGoodsSelected(state, info) {
            state.cartList.some(item => {
                if (item.id == info.id) {
                    item.selected = info.selected
                }
            })
            // 把最新的 所有购物车商品的状态保存到 store 中去
            localStorage.setItem('cartList', JSON.stringify(state.cartList))
        }

    },
    getters: {
        //获取购买商品的总数量--徽标显示
        getAllCounts(state) {
            let sum = 0;
            state.cartList.forEach(item => {
                sum += item.count;
            })
            return sum;
        },
        //获取购买数量--shopcar数据项input value初始化
        getGoodsCount(state) {
            var o = {}
            state.cartList.forEach(item => {
                o[item.id] = item.count
            })
            return o
        },
        //获取商品开关状态
        getGoodsSelected(state) {
            var o = {}
            state.cartList.forEach(item => {
                o[item.id] = item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state) {
            var o = {
                count: 0, // 勾选的数量
                amount: 0 // 勾选的总价
            }
            state.cartList.forEach(item => {
                if (item.selected) {
                    o.count += item.count
                    o.amount += Number(item.price.substr(1)) * item.count
                }
            })
            return o
        }

    }
})



























//实例化
let vm = new Vue({
    el: '#app',
    render: c => c(app), //挂载app
    router: router, //挂载路由表
    store //挂载状态管理对象
})