<template>
  <v-navigation-drawer
    :value="getAppDrawer"
    app
    fixed
    stateless
    clipped
    disable-resize-watcher
  >
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SniperNavDrawer',
  components: {

  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'getAppDrawer'
    ])
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
