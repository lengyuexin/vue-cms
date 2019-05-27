<template>
	<div>
		<mt-header >
			<router-link to="/" slot="left">
			    <mt-button icon="back" @click="back">返回</mt-button>
			</router-link>
		</mt-header>
	</div>
</template>

<script>
export default {

 

  data () {
    return {
    		id:this.$route.params.id
    }
  },
  methods:{
  	back(){
  		this.$router.go(-1)
  	}
  }
}
</script>

<style lang="less" scoped>

div header{
	background-color: #2ecc71;
}
</style>