Vue.use(ElementUi);
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './components/app.css'
import Vue from "vue"
import App from "./App"
import $ from 'jquery'
import router from "./router/index"
import axios from 'axios'
import VueFullPage from 'vue-fullpage.js'
import echarts from 'echarts'

Vue.use(VueFullPage);
Vue.prototype.$echarts = echarts

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// import MapLocation from './components/MapLocation.vue'

// Vue.component('maplocation', MapLocation);
// Vue.config.productionTip = false
Vue.prototype.$axios = axios;

Vue.prototype.$ = $

new Vue({
  router,

  render: h => h(App),

}).$mount('#app')
