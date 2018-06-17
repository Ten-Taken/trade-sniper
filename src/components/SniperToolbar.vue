<template>
  <v-toolbar
    app
    dense
    fixed
    clipped-left
    color="success"
  >
    <v-toolbar-side-icon
      @click.stop="toggleAppDrawer('Toggling Drawer')"
    >
    </v-toolbar-side-icon>
    <v-toolbar-title
      class="cursor-my-pointer"
      @mouseover="highlighted = true"
      @mouseout="highlighted = false"
      :class = "{'yellow--text': highlighted, 'white--text': !highlighted}"
      @click="$router.push({ name: 'Home' })"
    >
      {{ getAppTitle }}
    </v-toolbar-title>
    <v-spacer />
    <v-tooltip bottom>
      <v-btn icon slot="activator" @click="$router.push({ name: 'Home' })">
        <v-icon>gps_fixed</v-icon>
      </v-btn>
      <span>Home</span>
    </v-tooltip>
    <v-tooltip bottom>
      <v-btn icon slot="activator" @click="$router.push({ name: 'StockLookup' })">
        <v-icon>search</v-icon>
      </v-btn>
      <span>Stock Lookup</span>
    </v-tooltip>
    <v-tooltip bottom>
      <v-btn icon slot="activator" @click="$router.push({ name: 'ScanHistory' })">
        <v-icon>history</v-icon>
      </v-btn>
      <span>Scan History</span>
    </v-tooltip>
    <v-toolbar-items>
      <v-btn flat>{{ accountAction }}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SniperToolbar',
  components: {

  },
  data () {
    return {
      accountAction: 'Log Out',
      highlighted: false,
      activeRoute: 'Home'
    }
  },
  computed: {
    ...mapGetters([
      'getAppTitle'
    ])
  },
  methods: {
    ...mapActions([
      'toggleAppDrawer'
    ])
  }
}
</script>

<style scoped>
  .cursor-my-pointer {
    cursor: pointer;
  }
</style>
