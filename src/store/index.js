import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: true,
    articles: []
  },
  mutations: {
    
  },
  actions: {

  },
  modules: {},
  getters: {
    status: state => state.status,
    articles: state => state.articles
  },
})
