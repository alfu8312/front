<template>
  <v-layout d-flex justify-center>
    <v-navigation-drawer fixed v-model="drawerRight" :stateless="right" right clipped app>
      <!--v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-->
    </v-navigation-drawer>
    <v-menu offset-y absolute full-width>
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
      nmap: null,
      drawerRight: false,
      isShow: false,
      right: null
    }
  },
  methods: {
    clickMarker: function(isOpen, aptId) {
      console.log('In clickMarker')
      this.drawerRight = isOpen
      if (isOpen) {
        // TODO aptId 로 실거래가 조회 요청 map.tradeList 후 리턴 받은 데이터로 right 그리기
        console.log(aptId)
      }
    },
    isShowRight: function() {
      debugger
      return this.showRight && this.drawerRight
    }
  },
  mounted: function() {
    var _this = this
    this.nmap = map.init(_this.clickMarker)
    // /* global naver */
    // var goduk = new naver.maps.Point(127.1415918, 37.5555079)
    /* eslint-disable no-new */
    // var marker = new naver.maps.Marker({
    //   map: this.nmap,
    //   position: goduk,
    //   title: '강동롯데캐슬'
    // })
    // naver.maps.Event.addListener(marker, 'click', function(e) {
    //   _this.clickMarker(marker)
    // })
  },
  props: {
    showRight: false
  }
}
</script>
