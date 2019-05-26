<template>
    <div>
        <h4>开心一刻</h4>
       <div v-text="joke" class="myfont"></div>
       <div class="mui-btn mui-btn-primary" @click="change">换个笑话</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            joke: ""
        }
    },
    created() {
        this.show()
    },
    methods: {
        show() {

            let url = "../../../src/lib/joke.json";
            this.$http.get(url).then((data) => {
                let idx = parseInt(Math.random() * 50);
                this.joke = data.body.jokeList[idx].content;
            }).catch(() => {})
        },
        change(){
            this.show() 
        }
    }
}
</script>
<style scoped>

.mui-btn.mui-btn-primary{
     margin-top:26px !important;
}
.myfont{
    font-size:18px;
    color:#aaa;

}
h4{
    margin:-40px 0 24px 0;
}
</style>