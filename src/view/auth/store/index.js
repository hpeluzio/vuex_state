export default {
    namespaced: true,
    state: {
        logado: false,
        token: '',
        nome: '',
        email: '',
        permission: 'user'
    },
    getters: {
        logado: state => state.logado,
        token: state => state.token,
        nome: state => state.nome,
        email: state => state.email,
        permission: state => state.permission
    },    
    mutations: {
        setLogado: (state, payload) => state.logado = payload,
        setToken: (state, payload) => state.token = payload,
        setNome: (state, payload) => state.nome = payload,
        setEmail: (state, payload) => state.email = payload,
        setPermission: (state, payload) => state.permission = payload,
        setLogar: (state, payload) => 
        {   console.log('OLA')
            state.logado = payload.logado
            state.token = payload.token
            state.nome = payload.nome
            state.email = payload.email
            state.permission = payload.permission
        },        
        setDeslogar: (state, payload) => 
        {
                state.logado = false
                state.token = ''
                state.nome = ''
                state.email = ''
                state.permission = 'user'
        }
    },
    actions: {
        setLogarAct: ( context, payload ) => context.commit('setLogar', payload),
        setLogadoAct: ( context, payload ) => context.commit('setLogado', payload),
        setTokenAct: ( context, payload ) => context.commit('setToken', payload),
        setNomeAct: ( context, payload ) => context.commit('setNome', payload),
        setEmailAct: ( context, payload ) => context.commit('setEmail', payload),
        setPermissionAct: ( context, payload ) => context.commit('setPermission', payload),
        setDeslogarAct: ( context ) => context.commit('setDeslogar'),

    }

}
