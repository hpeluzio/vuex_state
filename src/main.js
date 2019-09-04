import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import { store } from './store'


Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  router: Router,
  store,
  render: h => h(App)
}).$mount('#app')
