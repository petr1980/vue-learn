import Vue from 'vue'
// import axios from 'axios'

export default {
  state: {
    posts: [],
    endpoint: 'https://jsonplaceholder.typicode.com/posts/'
  },
  getters: {
    getPosts (state) {
      return state.posts
    }
  },
  mutations: {
    getAllPosts (state, payload) {
      state.posts = payload
    }
  },
  actions: {
    getAllPosts ({ commit, state }) {
      Vue.http.get(state.endpoint)
        .then(response => {
          return response.json()
        })
        .then(response => {
          commit('getAllPosts', response)          
        })
        .catch(error => {
          console.log('-----error-------')
          console.log(error)
        })

    }
  }
}