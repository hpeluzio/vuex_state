import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

// import VuexPersist from 'vuex-persist'

// const vuexPersist = new VuexPersist({
//     key: 'my-app',
//     storage: window.localStorage,
//     modules: ['counter']
// })
// import createPersistedState from 'vuex-persistedstate'
// import counter from '@/view/counter/store/index'
// import rota1 from '@/view/rota1/store/index'
import plugin from './plugin';

export default new Vuex.Store(
{ 
    // modules: {
    //     counter,
    //     rota1
    // }, 
    modules,
    plugins: [plugin],
	mutations: {
		initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem('statezera')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('statezera')))
				);
			}
		}
    },
    // actions: {
    //     initialiseStoreAct(context) {
    //         context.commit('initialiseStore')
    //     }
    // }    
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
