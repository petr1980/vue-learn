import Vue from 'vue'
import Vuex from 'vuex'

import common from './common'
import user from './user'
import test from './test'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    user,
    test
  }
})
