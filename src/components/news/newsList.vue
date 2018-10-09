<template>
	<div class="tmpl">
		<nav-bar title='新闻资讯'></nav-bar>
		<ul class="mui-table-view">
				<li v-for="item in list" class="mui-table-view-cell mui-media" :key='item.id'
				   >
					<router-link :to="{name:'newsDetail',query:{id:item.id}}">
						<img class="mui-media-object mui-pull-left" src="">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
								<span>点击数：{{item.click}}</span>
								<span>发表时间：{{item.add_time|convertDate}}</span>
							</p>
						</div>
					</router-link>
				</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		created(){
			this.$axios.get('restful/news')
			.then(res=>{
				this.list=res.data.message;
			}
                
			)
			}
		}
</script>
<style scoped>
	.mui-ellipsis span{
		width: 133px;display: inline-block;
	}
</style>