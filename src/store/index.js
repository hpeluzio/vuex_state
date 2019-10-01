import Vue from 'vue'
import Vuex from 'vuex'
// import modules from './modules'
// import counter from '@/view/counter'

Vue.use(Vuex)

// import VuexPersist from 'vuex-persist'

// const vuexPersist = new VuexPersist({
//     key: 'my-app',
//     storage: window.localStorage,
//     modules: ['counter']
// })
import createPersistedState from 'vuex-persistedstate'
import counter from '@/view/counter/store/index'

//import pluginteste from './pluginteste';

export default new Vuex.Store(
{ 
    modules: {
        counter
    }, 
    // plugins: [createPersistedState({
    //     key: 'counter',
    //     paths: ['counter']
    // }), createPersistedState({
    //     key: 'auth',
    //     paths: ['auth']
    // })]
})

// const store =  new Vuex.Store({ 
//     modules: {
//         //auth,
//         counter,
//         //comments,
//         // ...
//     }
//  })

// export { store }
