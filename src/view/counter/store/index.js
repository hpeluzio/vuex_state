// import state from './state'
// // import mutations from './mutations'
// // import * as actions from './actions'

// export default {
//   state,
// //   actions,
// //   mutations,
// //   namespaced: true
// }


export default {
    namespaced: true,
    state: {
        count: 0
    },
    getters: {
        counter: state => state.count,
    },    
    mutations: {
        decrement: state => state.count--,
        increment (state) {
            state.count++
        }
        //increment: state => state.counter++
    },
    actions: {
        // decrement: context => context.commit('decrement'),
        // increment: context => context.commit('increment')
        decrement: ({ commit }) => commit('decrement'),
        increment: ({ commit }) => {
            setTimeout(() => {
                commit('increment')
            }, 1000)
        }
    },
}
