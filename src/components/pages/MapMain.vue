<template>
  <v-layout d-flex justify-center>
    <!--v-navigation-drawer fixed v-model="drawerRight" :stateless="right" right clipped app>
    </v-navigation-drawer-->
    <right-info :drawerRight="isShow" :aptId="clickedAptId"></right-info>
    <v-menu offset-y absolute full-width>
      <v-card id="map" class="portrait" height="800px" slot="activator">
      </v-card>
    </v-menu>
  </v-layout>
</template>

<script>
import map from '@/js/map.js'
import rightInfo from '@/components/pages/RightInfo.vue'

export default {
  name: 'mapMain',
  components: {
    rightInfo
  },
  data: function() {
    return {
      nmap: null,
      clickedAptId: null,
      isShow: false
    }
  },
  methods: {
    clickMarker: function(aptId) {
      console.log(this.clickedAptId == null || this.clickedAptId !== aptId)
      if (this.clickedAptId == null || this.clickedAptId !== aptId) {
        this.isShow = true
        this.clickedAptId = aptId
        // TODO aptId 로 실거래가 조회 요청 map.tradeList 후 리턴 받은 데이터로 right 그리기
        console.log('clickMarker : ' + aptId)
      } else if (this.clickedAptId === aptId) {
        this.isShow = !this.isShow
      }
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
  }
}
</script>
