import './assets/style/main.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import vueResource from 'vue-resource'
import fb from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

Vue.config.productionTip = false
Vue.use(vueResource)

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyCwDtE5HM4Tdg5Tbku1RwbFddT-jJZiFfU',
      authDomain: 'family-calculator.firebaseapp.com',
      databaseURL: 'https://family-calculator.firebaseio.com',
      projectId: 'family-calculator',
      storageBucket: 'family-calculator.appspot.com',
      messagingSenderId: '390485704646'
    })
    this.$store.dispatch('getAllPosts')
  }
}).$mount('#app')
