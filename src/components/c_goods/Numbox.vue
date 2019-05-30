<template>
    <div class="container">
        <div class="mui-numbox" data-numbox-min='1'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" :value="initcount" ref="numbox" @change="getNowCount" />
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'

import { Toast } from 'mint-ui'
export default {
    mounted() {
        mui(".mui-numbox").numbox() //初始化numbox
    },
    props: ['max', 'initcount'],
    methods: {
        getNowCount() {
            let val = Number(this.$refs.numbox.value);
            let max=Number(this.max);
            if (val > max) {
                val =max;
                Toast("抱歉，库存不足！")
                return false;
            } else{

                this.$emit('getcount', val)
            }
            
        }
    },
    watch: {
        'max': function(newVal) {
            mui(".mui-numbox").numbox().setOption('max', newVal)
        }
    }
}
</script>
<style lang="less" scoped>
.container {
    margin-bottom: 10px;

}
</style>