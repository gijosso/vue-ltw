import Vue from 'vue'
import Vuex from 'vuex'
import madjoh from './madjoh'
import profile from './profile'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    app_name: 'Learn The World',
    backend_url: 'http://localhost:3000/'
  },
  modules: {
    madjoh: madjoh,
    profile: profile
  }
});
