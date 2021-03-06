/**
 * Created by Administrator on 2017/6/17 0017.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import activities from './modules/activities'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    activities
  }
})
