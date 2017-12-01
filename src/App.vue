<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="moveToMenu('map')">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Go Map</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Map</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017 Maps</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: function () {
      return {
        drawer: null
      }
    },
    methods: {
      moveToMenu: function (menuName) {
        if (!menuName) {
          alert('empty page')
          return
        }
        this.$router.push(menuName)
      }
    },
    props: {
      source: String
    }
  }
</script>