import ls from 'local-storage'

const myPlugin = store => {
    // chamado quando o store é inicializado
    //console.log('ENTROU NO PLUGIN')
    store.subscribe((mutation, state) => {
      ls.set('statezera', state)
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

  export default myPlugin