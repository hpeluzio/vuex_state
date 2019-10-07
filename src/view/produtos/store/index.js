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
        API_CALL(state, payload) {

            var produtos = []
            if(payload)
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
                // context.commit('ADD_PRODUTO', Object.assign({ id: res.data.name}, payload))

                //Obtendo lista de produtos novamente
                context.dispatch('API_CALL_ACT')

                console.log('PRODUTO INSERIDO COM SUCESSO')
                //alert('PRODUTO INSERIDO COM SUCESSO')
              })
              .catch(error => {
                console.log('ERROR:', error)
                alert('ERROR:', error)
              })
        },

        UPDATE_PRODUTO_ACT(context, payload) {
 
            http.patch(`https://produto-b14ca.firebaseio.com/produtos/${payload.id}.json`, payload)
              .then(res => {
                
                //Obtendo lista de produtos novamente
                context.dispatch('API_CALL_ACT')

                console.log('PRODUTO ATUALIZADO COM SUCESSO')
                //alert('PRODUTO INSERIDO COM SUCESSO')
              })
              .catch(error => {
                console.log('ERROR:', error)
                alert('ERROR:', error)
              })
        },

        DELETE_PRODUTO_ACT(context, payload){
            http.delete(`https://produto-b14ca.firebaseio.com/produtos/${payload}.json`)
              .then(res => {
                context.dispatch('API_CALL_ACT')
              })
              .catch(error => {
                console.log('ERROR:', error)
                //alert('ERROR:', error)
              })             
        }, 

        API_CALL_ACT(context) {
 
            http.get('https://produto-b14ca.firebaseio.com/produtos.json')
              .then(res => {
                //Pegando todos os produtos da API e setando no estado
                context.commit('API_CALL', res.data)
              })
              .catch(error => {
                console.log('ERROR:', error)
                //alert('ERROR:', error)
              })            
        },
    }
 
}
