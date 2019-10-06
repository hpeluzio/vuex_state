export default {
    namespaced: true,
    state: {
        logado: false,
        token: '',
        name: '',
        email: '',
        permission: 'user'
    },
    getters: {
        logado: state => state.logado,
        token: state => state.token,
        name: state => state.name,
        email: state => state.email,
        permission: state => state.permission
    },    
    mutations: {
        // setLogado: (state, payload) => state.logado = payload,
        // setToken: (state, payload) => state.token = payload,
        // setName: (state, payload) => state.name = payload,
        // setEmail: (state, payload) => state.email = payload,
        // setPermission: (state, payload) => state.permission = payload,
        SET_LOGAR: (state, payload) => { 
            //console.log('payload set logar', payload)
            state.logado = payload.logado
            state.token = payload.token
            state.name = payload.name
            state.email = payload.email
            state.permission = payload.permission
        },        
        SET_DESLOGAR: (state, payload) => {
                state.logado = false
                state.token = ''
                state.name = ''
                state.email = ''
                state.permission = 'user'
        }
    },
    actions: {
        setLogarAct: ( context, payload ) => context.commit('SET_LOGAR', payload),
        // setLogadoAct: ( context, payload ) => context.commit('setLogado', payload),
        // setTokenAct: ( context, payload ) => context.commit('setToken', payload),
        // setNameAct: ( context, payload ) => context.commit('setName', payload),
        // setEmailAct: ( context, payload ) => context.commit('setEmail', payload),
        // setPermissionAct: ( context, payload ) => context.commit('setPermission', payload),
        setDeslogarAct: ( context ) => context.commit('SET_DESLOGAR'),

    }

}
