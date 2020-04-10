import Vue from 'vue'
import Vuex from 'vuex'
import Config from './src/assets/Config.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        Config: Config
    },
    getters: {
        Config: state => state.Config
    }
  })