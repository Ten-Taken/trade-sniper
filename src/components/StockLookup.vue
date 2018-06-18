<template>
  <div>
    <div class="mx-auto my-2 display-1 text-xs-center yellow--text">
      {{ title }}
    </div>
    <br />
    <v-layout column>
      <v-flex>
        <v-layout row>
          <v-flex xs12 md2 offset-md5>
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
          <v-flex xs12 md2>
            <v-btn
              @click="lookupTicker(tickerSymbol)"
              small
              color="success"
            >Go</v-btn>
          </v-flex>
        </v-layout>
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
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'StockLookup',
  components: {
    PriceChart,
    VolumeChart
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
