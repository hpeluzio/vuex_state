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
import ls_plugin from './plugins/local-storage';
//import axios_plugin from './plugins/axios';

export default new Vuex.Store(
{ 
    // modules: {
    //     counter,
    //     rota1
    // }, 
    modules,
    plugins: [ls_plugin],
	mutations: {
        //TODA VEZ que a pagina e refrescada então pega-se o state'zera' 
        //do localstorage e seta o estado novamente 
		initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem('statezera')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('statezera')))
				);
			}
        },
        //TODA VEZ que acontece um evento no storage então todas as abas dão um replace no seu
        //estado, ou seja, elas atualizam o seu estado de acordo com o state'zera' do localstorage
		eventListener(state) {
            var _this = this 
            window.addEventListener("storage", function() {
                console.log('addEventListener ADICIONADO NAS OUTRAS ABAS/JANELAS') 
                //this.$store.state
				_this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('statezera')))
				);
                // store.state.replaceState(
                // 	Object.assign(state, JSON.parse(localStorage.getItem('statezera')))
                // )
              })  
        },        
     
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
