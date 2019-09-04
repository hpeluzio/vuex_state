import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counter: 0
    },
    mutations: {
        decrement: state => state.counter--,
        increment (state) {
            state.counter++
        }
        //increment: state => state.counter++
    },
    getters: {
        counter: state => state.counter
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
    }
})

export { store }