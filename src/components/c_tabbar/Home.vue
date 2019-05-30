<template>
    <div>
      <!--   轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.src" alt="">
            </mt-swipe-item>
        </mt-swipe>
       <!--  6宫格导航 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newsList">
                    <img src="https://lengyuexin.github.io/pic/menu/menu1.png" alt="">
                    <div class="mui-media-body">剧毒鸡汤</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photoList">
                    <img src="https://lengyuexin.github.io/pic/menu/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodsList">
                    <img src="https://lengyuexin.github.io/pic/menu/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/musicList">
                    <img src="https://lengyuexin.github.io/pic/menu/menu4.png" alt="">
                    <div class="mui-media-body">网易音乐</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/articleList">
                    <img src="https://lengyuexin.github.io/pic/menu/menu5.png" alt="">
                    <div class="mui-media-body">古风短篇</div>
               </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
              <router-link to="/home/study">
                    <img src="https://lengyuexin.github.io/pic/menu/menu6.png" alt="">
                    <div class="mui-media-body">学习资源</div>
               </router-link>
            </li>
        </ul>
       <!--  每日一句卡片 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <center>
                    <h4>每日一句</h4>
                </center>
                <div class="mui-card-content-inner msg" v-html="msg"> </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {

    data() {
        return {
            list: [], //轮播图列表
            msg: "" //每日一句
        }
    },
    created() {
        this.show();
        this.initContent();
    },
    methods: {
        //获取--轮播图列表
        show() {
            this.$http.get("https://lengyuexin.github.io/json/slide.json").then((result) => {
                this.list = result.body.list.slice(14, 19);
            }).catch(() => {})

        },
        //获取--每日一句
        initContent() {
            this.$http.get('https://lengyuexin.github.io/json/article.json').then((result) => {
                let idx = parseInt(Math.random() * 40) + 1
                this.msg = result.body.list[idx].msg;
            }).catch(() => {})
        }
    }

}
</script>
<style lang="less" scoped>
.mint-swipe {
    height: 200px;

    .mint-swipe-item img {
        display: block;
        width: 100%;

    }
}

.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;

    .mui-table-view-cell {
        border: none;
    }
    img {
        widows: 60px;
        height: 60px;
    }
}

.mui-card {
    margin-top: 30px;
    box-shadow: 0 0 6px #333;
    background-color: #2cc95e;
}
.mui-card-content-inner.msg {
    padding: 5px;
    font-size: 18px;
    color: #fff;
    line-height: 24px;
    text-align: center;
}
</style>