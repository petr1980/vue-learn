export default {
  state: {
    loading: false,
    error: null
  },

  getters: {
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  },

  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    }
  },

  actions: {
    setLoading ({ commit }, payload) {
      commit('setLoading', payload)
    }
  }

}
