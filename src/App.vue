<template>
  <div>
  	<mt-header title="信息管理系统"></mt-header>
     <transition name='router' mode='out-in'>
     <router-view></router-view>
     </transition>
     <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" :to="{name:'home'}">
				<span class="mui-icon icon-shouye01"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'member'}">
				<span class="mui-icon icon-huiyuan"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'shopcar'}">
				<span class="mui-icon icon-iconzhengli-">
				<span class="mui-badge">{{pickNum}}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'search'}">
				<span class="mui-icon icon-chazhao"></span>
				<span class="mui-tab-label">查找</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
import connect from './components/common/connect.js';
import prodTools from './components/common/prodTools.js';
export default {
 data(){
 	return{
 		pickNum:prodTools.getTotalCount(),
 	}
 },
 created(){
 	//console.log(this);this指向vueComponent
 	connect.$on('addShop',(num)=>{
        this.pickNum+=num;
       //console.log(this);指向vue$3，代表new 一个vue，即为connect所以用箭头函数，解决作用域问题
 	})
 	//function(num){this.pickNum+=num;}this指向错误
 }
}
</script>

<style scoped>
.router-enter-active, .router-leave-active {
  transition: opacity .5s;
}
.router-enter, .router-leave-to  {
  opacity: 0;
}
</style>

