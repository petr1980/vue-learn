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
    async getAllPosts ({ commit, state }) {
      // async await
      let get = await Vue.http.get(state.endpoint)
      let response = await get.json()
      try {
        commit('getAllPosts', response)   
      } catch (error) {
        console.log('-----error-------')
        console.log(error)
      }

    }
  }
}