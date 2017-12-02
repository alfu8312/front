<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed v-model="drawerRight" :stateless="right" right clipped app>
      <v-list dense>
        <!--v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile-->
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
    <v-toolbar color="amber" dark fixed app clipped-right>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-text-field light solo prepend-icon="search" placeholder="Search" style="max-width: 500px; min-width: 128px"></v-text-field>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer fixed v-model="drawer" :stateless="left" app>
      <v-list dense>
        <v-list-tile @click.stop="left = !left">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer temporary v-model="left" fixed></v-navigation-drawer>
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-navigation-drawer right temporary v-model="right" fixed></v-navigation-drawer>
    <v-footer color="blue-grey" class="white--text" app>
      <span>Vuetify</span>
      <v-spacer></v-spacer>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: function() {
    return {
      drawer: null,
      drawerRight: null,
      right: null,
      left: null
    }
  },
  methods: {
    moveToMenu: function(menuName) {
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