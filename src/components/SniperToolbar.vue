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
    <v-toolbar-title class="white--text">{{ getAppTitle }}</v-toolbar-title>
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

</style>
