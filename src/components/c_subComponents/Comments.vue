<template>
    <div>
       <div v-text="jock" class="myfont"></div>
       <div class="mui-btn mui-btn-primary" @click="change">换个笑话</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            jock: ""
        }
    },
    created() {
        this.show()
    },
    methods: {
        show() {

            let url = "../../../src/lib/jock.json";
            this.$http.get(url).then((data) => {
                let idx = parseInt(Math.random() * 50);
                this.jock = data.body.jockList[idx].content;
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
    color:#000;
}
</style>