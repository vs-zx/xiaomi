import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import '@/assets/css/base.css'
import '@/assets/iconfont/iconfont.css'

Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: require('./assets/img/loading.gif'),
  loading: require('./assets/img/loading.gif'),
  attempt: 1
  });
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
