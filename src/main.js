import Vue from 'vue'
import App from './App.vue'

import router from './Router'
import './Element'
import "./Assets/css/base.styl"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
