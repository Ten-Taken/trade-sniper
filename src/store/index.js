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
    UPDATE_STOCK_CHART_DATA (state, stockInfo) {
      state.stockChartData = stockInfo
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
          let stockInfo = {
            labels: [],
            datasets: [
              {
                label: 'Price',
                borderColor: '#3ac1f2',
                pointBorderColor: 'yellow',
                borderWidth: 2,
                pointBorderWidth: 1,
                pointRadius: 2,
                pointHoverRadius: 8,
                showLine: true,
                spanGaps: true,
                pointHoverBackgroundColor: 'green',
                data: []
              }
              // {
              //   label: 'Volume / 100',
              //   borderColor: '#b23ac4',
              //   data: []
              // }
            ]
          }
          for (var i = 0; i < response.data.length; i++) {
            stockInfo.labels.push(response.data[i].label)
            stockInfo.datasets[0].data.push(response.data[i].open)
            // stockInfo.datasets[1].data.push(1 + ((response.data[i].volume) / 100))
          }
          context.commit('UPDATE_STOCK_CHART_DATA', stockInfo)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
})

export default store
