import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
    state: state,
    actions: {
        changeUsername(ctx,username) {
            ctx.commit('changeUsername',username);
        }
    },
    mutations: {
        changeUsername(state,username){
            state.username = username;
            localStorage.username = username;
        }
    }
})