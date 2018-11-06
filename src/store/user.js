import fb from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

class User {
  constructor (id) {
    this.id = id
  }
}

export default {
  state: {
    user: null
  },

  getters: {
    user (state) {
      return state.user
    }
  },

  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },

  actions: {
    registerUser ({ commit }, { email, password }) {
      commit('setLoading', true)
      fb.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit('setUser', new User(user.user.uid))
          commit('setLoading', false)
        })
        .catch(e => {
          commit('setLoading', false)
          console.log(e)
        })
    }
  }

}
