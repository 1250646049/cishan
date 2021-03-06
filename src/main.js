import Vue from 'vue'
import App from './App.vue'

import router from './Router'
import './Router/RouterEach'
import './Element'
import "./Assets/css/base.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
