<template>
    <!-- 笑话--公共子组件 -->
    <div class="box">
        <h4>开心一刻</h4>
        <div v-text="joke" class="myfont"></div>
        <div class="mui-btn mui-btn-primary" @click="change">换个笑话</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            joke: "" //存放笑话
        }
    },
    created() {
        this.show()
    },
    methods: {
        //获取笑话
        show() {
            let url = "https://lengyuexin.github.io/json/joke.json";
            this.$http.get(url).then((data) => {
                let idx = parseInt(Math.random() * 50);
                this.joke = data.body.jokeList[idx].content;
            }).catch(() => {})
        },
        //更换笑话
        change() {
            this.show()
        }
    }
}
</script>
<style lang="less" scoped>
.box {
     min-height: 260px;
    .mui-btn.mui-btn-primary {
        margin-top: 26px !important;
    }

    .myfont {
        font-size: 14px;
        color: #000;

    }

    h4 {
        margin: -40px 0 24px 0;
    }
}
</style>