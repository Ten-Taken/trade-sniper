<template>
  <v-toolbar
    app
    dense
    fixed
    clipped-left
    color="darkGreen"
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
      <v-btn icon slot="activator"
        @click="$router.push({ name: 'Home' });highlightRouteIcon()"
      >
        <v-icon :class="{'yellow--text': activeRoute === '/'}">gps_fixed</v-icon>
      </v-btn>
      <span>Home</span>
    </v-tooltip>
    <v-tooltip bottom>
      <v-btn icon slot="activator"
        @click="$router.push({ name: 'StockLookup' });highlightRouteIcon()"
      >
        <v-icon :class="{'yellow--text': activeRoute === '/StockLookup'}">search</v-icon>
      </v-btn>
      <span>Stock Lookup</span>
    </v-tooltip>
    <v-tooltip bottom>
      <v-btn icon slot="activator"
        @click="$router.push({ name: 'ScanHistory' });highlightRouteIcon()"
      >
        <v-icon :class="{'yellow--text': activeRoute === '/ScanHistory'}">history</v-icon>
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
      activeRoute: ''
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
    ]),
    currentPath () {
      let path = this.$router.resolve(location)
      return path.location.path
    },
    highlightRouteIcon () {
      this.activeRoute = this.currentPath()
      console.log(this.activeRoute)
    }
  },
  mounted () {
    this.highlightRouteIcon()
  }
}
</script>

<style scoped>
  .cursor-my-pointer {
    cursor: pointer;
  }
</style>
