// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import Axios from 'axios'
import './static/vendor/mui/dist/css/mui.css'
import './static/css/global.css'
import Moment from 'moment'
import NavBar from './components/common/navBar.vue'
import common from './components/common/common.vue'
import MySwipe from './components/common/mySwipe.vue'
import VuePreview from 'vue-preview'
Axios.interceptors.request.use(function(config){
	 Mint.Indicator.open({
	 	text:'加载中...',
	 	spinerType:'fading-circle',
	 });
	 return config;
})
Axios.interceptors.response.use(function(config){
    Mint.Indicator.close();
	return config;
})

Vue.prototype.$axios = Axios
Axios.defaults.baseURL='https://www.easy-mock.com/mock/5b7cc55d7db68670ea23ec50/my/'

Vue.component('navBar',NavBar)
Vue.component('common',common)
Vue.component('mySwipe',MySwipe)

Vue.use(Mint)
Vue.use(VuePreview)


Vue.filter('convertDate',function(value){
	return Moment(value).format('YYYY-MM-DD');

})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
