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
            state.produtos.push(payload)
        },
        
        DELETE_PRODUTO(state, payload){
            state.produtos = state.produtos.filter( produto => {
                if(produto.id !== payload)
                    return produto
            })
        },

        API_CALL(state, payload) {

            var produtos = []
            Object.keys(payload).map( key => {
                produtos.push({ 
                    'id': key, 
                    'name': payload[key].name, 
                    'quantidade': payload[key].valor, 
                    'valor': payload[key].valor })
            })
            state.produtos = produtos
        }         
    },
    
    actions: {
        ADD_PRODUTO_ACT(context, payload) {
 
            http.post('https://produto-b14ca.firebaseio.com/produtos.json', payload)
              .then(res => {
                
                context.commit('ADD_PRODUTO', Object.assign({ id: res.data.name}, payload))

                console.log('PRODUTO INSERIDO COM SUCESSO')
                alert('PRODUTO INSERIDO COM SUCESSO')
              })
              .catch(error => {
                console.log('ERROR:', error)
                alert('ERROR:', error)
              })            
        },

        DELETE_PRODUTO_ACT(context, payload){
            http.delete(`https://produto-b14ca.firebaseio.com/produtos/${payload}.json`)
              .then(res => {
                context.commit('DELETE_PRODUTO', payload)
              })
              .catch(error => {
                console.log('ERROR:', error)
                //alert('ERROR:', error)
              })             
        }, 

        API_CALL_ACT(context, payload) {
 
            http.get('https://produto-b14ca.firebaseio.com/produtos.json')
              .then(res => {
                //console.log('API_CALL res: ', res.data)
                context.commit('API_CALL', res.data)
                // this.ADD_PRODUTO_ACT({
                //   name: this.name,
                //   quantidade: this.quantidade,
                //   valor: this.valor
                // })
                //console.log('PRODUTO INSERIDO COM SUCESSO')
                //alert('PRODUTO INSERIDO COM SUCESSO')
              })
              .catch(error => {
                console.log('ERROR:', error)
                //alert('ERROR:', error)
              })            
        },
    }
 
}
