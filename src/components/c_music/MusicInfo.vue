<template>
    <div>
       <!--  歌曲详情页 -->
        <div class="mui-card">
            <ul class="mui-table-view">
<!-- 网易云热评 -->
                <li class="mui-table-view-cell mui-collapse">
                    <a class="mui-navigate-right" href="#">网易云热评</a>
                    <div class="mui-collapse-content" v-for="(item,i) in list" :key="i">
                        <img class="mui-media-object mui-pull-left" :src="item.user.avatarUrl">
                        <p v-text="item.content"></p>
                        <span style="float:right;color:#2ecc71;">{{item.user.nickname}}</span>
                    </div>
                </li>
<!-- 网易云评论 -->
                <li class="mui-table-view-cell mui-collapse">
                    <a class="mui-navigate-right" href="#">网易云评论</a>
                    <div class="mui-collapse-content" v-for="(item,i) in clist" :key="i">
                        <img class="mui-media-object mui-pull-left" :src="item.user.avatarUrl">
                        <p v-text="item.content"></p>
                        <span style="float:right;color:#2ecc71;">{{item.user.nickname}}</span>
                    </div>
                </li>
<!-- 歌词预览 -->
                <li class="mui-table-view-cell mui-collapse">
                    <a class="mui-navigate-right" href="#">歌词预览</a>
                    <div class="mui-collapse-content">
                        <p v-html="lyc" style="color:#f39c12;"></p>
                    </div>
                </li>
<!-- 播放与下载 -->
                <li class="mui-table-view-cell mui-collapse">
                    <a class="mui-navigate-right" href="#">播放与下载</a>
                    <div class="mui-collapse-content">
                        <audio :src="obj.url" controls loop>
                            您的浏览器不支持 audio 标签。
                        </audio>
                        <p>{{obj.size}}MB</p>
                    </div>
                </li>
<!-- 笑话组件   -->             
                <li class="mui-table-view-cell mui-collapse">
                    <a class="mui-navigate-right" href="#">开心一刻</a>
                    <div class="mui-collapse-content">
                        <joke> </joke>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import joke from '../c_subComponents/Joke.vue'//导入笑话子组件
export default {
    data() {
        return {
            list: [], //热门评论
            clist: [], //普通评论
            lyc: "", //歌词
            obj: {},//播放对象
            id: this.$route.params.id//歌曲id
        }
    },
    created() {
        this.show()
        this.download()
        this.getLycByID()

    },
    methods: {
        //获取评论
        show() {
            let url = "https://api.imjad.cn/cloudmusic/?type=comments&id=" + this.id
            this.$http.get(url).then((result) => {
                this.list = result.body.hotComments;
                this.clist = result.body.comments;
            }).catch(() => {})
        },
        //获取下载信息
        download() {
            let url = "https://api.imjad.cn/cloudmusic/?type=song&id=" + this.id
            this.$http.get(url).then((result) => {
                this.obj.url = result.body.data[0].url;
                const s1 = Number(result.body.data[0].size)
                const s2 = s1 / 1024 / 1024
                this.obj.size = s2.toFixed(2)
            }).catch(() => {})
        },
        //获取指定id歌词
        getLycByID() {
            let url = "https://lengyuexin.github.io/json/music.json";
            this.$http.get(url).then((data) => {
                data.body.list.filter(item => {
                    if (this.id == item.id) {
                        this.lyc = item.lyc
                    }
                })
            }).catch(() => {})
        }
    },
//注册笑话子组件
    components: {
        joke
    }

}
</script>
