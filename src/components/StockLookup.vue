<template>
  <div>
    <div class="mx-auto my-2 display-1 text-xs-center yellow--text">
      {{ title }}
    </div>
    <br />
    <v-layout column>
      <v-flex>
        <v-layout row wrap>
          <v-flex xs4 md2 offset-xs1 offset-md5>
            <v-text-field
              v-model="tickerSymbol"
              name="input-2-3"
              clearable
              label="Search"
              class="input-group--focused"
              color="orange"
              append-icon="attach_money"
              dark
              single-line
            ></v-text-field>
          </v-flex>
          <v-flex xs2 offset-xs1 offset-md0>
            <v-btn
              class="mx-auto"
              @click="lookupTicker(tickerSymbol)"
              small
              color="success"
            >Go</v-btn>
          </v-flex>
          <v-flex xs10 offset-xs1>
            <stock-lookup-table />
          </v-flex>
        </v-layout>
        <br />
        <br />
      </v-flex>
      <v-flex>
        <price-chart :key="getRedrawStockChart" :chartData="getPriceChartData" :options="getPriceChartOptions"/>
      </v-flex>
      <v-flex>
        <volume-chart :key="getRedrawStockChart" :chartData="getVolumeChartData" :options="getVolumeChartOptions"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import PriceChart from '@/components/PriceChart'
import VolumeChart from '@/components/VolumeChart'
import StockLookupTable from '@/components/StockLookupTable'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'StockLookup',
  components: {
    PriceChart,
    VolumeChart,
    StockLookupTable
  },
  data () {
    return {
      title: 'Stock Lookup',
      tickerSymbol: ''
    }
  },
  computed: {
    ...mapGetters([
      'getPriceChartData',
      'getPriceChartOptions',
      'getVolumeChartData',
      'getVolumeChartOptions',
      'getRedrawStockChart'
    ])
  },
  methods: {
    ...mapActions([
      'lookupTicker'
    ])
  }
}
</script>

<style scoped>

</style>
