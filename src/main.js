import Vue from 'vue'
import App from './App.vue'
import routes from './Router/router'
import VueRouter from 'vue-router'
import Bootstrap from 'bootstrap/dist/js/bootstrap';




import '@fortawesome/fontawesome-free/css/all.css'
import fontawesome from '@fortawesome/fontawesome-free/js/all.js'
import 'flag-icon-css/css/flag-icon.min.css'



Vue.config.productionTip = false
Vue.use(VueRouter,Bootstrap,fontawesome)
const router = new VueRouter({
  routes,
  mode:'history'
})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

