<template>
    <div class="mui-numbox" data-numbox-min='1' style="height:25px;">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="numbox" readonly />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {

    methods: {
        countChanged() {

            // 每当数量值改变，则立即把最新的数量同步到 购物车的  store 中，覆盖之前的数量值
            this.$store.commit("updateGoodsInfo", {
                id: this.goodsid,
                count: this.$refs.numbox.value
            });
        }
    },
    props: ["initcount", "goodsid", "max"],

    mounted() {
        // 初始化数字选择框组件
        mui(".mui-numbox").numbox();
        mui(".mui-numbox").numbox().setOption('max', this.max)
    }





};
</script>
<style lang="scss" scoped>
</style>