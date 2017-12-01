export default {
  init: function () {
    debugger
    /* global naver */
    var mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10
    }
    /* eslint-disable no-new */
    new naver.maps.Map('map', mapOptions)
  }
}
