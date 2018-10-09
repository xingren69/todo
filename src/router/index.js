import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
const member =() => import( '@/components/member.vue')
const search =() => import( '@/components/search.vue')
const shopcar =() => import( '@/components/shopcar.vue')
const newsList =() => import( '../components/news/newsList.vue')
const newsDetail =() => import( '../components/news/newsDetail.vue')
const PhotoShare =() => import( '../components/photo/photoShare.vue')
const PhotoDetail =() => import( '../components/photo/photoDetail.vue')
const GoodsList =() => import( '../components/goods/goodsList.vue')
const GoodsDetail =() => import( '../components/goods/goodsDetail.vue')
const GoodsComment =() => import( '../components/goods/goodsComment.vue')

Vue.use(Router)

export default new Router({
	linkActiveClass:'mui-active',
  routes: [{path: '/',redirect: { name: 'home' } },
    {path: '/home',name: 'home',component: home},
     {path: '/member',name: 'member',component:member},
    {path: '/search',name: 'search',component:search},
    {path: '/shopcar',name: 'shopcar',component:shopcar},
    {path: '/news/list',name: 'newsList',component:newsList},
    {path: '/news/detail',name: 'newsDetail',component:newsDetail},
    {path: '/photo/share',name: 'photoShare',component:PhotoShare},
    {path: '/photo/Detail/:id',name: 'photoDetail',component:PhotoDetail},
    {path: '/goods/list',name: 'goodsList',component:GoodsList},
    {path: '/goods/Detail/:id',name: 'goodsDetail',component:GoodsDetail},
    {path: '/goods/Comment/',name: 'goodsComment',component:GoodsComment},
    {path: '/goods/PicInfo/',name: 'GoodPicInfo',component:newsDetail},
  ]
})
