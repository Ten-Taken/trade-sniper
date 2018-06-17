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
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'StockLookup',
  components: {

  },
  data () {
    return {
      title: 'Stock Lookup'
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
