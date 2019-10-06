import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://produto-b14ca.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})