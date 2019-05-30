<template>
    <div class="container">
        <ul class="mui-table-view" v-for="(item,i) in list" :key="i">
            <li class="mui-table-view-cell">
                <h3>{{item.title}}</h3>
                <span>{{item.url}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
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
            let url = "https://lengyuexin.github.io/json/study.json"
            this.$http.get(url).then(result => {
                this.list = result.body.list

            })
        }
    }
}
</script>
<style lang="less" scoped>
.container {
	ul{
		margin-top:-10px;
	}
    h3 {
        font-size: 16px;
    }

    span {
        color: gold;
    }


}
</style>