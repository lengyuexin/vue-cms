<template>
    <div container>
        <div class="mui-card" v-for="(item,i) in list" :key="i">
            <div class="mui-card-header">{{item.title}}--{{item.author}}--{{item.time}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <router-link :to="'/home/ArticleInfo/'+item.id">
                        <img :src="item.bg" alt="">
                    </router-link>
                    <div v-text="item.content" style="font-size:18px;color:#2ecc71;"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {


    data() {
        return {
            list: [] //文章列表

        }
    },
    created() {
        this.show();
    },
    methods: {
        // 获取文章数据
        show() {
            this.$http.get('https://lengyuexin.github.io/json/story.json').then((result) => {

                this.list = result.body.list

            }).catch(() => {})
        }
    }
}
</script>
<style lang="less" scoped>
.container .mui-card {
    padding-bottom: 40px;

    img {
        display: block;
        width: 100%;
    }
}
</style>