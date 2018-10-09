<template>
	<div class="tmpl">
		<nav-bar title='图文详情'></nav-bar>
		<div class="photo-title">
			<span>日期:{{infos.add_time|convertDate}}</span>
			<span>浏览次数:{{infos.click}}</span>
		</div>
		 <vue-preview :slides="imgs" @close="handleClose" class='aaa'></vue-preview>
		    <div class="photo-desc">
		    	<p>{{infos.info}}</p>
		    </div>
		  <common :cid='cid'></common>
	</div>
</template>
<script>
	export default{
		data(){
			return{
              imgs:[],
              infos:{},
               cid:this.$route.params.id,
			}
		},
		created(){
          this.$axios.get('photoinfo/'+this.cid)
          .then(res=>{
          	this.imgs=res.data.message;
          	this.infos=res.data.content;
          	this.imgs.forEach( function(ele) {
          		ele.w=200;
          		ele.h=150;
          	});
          })
		},
		methods:{
			
        handleClose () {
        console.log('close event')
         },
		}
		
	}
</script>
<style>
	.aaa{text-align: center;}
</style>
<style scoped>
	.photo-title,.poto-desc{
		border-bottom: 1px solid rgba(0,0,0,0.2);
		padding-bottom: 5px;margin-bottom: 5px;
		padding-left: 5px;
	}
	.photo-desc{padding: 10px;}
	.photo-title span{padding-right: 10px;display: inline-block;color: red}
	
</style>