// import axios from 'axios'
import http from '@/http/axios'

export default {
    namespaced: true,
    state: {
        produtos: [],
    },
    getters: {
        produtos: state => state.produtos
    },    
    mutations: {
        ADD_PRODUTO(state, payload) {
            //console.log('mutation payload',payload)
            state.produtos.push(payload)
            // state.name = state.payload.name
            // state.quantidade = state.payload.quantidade
            // state.valor = state.payload.valor
        }   
    },
    
    actions: {
        ADD_PRODUTO_ACT(context, payload) {
            
            //axios.defaults.baseURL = 'https://produto-b14ca.firebaseio.com/'
            // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
            // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

            http.post('https://produto-b14ca.firebaseio.com/produtos.json', payload)
              .then(res => {
                context.commit('ADD_PRODUTO', payload)
                // this.ADD_PRODUTO_ACT({
                //   name: this.name,
                //   quantidade: this.quantidade,
                //   valor: this.valor
                // })
                console.log('PRODUTO INSERIDO COM SUCESSO')
                alert('PRODUTO INSERIDO COM SUCESSO')
              })
              .catch(error => {
                console.log('ERROR:', error)
                alert('ERROR:', error)
              })            
        }        
    }

}
