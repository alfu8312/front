<template>
  <v-layout d-flex justify-center>
    <v-menu offset-y v-model="showMenu" absolute full-width>
      <v-card id="map" class="portrait" height="800px" slot="activator">
      </v-card>
    </v-menu>
  </v-layout>
</template>

<script>
import map from '@/js/map.js'

export default {
  name: 'mapMain',
  data: function() {
    return {
      showMenu: false,
      nmap: null
    }
  },
  methods: {
    clickMarker: function(m) {
      console.log('In clickMarker')
      console.log(m)
      this.showMenu = true
    }
  },
  mounted: function() {
    this.nmap = map.init()
    var _this = this
    /* global naver */
    var goduk = new naver.maps.Point(127.1415918, 37.5555079)
    /* eslint-disable no-new */
    var marker = new naver.maps.Marker({
      map: this.nmap,
      position: goduk,
      title: '강동롯데캐슬'
    })
    naver.maps.Event.addListener(marker, 'click', function(e) {
      _this.clickMarker(marker)
    })
  }
}
</script>
