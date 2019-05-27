<template>
    <div>
        <!-- 毒鸡汤列表 -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
                <router-link :to="'/home/newsInfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" src="http://www.nows.fun/img/logo.png">
                    <div class="mui-media-body">
                        <p class='mui-ellipsis'>{{item.text}}</p>
                        <p class='mui-ellipsis time'>{{time|dataFormat}}</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [], //毒鸡汤列表
            time: new Date() //时间
        }
    },
    created() {
        this.show();
    },
    //获取毒鸡汤列表
    methods: {
        show() {
            this.$http.get("../../src/lib/text.json").then((result) => {
                this.list = result.body.list;
            }).catch(() => {})
        }
    }
}
</script>
<style lang="less" scoped>
.mui-ellipsis.time {
    margin-top: 5px;
}

.mui-media-object {
    max-width: 86px !important;
}

.mui-table-view {
    padding-top: 30px;

    &:first-child {
        margin-top: -8px;
    }
}
</style>