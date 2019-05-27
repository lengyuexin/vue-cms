<template>
    <div>
        <!-- 音乐分类滑动导航 -->
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',i==0?'mui-active':'' ]" @tap.prevent="renderByType(i+1)" v-for="(item,i) in typeArr">
                        {{item}}
                    </a>
                </div>
            </div>
        </div>
        <!-- 音乐图文列表 -->
        <div class="mui-card" v-for="(item,i) in list" :key="i">
            <div class="mui-card-header">{{item.name}}--{{item.singer}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <router-link :to="'/home/musicInfo/'+item.id">
                        <img v-lazy="item.bg">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import mui from '../../../src/lib/mui/js/mui.min.js' /*导入mui.min.js，初始化顶部滑动导航*/
export default {
    data() {
        return {
            list: [], //音乐图文列表
            typeArr: ['推荐', '小雅', '秋风', '禅意', '灵韵', '悠然'] //音乐分类
        }
    },
    created() {
        this.renderByType(1); //推荐页音乐初始化
    },
    methods: {
        //显示指定分类的音乐
        renderByType(type) {
            this.list.length = 0
            let url = "../../../src/lib/music.json";
            this.$http.get(url).then((data) => {
                data.body.list.filter(item => {
                    if (type == item.type) {
                        this.list.push(item)
                    }
                })
            }).catch(() => {})
        }
    },
    //初始化顶部滑动导航
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }

}
</script>
<style lang="less" scoped>
* {
    touch-action: pan-y;

}

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

img {
    width: 100%;
    vertical-align: top !important;
    &[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
}

.mui-scroll a {
    font-size: 18px;
}
</style>