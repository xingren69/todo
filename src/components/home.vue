<template>
  <div>
  	<my-swipe :url='lunboUrl'></my-swipe>
	<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:'newsList'}">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:'photoShare'}">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图文分享</div>
		                </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:'goodsList'}">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品展示</div>
		                </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">搜索资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
		</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    	lunboUrl:'mock/'
    	//也可以直接写成<my-swipe url='mock/'></my-swipe>
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mui-table-view.mui-grid-view.mui-grid-9{
	background: #fff;margin-top: 0;
}
.mui-table-view.mui-grid-view.mui-grid-9 li{
	border: none
}
.mui-icon-home:before,.mui-icon-email:before,
.mui-icon-chatbubble:before,.mui-icon-location:before,
.mui-icon-search:before,.mui-icon-phone:before{
	content:'';
}
.mui-icon-home{background-image:url('../static/img/news.png');}
.mui-icon-email{background-image:url('../static/img/picShare.png');}
.mui-icon-chatbubble{background-image:url('../static/img/goodShow.png');}
.mui-icon-location{background-image:url('../static/img/feedback.png');}
.mui-icon-search{background-image:url('../static/img/search.png');}
.mui-icon-phone{background-image:url('../static/img/callme.png');}
.mui-icon{width: 50px;height: 50px;background-repeat: round}

</style>
