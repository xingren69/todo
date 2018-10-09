<template>
	<div class="tmpl">
		<nav-bar title='商品展示(1.2商品加入购物车)'></nav-bar>
        <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="isAutoFill" ref='loadmore'>
        <ul class="mui-table-view mui-grid-view">
            <li v-for="prod in prods" class="mui-table-view-cell mui-media mui-col-xs-6" :key="prod.id">
                <router-link :to="{name:'goodsDetail',params:{id:prod.id}}">
                    <img class="mui-media-object" :src="prod.img_url">
                    <div class="mui-media-body"><span>{{prod.title}}</span></div>
                    <div class="desc">
                        <div class="sell">
                            <span>{{prod.market_price}}</span>
                            <s>￥{{prod.seil_price}}</s>
                        </div>
                        <div class="detail">
                            <div class="hot">
                                热卖中
                            </div>
                            <div class="count">
                                剩{{prod.stock_quantity}}件
                            </div>
                        </div>
                   </div>
                </router-link>
            </li>
        </ul>
        </mt-loadmore>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				prods:[],
				pageindex:14,
                allLoaded:false,
                isAutoFill:false,
			}
		}
		,created(){
           this.loadMore();
		},
        methods:{
          loadBottom(){
            //上拉时加载图片
            this.loadMoreConcat();
          },
          loadMore(){
             this.$axios.get('image/'+this.pageindex)
            .then(res=>{
                this.prods=res.data.message;
            })
          },
          loadMoreConcat(){
            this.$axios.get('image/'+(++this.pageindex))
            .then(res=>{
                this.prods=this.prods.concat(res.data.message);
              if(res.data.message.length<10){
                 this.allLoaded=true; 
              }  
              //如果某页面信息数量少于10条，默认后面没有数据了，
              //禁止下拉=true；不能继续进行下拉
              //
            this.$refs.loadmore.onBottomLoaded();
            //通知<mt-loadmore>上拉已完成，不加到底部上拉有问题。
            })
          }
        }
	}
</script>
<style scoped>
.tmpl{
overflow:scroll;
height: 600px;
}
	.mui-table-view.mui-grid-view .mui-table-view-cell > a:not(.mui-btn) {
    margin: 0px;
    padding: 0px;
    border: 1px solid #5c5c5c;
    box-shadow: 0 0 4px #666;
}

.sell > span {
    float: left;
    color: red;
    text-align: left;
}

.detail >.hot {
    float: left;
    text-align: left;
    font-size: 15px;
}

.detail >.count {
    float: right;
    text-align: right;
    font-size: 15px;
}


/*撑开，去除浮动没有的高度*/

.detail {
    overflow: hidden;
}

.desc {
    color: rgba(92, 92, 92, 0.8);
    background-color: rgba(0, 0, 0, 0.2);
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
    height: 200px;
}
</style>