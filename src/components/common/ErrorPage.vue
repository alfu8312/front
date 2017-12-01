<template>
    <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title class="headline">Error Code : {{ code }}</v-card-title>
        <v-card-text>{{ messages[code] }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="$router.go(-1)">back</v-btn>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      dialog: true,
      messages: {
        '404': 'Page Not Found : ' + this.$route.fullPath
      }
    }
  },
  props: {
    code: {
      type: String,
      required: true
    }
  }
}
</script>

