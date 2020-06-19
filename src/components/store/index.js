import Vuex from 'vuex';
import Vue from 'vue';
import createPersistedState from 'vuex-persistedstate';
import timer from './modules/timer';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
        timer
    },
    state: {

    },
    mutations: {
  
    },
    actions: {
  
    },
    getters: {
  
    }
})
