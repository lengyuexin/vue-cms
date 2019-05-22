<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.src" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9" >
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu1.png" alt="" >
                    <div class="mui-media-body">新闻资讯</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu2.png" alt="" >
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu3.png" alt="" >
                    <div class="mui-media-body">商品购买</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu4.png" alt="" >
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu5.png" alt="" >
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu6.png" alt="" >
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
export default {

    data() {
        return {
            list: []
        }
    },
    created() {
        this.show();
    },
    methods: {
        show() {
            this.$http.get('../../src/lib/pic.json').then((result) => {
                this.list = result.body.list.slice(5, 10);
                //console.log(result)

            }).catch(() => {})


        }
    }

}
</script>
<style lang="css" scoped>
.mint-swipe {
    height: 200px;
}

.mint-swipe .mint-swipe-item img {
    display: block;
    width: 100%;

}
.mui-grid-view.mui-grid-9 {
	background-color: #fff;
	border:none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border:none;
}
.mui-grid-view.mui-grid-9 img{

	widows: 60px;
	height: 60px;
}

</style>