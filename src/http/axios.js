import Vue from 'vue'
import axios from 'axios'
import store from '@/store'

var URL = process.env.VUE_APP_API_URL

// Vue.use({
//     install(Vue) {
        const http = axios.create({
            baseURL: URL,
            //timeout: 1000,
            //headers: {'X-Custom-Header': 'foobar'}
        })

        http.interceptors.request.use(config => {
            //Aqui vamos verificar se o cara está logado, caso estiver 
            //vamos simplesmente adicionar header authorization
            console.log('http / axioos: logado? :', store.getters['auth/logado'])
            console.log('http / axioos: token? :', store.getters['auth/token'])

            const token = store.getters['auth/token'];

            if (token) {
            //   config.headers.Authorization = `Bearer ${token}`
              config.defaults.headers.common['Authorization'] = `Bearer ${token}`
            }

            return config
        }, error => {
            //Se der algum erro voltar aqui
            return Promise.reject(error)
        })

    // }
// })

// axios.defaults.baseURL = 'https://produto-b14ca.firebaseio.com/'

// Vue.use({
//     install(Vue) {
//         Vue.prototype.$http = axios
//     }
// })

// console.log('TOKEN', store.state)

// const http = axios.create({
//     baseURL: URL,
//     //timeout: 1000,
//     //headers: {'X-Custom-Header': 'foobar'}
// });

export default http