<template>
    <div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner msg" v-text="msg"> </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content m">
                <div class="mui-card-content-inner">
                    <comments> </comments>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import comments from '../c_subComponents/Comments.vue'

export default {
    data() {
        return {
            id: this.$route.params.id,
            msg: ""
        }
    },
    created() {
        this.show();
    },
    methods: {
        show() {
            this.$http.get("../../src/lib/text.json").then((result) => {

                result.body.list.filter((item, i) => {
                    if (this.id == item.id) {

                        this.msg = item.text
                    }
                });
            }).catch(() => {})

        }
    },
    components: {
        comments
    }
}
</script>
<style scoped>
.mui-card-content-inner.msg {
    font-size: 20px;
    color: #2ecc71;

}
.mui-card-content.m{
    margin-top:50px !important;
    margin-bottom:50px !important;
}
</style>