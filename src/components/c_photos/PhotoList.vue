<template>
    <div>
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',i==0?'mui-active':'' ]" @click.prevent="renderByType(i)" v-for="(item,i) in typeArr" :key="i">
                        {{item}}
                    </a>
                </div>
            </div>
        </div>
        <ul class="myul">
            <li v-for="item in list" :key="item.id">
                <img v-lazy="item.src">
            </li>
        </ul>
    </div>
</template>
<script>
import mui from '../../../src/lib/mui/js/mui.min.js'

export default {



    data() {
        return {
            list: [],
            typeArr: ['全部', '碧海', '表白', '水墨', '古风', '情侣', '花海']
        }

    },
    created() {
        this.show()
    },
    methods: {
        show() {

            let url = "../../../src/lib/category.json";
            this.$http.get(url).then((data) => {

                this.list = data.body.list;

            }).catch(() => {})
        },
        renderByType(type) {
            if(type==0){
                this.show();
            }
          
            this.list.length=0
            let url = "../../../src/lib/category.json";
            this.$http.get(url).then((data) => {

                data.body.list.filter(item => {

                    if (item.type == type) {
 
                         this.list.push(item)
                  }

                })

            }).catch(() => {})
        }
    },

    mounted() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });

    }



}
</script>
<style lang="css" scoped>
* {
    touch-action: pan-y;
    list-style:none;
}

a.mui-control-item {
    font-size: 18px !important;
}

img {
    width: 100% !important;
 vertical-align: top;

}
ul{
    margin: 0;
    padding: 0;
}
img[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
}
.myul li {
    background-color: #ccc;
    text-align: center;
    padding:10px ;
    box-shadow: 0 0 6px #333;
}
</style>