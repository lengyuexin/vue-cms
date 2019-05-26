<template>
    <div>
    	 <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll" >
                   
                        <a :class="['mui-control-item',i==0?'mui-active':'' ]" @tap.prevent="renderByType(i+1)" v-for="(item,i) in typeArr" @tap.once="pageReload(i)">
                            {{item}}
                        </a>
                   
                </div>
            </div>
        </div>
        

        <div class="mui-card"  v-for="(item,i) in list" :key="i">
            <div class="mui-card-header">{{item.name}}--{{item.singer}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <router-link :to="'/home/musicInfo/'+item.id">
                        <img :src="item.bg" alt="">
                    </router-link>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
          
            list: [],
            typeArr: ['推荐','小雅','秋风','禅意','灵韵','悠然']
        }
    },

    created() {
       	this.renderByType(1);
       
    },
    methods: {
        pageReload(i){
            if(i==0){

            this.$router.go(0)
            }
        },
        renderByType(type) {
          
            this.list.length=0
            let url = "../../../src/lib/music.json";
            this.$http.get(url).then((data) => {

                data.body.list.filter(item=>{
                    if(type==item.type){
                         this.list.push(item)
                    }
                })
              
            }).catch(() => {})
        }
    }

}
</script>
<style scoped>
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
}

.mui-table-view:first-child {
    margin-top: -8px;
}
img{width:100%;vertical-align:top!important;}
.mui-scroll a{
    font-size:18px;
}
</style>