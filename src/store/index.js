import { createStore } from "vuex";

const store = createStore({
    state:{
        contadorGlobal: 0,
    },
    mutations:{
        incrementar(state, quantidade) {
            state.contadorGlobal += quantidade;
        },
    },
    actions: {
        comprar({commit}, quantidade ){
            commit("incrementar", quantidade);
        },
    },
    getters: {
        contadorGlobal: (state) => state.contadorGlobal,
    },
});
export default store;