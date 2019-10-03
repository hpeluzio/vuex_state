import ls from 'local-storage'

const pluginLocalStorage = store => {
    console.log('chamado quando o store é inicializado')


    //Inizializar a store do component com o local storage
    store.commit('initialiseStore');
    // store.dispatch('initialiseStoreAct');


    // if(localStorage.getItem('statezera')) {
    //   // Replace the state object with the stored item
    //   store.replaceState(
    //     Object.assign(store.state, JSON.parse(localStorage.getItem('statezera')))
    //   );
    // }

    store.subscribe((mutation, state) => {
      ls.set('statezera', state)
      console.log('TODA MUTACAO ENTRA PLUGIN? CLARO')
      window.addEventListener("storage", function() {
        console.log('TESTE addEventListener') 
        //this.$store.state
        Object.assign(this.$store.state, JSON.parse(localStorage.getItem('statezera')))
        // store.state.replaceState(
				// 	Object.assign(state, JSON.parse(localStorage.getItem('statezera')))
				// )
      })
      //console.log('state', state)
      // chamada após cada mutação.
      // A mutação vem no formato de `{ type, payload }`.
      //var keys = Object.keys(state);
      //console.log('keys',keys)
      // for (let [key, value] of Object.entries(state)) {
      //   console.log(key, value);
      // }
    })
  }

  export default pluginLocalStorage