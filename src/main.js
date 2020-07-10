import Vue from 'vue'
import App from './App.vue'
import store from './store'
 import router from './router'
 import axios from 'axios'

 Vue.prototype.$http = axios
Vue.config.productionTip = false
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer '+token
}
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
