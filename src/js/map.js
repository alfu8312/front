export default {
  init: function(xPos, yPos) {
    debugger
    /* global naver */
    var mapOptions = {
      center: new naver.maps.LatLng(yPos || 37.557259, xPos || 127.151538),
      zoom: 11
    }
    /* eslint-disable no-new */
    new naver.maps.Map('map', mapOptions)
  }
}
