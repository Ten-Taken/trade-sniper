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
    priceChartData: {
      labels: [],
      datasets: [
        {
          label: 'Price',
          borderColor: '#3ac1f2',
          data: []
        }
      ]
    },
    priceChartOptions: {
      responsive: true,
      maintainAspectRatio: false
    },
    volumeChartData: {
      labels: [],
      datasets: [
        {
          label: 'Volume',
          borderColor: '#b23ac4',
          data: []
        }
      ]
    },
    volumeChartOptions: {
      responsive: true,
      maintainAspectRatio: false
    }
  },
  getters: {
    getAppDrawer: state => { return state.appDrawer },
    getAppTitle: state => { return state.appTitle },
    getPriceChartData: state => { return state.priceChartData },
    getPriceChartOptions: state => { return state.priceChartOptions },
    getVolumeChartData: state => { return state.volumeChartData },
    getVolumeChartOptions: state => { return state.volumeChartOptions },
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
    UPDATE_PRICE_CHART_DATA (state, priceInfo) {
      state.priceChartData = priceInfo
      console.log('Triggering Chart Re-render')
      state.redrawStockChart += 1
    },
    UPDATE_VOLUME_CHART_DATA (state, volumeInfo) {
      state.volumeChartData = volumeInfo
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
          let priceInfo = {
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
            ]
          }
          let volumeInfo = {
            labels: [],
            datasets: [
              {
                label: 'Volume',
                backgroundColor: '#b23ac4',
                data: []
              }
            ]
          }
          for (var i = 0; i < response.data.length; i++) {
            priceInfo.labels.push(response.data[i].label)
            volumeInfo.labels.push(response.data[i].label)
            priceInfo.datasets[0].data.push(response.data[i].open)
            volumeInfo.datasets[0].data.push(response.data[i].volume)
          }
          context.commit('UPDATE_PRICE_CHART_DATA', priceInfo)
          context.commit('UPDATE_VOLUME_CHART_DATA', volumeInfo)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
})

export default store
