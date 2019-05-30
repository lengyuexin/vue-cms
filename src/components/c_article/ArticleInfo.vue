<template>
    <div container>
        <div class="mui-card" >
          
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div v-text="msg" style="font-size:18px;color:#2ecc71;"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {


    data() {
        return {
            id: this.$route.params.id,//文章id,
            msg:""// 文章正文

        }
    },
    created() {
        this.show();
    },
    methods: {
        // 获取文章数据
        show() {
            this.$http.get('https://lengyuexin.github.io/json/story.json').then((result) => {

                result.body.list.filter(item=>{
                	if(item.id==this.id){
                		this.msg=item.more
                	}
                })

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