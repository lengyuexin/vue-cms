<template>
    <div class="container">
        <!-- 标题 -->
        <mt-header fixed title="VUE-CMS">
            <span slot="left" @click="back" v-show="flag">
                <mt-button icon="back">返回</mt-button>
            </span>
        </mt-header>
        <!-- 内容 -->
        <transition>
            <router-view></router-view>
        </transition>
        <!-- 底部 Tabbar 区域 -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-me " to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-me" to="/shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span id="badge" class="mui-badge">{{$store.getters.getAllCounts}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
        </nav>
    </div>
</template>
<script type="text/javascript">
export default {


    data() {
        return {
            flag: false
        }
    },
    created() {
        this.flag = this.$route.path === "/home" ? false : true;
    },
    methods: {
        back() {
            this.$router.go(-1);
        }
    },
    watch: {
        "$route.path": function(newVal) {
            if (newVal === "/home") {
                this.flag = false;
            } else {
                this.flag = true;
            }
        }
    }
}
</script>
<style lang="less" scoped>
.v-enter {
    opacity: 0;
    transform: translateX(100%);
}

.v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.container {
    padding-top: 40px;
    overflow-x: hidden;
}



.mui-bar-tab .mui-tab-item-me {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;

    &.mui-active {
        color: #007aff;
    }

    .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }

    .mui-icon~.mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>