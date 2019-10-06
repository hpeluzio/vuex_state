import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import store from './store'

// import ls from 'local-storage'
// import './http/axios'

// Vue.prototype.$ls = ls

Vue.config.productionTip = false




// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  router: Router,
  store, //alias para store: store
  render: h => h(App)
}).$mount('#app')
