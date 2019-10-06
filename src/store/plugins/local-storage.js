import ls from 'local-storage'

const pluginLocalStorage = store => {
    //console.log('chamado quando o store é inicializado')


    //Inizializar a store do component com o local storage
    store.commit('initialiseStore');
    store.commit('eventListener');
    // store.dispatch('initialiseStoreAct');

    // window.addEventListener("storage", function() {
    //   console.log('addEventListener ADICIONADO NAS OUTRAS ABAS/JANELAS') 
    //   //this.$store.state
    //   Object.assign(store.state, JSON.parse(localStorage.getItem('statezera')))
    //   // store.state.replaceState(
    //   // 	Object.assign(state, JSON.parse(localStorage.getItem('statezera')))
    //   // )
    // })


    // if(localStorage.getItem('statezera')) {
    //   // Replace the state object with the stored item
    //   store.replaceState(
    //     Object.assign(store.state, JSON.parse(localStorage.getItem('statezera')))
    //   );
    // }

    store.subscribe((mutation, state) => {
      ls.set('statezera', state)
      //console.log(mutation.type)
      //console.log('TODA MUTACAO ENTRA PLUGIN? CLARO')

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