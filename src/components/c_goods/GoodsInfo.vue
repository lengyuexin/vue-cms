<template>
    <div class="goods-box">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <vue-preview :slides="slide"></vue-preview>
                    <h3 style="color:red;text-align: center;">{{arr[1]}}</h3>
                    <h3><span>{{arr[3]}}</span><span>{{arr[4]}}</span></h3>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content ">
                <div class="flexBox">
                    <span class="info">请输入购买数量:</span>
                    <numbox @getcount="getGoodsCount" :max="arr[5]"></numbox>
                </div>
                
                <p class="mybtn">
                    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
                        <div class="ball" v-show="ballFlag" ref="ball"></div>
                    </transition>
                   
                        <mt-button type="primary" @click="order"> 立即购买</mt-button>
                   
                    <mt-button type="danger" @click="addCart"> 加入购物车</mt-button>
                    <mt-button type="default" plain>库存{{arr[5]}}件</mt-button>
                </p>
            </div>
        </div>
        <div class="mui-card comBox">
            <div class="mui-card-content ">
                <joke></joke>
            </div>
        </div>
    </div>
</template>
<script>
import joke from '../../components/c_subComponents/Joke.vue'
import numbox from '../../components/c_goods/Numbox.vue'
import {Toast} from 'mint-ui'
export default {

    data() {
        return {
            ballFlag: false, //控制小球是否显示
            id: this.$route.params.id, //商品id
            arr: [], //商品数组
            goodsCount: 1, //购买数量，默认为1
            slide: [{
                src: '',
                msrc: '',
                w: 300,
                h: 300
            }]
        }
    },

    created() {
        this.findById();

    },
    methods: {
        //返回上一页
        back() {
            this.$router.go(-1);
        }, 
        //订单
        order() {
            Toast("假装交易成功")
           
        },
        // 根据id筛选图片链接
        findById() {
            this.$http.get('https://lengyuexin.github.io/json/goods.json').then((result) => {
                result.body.list.filter(item => {
                    if (item.id == this.id) {
                        this.arr.push(item.id)
                        this.arr.push(item.price)
                        this.arr.push(item.url)
                        this.arr.push(item.title)
                        this.arr.push(item.desc)
                        this.arr.push(item.stock)
                    }
                });
                this.slide[0].src = this.slide[0].msrc = this.arr[2]
            }).catch(() => {})
        },
        //加入购物车
        addCart() {
            // 小球显示状态
            this.ballFlag = !this.ballFlag;
            //封装商品对象
            let product = {
                'id': this.id, //商品id
                'count': this.goodsCount, //购买数量
                'selected': true, //商品为选中状态
                'price': this.arr[1], //商品单价
                'url': this.arr[2], //图片链接
                'title':this.arr[3],//title
                'desc':this.arr[4],//desc
                'stock': this.arr[5], //库存
            }
            //vuex状态 执行
            this.$store.commit("add_cart", product);
        },
        //小球动画
        beforeEnter(el) {
            el.style.transform = "translate(0px, 0px)";
        },
        enter(el, done) {
            el.offsetWidth;
            el.style.transform = "translate(300px, 200px)";
            el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
            done();
        },
        afterEnter(el) {
            this.ballFlag = !this.ballFlag;
        },
        //通过事件调用机制，从numbox子组件获取商品购买数量，并绑定到自己的data属性上
        getGoodsCount(count) {
            this.goodsCount = count
        }
    },
    //注册笑话组件
    components: {
        joke,
        numbox
    }

}
</script>
<style lang="less" scoped>
.goods-box {
    .ball {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        top: 20px;
        left: 58px;
        z-index: 999;

    }

    .mui-card.comBox {
        padding-top: 30px;

    }

    .mui-card-content {
        padding: 10px 5px;

        .flexBox{
            display:flex;
        }

        .mybtn {
            margin-top: 6px;
            text-align: center;
            letter-spacing: 2px;
        }

        span {
            margin-right: 20px;

            &.info {
                display:block;
                margin: 6px 10px 0 10px;
                font-size: 18px;
                color: #2cc95e;
                letter-spacing: 0.1em;
            }
        }
    }
}
</style>