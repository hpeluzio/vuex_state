export default {
    namespaced: true,
    state: {
        count: 0,
        teste:1337
    },
    getters: {
        count: state => state.count,
        // total: state => state.count,
        total(state) {
            console.log('getter total entrou aqui')
            return state.teste;
        }
    },    
    mutations: {
        decrement: state => state.count--,
        increment (state) {
            state.count++
        },
        testeTeste(state, payload) {
            state.teste += payload;
        }

        //increment: state => state.counter++
    },
    
    actions: {
        // decrement: context => context.commit('decrement'),
        // increment: context => context.commit('increment')
        decrement: ({ commit }) => commit('decrement'),
        increment: ({ commit }) => {
            setTimeout( () => {
                commit('increment')
            }, 250)
        },
        testeTesteAct(context, payload) {
            setTimeout( () => {
                context.commit('testeTeste', payload)
            }, 250)
            
        }
    }

}
