<template>
  <v-app>
    <sniper-nav-drawer />
    <sniper-toolbar />
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
    <sniper-footer />
  </v-app>
</template>

<script>
import SniperToolbar from '@/components/SniperToolbar'
import SniperNavDrawer from '@/components/SniperNavDrawer'
import SniperFooter from '@/components/SniperFooter'

export default {
  components: {
    SniperToolbar,
    SniperNavDrawer,
    SniperFooter
  },
  data () {
    return {

    }
  },
  name: 'App'
}
</script>
