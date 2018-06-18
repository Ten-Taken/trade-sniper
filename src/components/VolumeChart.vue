<script>
import { Bar, mixins } from 'vue-chartjs'

export default {
  name: 'VolumeChart',
  extends: Bar,
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
