const myPlugin = store => {
    // chamado quando o store é inicializado
    console.log('ASDASDASDASASDASDAD')
    store.subscribe((mutation, state) => {
      // chamada após cada mutação.
      // A mutação vem no formato de `{ type, payload }`.
    })
  }

  export default myPlugin