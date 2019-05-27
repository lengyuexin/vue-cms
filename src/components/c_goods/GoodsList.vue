<template>
    <main>
        <!--  商品列表 -->
        <div class="goods">
            <div class="goods-item" v-for="(item,i) in list" :key="i">
                <router-link :to="'/home/goodsInfo/'+item.id"><img v-lazy="item.url"> </router-link>
                <div class="info">
                    <h3 v-text='item.price'></h3>
                    <p> <span v-text="item.title"></span><span v-text="item.desc"></span></p>
                </div>
            </div>
            <!-- 加载更多 -->
            <mt-button type="primary" size="large" @click='getMore()'>加载更多</mt-button>
        </div>
    </main>
</template>
<script>
import { Toast } from 'mint-ui' //导入吐司消息框
export default {
    data() {
        return {
            list: [], //商品列表
            next: 4, //商品数据显示下限
            dataLength: 0 //商品数组长度
        }
    },
    created() {
        this.show(this.next);
    },
    methods: {
        // 获取商品数据
        show(next) {
            this.$http.get('../../src/lib/goods.json').then((result) => {
                this.list = result.body.list.slice(0, next);
                this.dataLength = result.body.list.length;
            }).catch(() => {})
        },
        // 获取更多
        getMore() {
            this.next += 4;
            if (this.next > this.dataLength) {
                Toast("我是有底线的人!!!");
                return;
            }
            this.show(this.next);
        }
    }
}
</script>
<style lang="less" scoped>
main {
        padding-bottom: 40px;
        h3 {
            color: red;
        }
        p {
            font-size: 15px;
            margin-bottom: 10px;
            span {
                &:first-child {
                    color: #e4393c;
                    margin-right: 5px;
                }
                &:last-child {
                    color: #333;
                }
            }
        }
        .goods {
            flex-wrap: wrap;
            padding: 7px;
            display: flex;
            justify-content: space-between;
            .goods-item {
                width: 49%;
                border: 1px solid #ccc;
                box-shadow: 0 0 8px #ccc;
                margin: 4px 0;
                padding: 2px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                min-height: 293px;
                img {
                    width: 100%;
                    &[lazy=loading] {
                        width: 40px;
                        height: 300px;
                        margin: auto;
                    }
                }
                .goods .info {
                    padding-left: 10px;
                }
            }
        }
}
</style>