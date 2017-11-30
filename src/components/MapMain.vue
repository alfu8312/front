<template>
  <v-layout d-flex justify-center>
    <v-menu offset-y v-model="showMenu" absolute full-width>
      <v-card class="portrait" height="300px" slot="activator"></v-card>
    </v-menu>
  </v-layout>
</template>

<script>
export default {
  name: 'mapMain',
  data: function () {
    return {
      showMenu: false
    }
  }
}
</script>
