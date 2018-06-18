<template>
  <v-data-table
    :headers="headers"
    :items="stocks"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.symbol }}</td>
      <td class="text-xs-left">{{ props.item.company }}</td>
      <td class="text-xs-left">{{ props.item.exchange }}</td>
      <td class="text-xs-left">{{ props.item.industry }}</td>
      <td class="text-xs-left">{{ props.item.sector }}</td>
      <td class="text-xs-left">{{ props.item.website }}</td>
    </template>
  </v-data-table>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  name: 'StockLookupTable',
  components: {

  },
  data () {
    return {
      headers: [
        {
          text: 'SYMBOL',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Company', sortable: false, value: 'calories' },
        { text: 'Exchange', sortable: false, value: 'fat' },
        { text: 'Industry', sortable: false, value: 'carbs' },
        { text: 'Sector', sortable: false, value: 'protein' },
        { text: 'Website', sortable: false, value: 'iron' }
      ],
      stocks: [
        {
          value: false,
          symbol: 'ARR',
          company: 'Armour Residential',
          exchange: 'NYSE',
          industry: 'REIT',
          sector: 'Financials',
          website: 'http://investor.armourreit.com'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
