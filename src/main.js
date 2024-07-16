import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import '@/assets/css/Style.css'
import 'normalize.css/normalize.css'
import '@/assets/css/iconfont.css'
import * as echarts from 'echarts'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
