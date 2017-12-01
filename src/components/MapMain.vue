<template>
  <v-layout d-flex justify-center>
    <v-menu offset-y v-model="showMenu" absolute full-width>
      <v-card id="map" class="portrait" height="800px" slot="activator">
      </v-card>
    </v-menu>
  </v-layout>
</template>

<script>

import map from '../js/map.js'

export default {
  name: 'mapMain',
  data: function () {
    return {
      showMenu: false
    }
  },
  mounted: function () {
    map.init()
  }
}
</script>
