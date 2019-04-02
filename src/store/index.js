
import Vue from 'vue'
import Vuex from 'vuex'

import RouteModule from './modules/route'
import ListModule from './modules/list'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    route: RouteModule,
    list: ListModule,
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

export default store
