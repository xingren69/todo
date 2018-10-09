<template>
	<div>
		<mt-swipe :auto="4000">
	  <mt-swipe-item v-if="imgs.length" v-for="(item,index) in imgs" :key="index" ><a :href="item.url"><img :src="item.src" alt=""></a></mt-swipe-item>
	</mt-swipe>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				imgs:[],
			}
		},

			props:['url'],
			created(){
				this.$axios.get(this.url)
              .then(res=>{
     	       this.imgs=res.data.message;
              })
			}
	}
</script>
<style scoped>
	.mint-swipe{height: 110px;}
.mint-swipe img{width: 100%;height: 100%}
</style>