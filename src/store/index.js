import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto' // Polyfills a Vuex dependency in older browsers
import axios from 'axios'

/* API Definitions */
const iexTradingAPI = axios.create({
  baseURL: 'https://api.iextrading.com/1.0',
  timeout: 1000
})

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    appTitle: process.env.APP_TITLE,
    appDrawer: false,
    redrawStockChart: 0,
    stockChartData: {
      labels: [],
      datasets: [
        {
          label: 'Price',
          borderColor: '#3ac1f2',
          data: []
        },
        {
          label: 'Volume',
          borderColor: '#b23ac4',
          data: []
        }
      ]
    },
    stockChartOptions: {
      responsive: true,
      maintainAspectRatio: false
    }
  },
  getters: {
    getAppDrawer: state => { return state.appDrawer },
    getAppTitle: state => { return state.appTitle },
    getStockChartData: state => { return state.stockChartData },
    getStockChartOptions: state => { return state.stockChartOptions },
    getRedrawStockChart: state => { return state.redrawStockChart }
  },
  mutations: {
    TOGGLE_APP_DRAWER (state, toggle) {
      state.appDrawer = !state.appDrawer
      if (state.appDrawer) {
        console.log('App Drawer Opened.')
      } else {
        console.log('App Drawer Closed.')
      }
    },
    UPDATE_STOCK_CHART_DATA (state, stockData) {
      for (var i = 0; i < stockData.length; i++) {
        state.stockChartData.labels.push(stockData[i].label)
        // price "open" per result
        state.stockChartData.datasets[0].data.push(stockData[i].open)
        // volume per result
        // state.stockChartData.datasets[1].data.push(stockData[i].volume)
      }
      console.log('Triggering Chart Re-render')
      state.redrawStockChart += 1
    }
  },
  actions: {
    toggleAppDrawer (context, msg) {
      console.log(msg)
      context.commit('TOGGLE_APP_DRAWER', '')
    },
    lookupTicker (context, tickerSymbol) {
      console.log('Querying symbol: ' + tickerSymbol)
      iexTradingAPI.get('/stock/' + tickerSymbol + '/chart/1d')
        .then(function (response) {
          context.commit('UPDATE_STOCK_CHART_DATA', response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
})

export default store
