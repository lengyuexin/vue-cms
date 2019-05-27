<template>
    <div>
        <!-- 鸡汤详情卡片 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner msg" v-text="msg"> </div>
            </div>
        </div>
        <!--  笑话子组件卡片 -->
        <div class="mui-card">
            <div class="mui-card-content m">
                <div class="mui-card-content-inner">
                    <joke> </joke>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import joke from '../c_subComponents/Joke.vue' // 导入笑话子组件
export default {
    data() {
        return {
            id: this.$route.params.id, //鸡汤id
            msg: "" //鸡汤详情
        }
    },
    created() {
        this.show();
    },
    methods: {
        //获取鸡汤详情
        show() {
            this.$http.get("../../src/lib/text.json").then((result) => {
                result.body.list.filter((item, i) => {
                    if (this.id == item.id) {
                        this.msg = item.text
                    }
                });
            }).catch(() => {})
        }
    },
    //注册笑话子组件
    components: {
        joke
    }
}
</script>
<style lang="less" scoped>
.mui-card-content-inner.msg {
    font-size: 20px;
    color: #2ecc71;

}

.mui-card-content.m {
    margin-top: 50px !important;
    margin-bottom: 50px !important;
}
</style>