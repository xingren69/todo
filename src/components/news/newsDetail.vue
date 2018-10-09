<template>
	<div class="tmpl">
		<nav-bar :title='title'></nav-bar>
		<div class="news-title">
			<p>{{news.title}}</p>
			<div>
				<span>{{news.click}}</span>
				<span>分类</span>
				<span>{{news.add_time|convertDate}}</span>
			</div>
		</div>
		<div class="news-content">{{news.content}}</div>
	</div>
</template>
<script>
	export default{
		data(){
            return{
            	news:{},
            	title:''
            }
		},
		created(){
			let id=this.$route.query.id;
			this.$axios.get('/restful/news/'+id)
			.then(res=>{
                this.news=res.data.message[0];
			})
		},

		beforeRouteEnter(to,from,next){
			let myTitle='';
            if(from.name==='newsList'){
            	myTitle='新闻详情'
            }else if(from.name==='goodsDetail'){
            	myTitle='图文信息'
            }
            next(vm=>{
            	vm.title=myTitle;
            })
		}
	}
</script>
<style scoped>
	.news-title p{
		text-align: center;font-size: 20px;font-weight: bold;margin-top: 5px;
	}
	.news-title span{margin-right: 30px;}
	.news-title{
		border-bottom:1px solid rgba(0,0,0,0.2);
		padding-bottom: 5px;
	}
	.news-content{padding: 10px;text-indent: 2rem}
</style>