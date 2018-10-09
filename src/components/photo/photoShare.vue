<template>
	<div class="tmp1">
		<nav-bar title='图文分享'></nav-bar>
	
		<div class="photo-header">
			<ul>
				<li v-for="(cate,index) in category" :key='cate.id'>
					<a @click='change(cate.id)'>{{cate.title}}</a></li>
			</ul>
		</div>
		<div class="photo-list">
			<ul>
				<li v-for="img in imgs" :key='img.id'>
					<router-link :to="{name:'photoDetail',params:{id:img.id}}">
						<img  v-lazy='img.img_url' :key='img.img_url'>
						<p>
							<span>{{img.title}}</span><br>
							<span>{{img.zhaiyao}}</span>
						</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
              category:[],
              imgs:[],
			}
		},
		created(){
			this.$axios.get('image/')
			.then(res=>{
				this.category=res.data.message;
				this.category.unshift({
					id:0,title:'全部'
				})
			});
			this.change(0);

		},
		methods:{
           change(id){
           	 this.$axios.get('image/'+id)
			.then(res=>{
				this.imgs=res.data.message;
			})
           }
		}
	}
</script>
<style scoped>
.photo-list image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}	
*{margin:0;padding: 0}
	.photo-header li{
		list-style: none;display: inline-block;margin-left: 10px;height: 30px;
	}
	.photo-header ul{
		white-space: nowrap;overflow-x: auto;padding-left: 0;margin:5px;
	}
	.photo-list img{
       width: 100%;height: 100%;
	}
	.photo-list li{border:1px solid red;list-style: none;position: relative;}
	.photo-list p{position: absolute;bottom: 0px;background: #e7e7e7;
		padding: 5px;width: 100%}

</style>