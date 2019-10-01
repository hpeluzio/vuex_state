export default {
    namespaced: true,
    state: {
        count: 0,
        count2: 0,
        teste:1337
    },
    getters: {
        count: state => state.count,
        // total: state => state.count,
        total(state) {
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
        },
        decrement2: state => state.count2--,
        increment2: state => state.count2++,

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
            
        },
        decrement2: ({ commit }) => commit('decrement2'),
        increment2: ({ commit }) => commit('increment2'),
    }

}
