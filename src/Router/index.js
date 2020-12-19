import Vue from 'vue'
import VueRouter from 'vue-router'

import Router from './router'

Vue.use(VueRouter)


 export default new VueRouter({
    mode:'history',
    routes:Router



 })
