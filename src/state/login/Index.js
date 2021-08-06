const loginstate = {
    namespaced: true,
    state: () => ({
        isLoggedIn: false,
    }),
    mutations: {
        anylogin(state, payload) {
            state.isLoggedIn = payload.islogin;
        }
    },
    getters: {
        getStatusLogin(state) {
            return state.isLoggedIn;
        }
    },
    actions: {
        login(state) {
            state.commit('anylogin', { islogin: true });
        },
        logout(state) {
            state.commit('anylogin', { islogin: false });
        }
    }
};

export default loginstate;