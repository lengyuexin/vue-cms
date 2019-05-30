<template>
    <div class="warp">
        <div class="mui-card" v-for="(item,i) in goodsList " :key="i">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"></mt-switch>
                    <img :src="item.url">
                    <div class="info">
                        <h3>{{item.title}}{{item.desc}}</h3>
                        <div style="display: flex;justify-content: space-between;"><span>{{item.price}}</span> <a href="#" @click.prevent="remove(item.id, i)">删除</a></div>
                        <snumbox :max="item.stock" :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></snumbox>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card" v-show="flag">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="orderBox">
                        <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}件</span>
                        <span class="red">总价：&yen;{{ $store.getters.getGoodsCountAndAmount.amount }}元</span>
                       
                        	<mt-button type="danger" size="small" @click="order">立刻结算</mt-button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import snumbox from '../../components/c_goods/Shop_numbox.vue'
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            goodsList: 	this.goodsList=this.$store.state.cartList,
            flag: true
        }
    },

    updated() {
        //控制结算区域的显示与否
        let tempArr = [];
        this.goodsList.forEach(item => {
            tempArr.push(item.selected)
        })
        let result = !tempArr.includes(true);
        result == true ? this.flag = false : this.flag = true
    },
    methods: {
        remove(id, index) {
            //index --删除当前组件的数据项
            this.$store.state.cartList.splice(index, 1)
            // id--删除vuex状态保存的数据项，也就是同步到本地存储的数据项
            this.$store.commit("removeFormCartList", id);
        },
        selectedChanged(id, val) {
            // 每当点击开关，把最新的 状态，同步到 store 中
            this.$store.commit("updateGoodsSelected", { id, selected: val });
        },
        order(){
        	Toast("假装交易成功")
        	// 清空购物车
        	this.$store.commit("clear");
        }

    },
    components: {
        snumbox
    }



}
</script>
<style lang="less" scoped>
.warp {
    background-color: #eee;
    overflow: hidden;

    .mui-card-content-inner {
        margin: 0 10px;
        display: flex;

        img {
            width: 60px;
            height: 60px;

        }

        .red {

            color: red;
            font-size: 16px;
            margin-right: 10px;
        }

        .info {
            display: flex;
            flex-direction: column;

            h3 {
                font-size: 14px;
            }

            .mui-numbox {

                button {
                    width: 40px;

                }

                input {
                    width: 30px;

                }

            }
        }

    }

}
</style>