export default {
    namespaced: true,
    state: {
        rota1: 0
    },
    getters: {
        rota1: state => state.rota1,
    },    
    mutations: {
        increment (state) {
            state.rota1++
        },        
        decrement (state) {
            state.rota1--
        },

    },
    
    actions: {
        // decrement: context => context.commit('decrement'),
        // increment: context => context.commit('increment')
        decrement: ({ commit }) => commit('decrement'),
        increment: ({ commit }) => commit('increment'),
        // increment: ({ commit }) => {
        //     setTimeout( () => {
        //         commit('increment')
        //     }, 250)
        // },
    }

}
