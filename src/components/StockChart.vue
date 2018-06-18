
<script>
import { Line, mixins } from 'vue-chartjs'

export default {
  name: 'StockChart',
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  },
  components: {

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
