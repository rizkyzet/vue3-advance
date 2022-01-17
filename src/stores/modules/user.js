export default {
    namespaced:true,
    state:{
        username: '',
        credential: {},
    },
    mutations: {
        setUsername(state, value) {
            state.username = value;
        },
        setCredential(state, payload) {
            state.credential = payload;
        }
    },
    actions: {
        incrementAction(context) {
            context.commit('increment')
        },
        incrementActionAsync(context) {
            setInterval(() => {
                context.commit('increment')
            }, 1000)
        },
        async getCredential({
            commit
        }) {
            const response = await fetch('https://randomuser.me/api');
            const {
                results
            } = await response.json();

            commit('setCredential', results[0])
        }
    }
}