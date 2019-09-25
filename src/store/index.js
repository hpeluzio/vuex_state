import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
// import counter from '@/view/counter'

Vue.use(Vuex)

console.log('STORE INDEx')


export default new Vuex.Store({ modules })

// const store =  new Vuex.Store({ 
//     modules: {
//         //auth,
//         counter,
//         //comments,
//         // ...
//     }
//  })

// export { store }
