//AXOIS PLUGIN

const axios_plugin = store => {
    console.log('AXIOS PLUGIN :::: chamado quando o store é inicializado')

    store.subscribe((mutation, state) => {
      //console.log(mutation.type)
      if(mutation.type === 'auth/SET_LOGAR')
        console.log('MUTATION TYPE = SET_LOGAR')
        
      if(mutation.type === 'auth/SET_DESLOGAR')
        console.log('MUTATION TYPE = SET_DESLOGAR')  

    })
  }

  export default axios_plugin