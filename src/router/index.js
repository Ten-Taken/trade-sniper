import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import StockLookup from '@/components/StockLookup'
import ScanHistory from '@/components/ScanHistory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/StockLookup',
      name: 'StockLookup',
      component: StockLookup
    },
    {
      path: '/ScanHistory',
      name: 'ScanHistory',
      component: ScanHistory
    }
  ]
})
