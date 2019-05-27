<template>
    <div>
        <!--  顶部类型导航 -->
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',i==0?'mui-active':'' ]" @click.prevent="renderByType(i)" v-for="(item,i) in typeArr" :key="i">
                        {{item}}
                    </a>
                </div>
            </div>
        </div>
        <!--   图片列表 -->
        <ul>
            <li v-for="item in list" :key="item.id">
                <img v-lazy="item.src">
            </li>
        </ul>
    </div>
</template>
<script>
import mui from '../../../src/lib/mui/js/mui.min.js' /*导入mui.min.js，初始化顶部滑动导航*/
export default {
    data() {
        return {
            list: [], //图片列表
            typeArr: ['全部', '碧海', '表白', '水墨', '古风', '情侣', '花海'] //顶部导航图片分类
        }

    },
    created() {
        this.show()
    },
    methods: {
        //获取全部图片列表
        
        show() {
            let url = "https://lengyuexin.github.io/json/category.json";
            this.$http.get(url).then((data) => {
                this.list = data.body.list;
            }).catch(() => {})
        },
        //获取指定分类图片列表
        renderByType(type) {
            if (type == 0) {
                this.show();
            }
            this.list.length = 0
          let url = "https://lengyuexin.github.io/json/category.json";
            this.$http.get(url).then((data) => {
                data.body.list.filter(item => {
                    if (item.type == type) {
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
    list-style: none;
}

a.mui-control-item {
    font-size: 18px !important;
}

img {
    width: 100% !important;
    vertical-align: top;

    &[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }

}

ul {
    margin: 0;
    padding: 0;

    li {
        background-color: #ccc;
        text-align: center;
        padding: 10px;
        box-shadow: 0 0 6px #333;
    }
}
</style>