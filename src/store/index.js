import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      status: false,
      fullName: '',
      email: ''
    },
    articles: []
  },
  mutations: {
    
  },
  actions: {

  },
  modules: {},
  getters: {
    user: state => state.user
  },
})
