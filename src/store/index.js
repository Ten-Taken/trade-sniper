import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto' // Polyfills a Vuex dependency in older browsers
// import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    appTitle: process.env.APP_TITLE,
    appDrawer: false
  },
  getters: {
    getAppDrawer: state => { return state.appDrawer },
    getAppTitle: state => { return state.appTitle }
  },
  mutations: {
    TOGGLE_APP_DRAWER (state, toggle) {
      state.appDrawer = !state.appDrawer
      if (state.appDrawer) {
        console.log('App Drawer Opened.')
      } else {
        console.log('App Drawer Closed.')
      }
    }
  },
  actions: {
    toggleAppDrawer (context, msg) {
      console.log(msg)
      context.commit('TOGGLE_APP_DRAWER', '')
    }
  }
})

export default store
