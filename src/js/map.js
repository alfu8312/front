import axios from 'axios'
var map = null
const baseURI = 'http://192.168.56.111:9200'

export default {
  callbackMarker: null,
  clickedId: null,
  init: function(callback, xPos, yPos) {
    this.callbackMarker = callback
    /* global naver */
    var mapOptions = {
      // x: 127.1415918, y: 37.5555079 : 강동 롯데
      center: new naver.maps.Point(xPos || 127.1491879, yPos || 37.5601061),
      zoom: 11
    }
    map = new naver.maps.Map('map', mapOptions)
    this.findAptList(map.bounds)
    return map
  },
  findAptList: function(bounds) {
    var _this = this
    // TODO 조회범위 내에서 근접한 아파트의 경우 조회 우선순위(최근 거래 건수, 검색횟수 등) 적용 하여 마커 겹치지 않도록 변경
    var body = {
      query: {
        bool: {
          must: {
            match_all: {}
          },
          filter: {
            geo_bounding_box: {
              position: {
                top_right: {
                  lat: bounds._ne._lat,
                  lon: bounds._ne._lng
                },
                bottom_left: {
                  lat: bounds._sw._lat,
                  lon: bounds._sw._lng
                }
              }
            }
          }
        }
      }
    }
    axios.get(`${baseURI}/apartment/apartment/_search`, body).then(results => {
      results.data.hits.hits.map(result => _this.makeMarker(result))
    })
  },
  makeMarker: function(result) {
    var marker = new naver.maps.Marker({
      map: map,
      position: new naver.maps.Point(
        result._source.position.lon,
        result._source.position.lat
      )
    })

    var contentString = [
      '<div class="_infowindow_content" style="padding: 19px 20px 0;">',
      `   <h3>${result._source.aptName}</h3>`,
      `   <p>준공 : ${result._source.buildYear}년<br>`,
      `      주소 : ${result._source.addrNm} | ${result._source.roadNm}`,
      '   </p>',
      '</div>'
    ].join('')

    // TODO 스타일 변경좀.. vue 컴퍼넌트 사용 가능 한지 확인
    var infowindow = new naver.maps.InfoWindow({
      content: contentString,
      maxWidth: 350,
      backgroundColor: '#eee',
      borderColor: '#8d8d8d',
      borderWidth: 2,
      anchorSize: new naver.maps.Size(30, 30),
      anchorSkew: true,
      anchorColor: '#eee',
      pixelOffset: new naver.maps.Point(20, -20)
    })
    var _this = this
    naver.maps.Event.addListener(marker, 'mouseover', function(e) {
      infowindow.open(map, marker)
      // this.tradeList(result._id)
    })
    naver.maps.Event.addListener(marker, 'mouseout', function(e) {
      infowindow.close()
    })
    naver.maps.Event.addListener(marker, 'click', function(e) {
      if (_this.callbackMarker) {
        _this.callbackMarker(result._id)
      }
    })
  },
  tradeList: function(apiId) {
    var body = {
      query: {
        bool: {
          must: {
            match_all: {}
          },
          filter: {
            term: {
              aptId: `${apiId}`
            }
          }
        }
      },
      sort: [
        {
          tradeDate: {
            order: 'desc'
          }
        }
      ]
    }
    return axios.post(`${baseURI}/trade/trade/_search`, body).then(results => {
      return results.data.hits.hits
    })

    // TODO 최근 실거래 데이터 조회 => 표, 차트(vue-chart.js?)
    // default 조회 기간 설정 필요

    // 최근 거래 데이터 조회 (평형별 그룹 필요함)
    // GET trade/trade/_search
    // {
    //   "query": {
    //     "bool": {
    //       "must": {
    //         "match_all": {}
    //       },
    //       "filter": {
    //         "term": {
    //           "aptId": "11740-4214"
    //         }
    //       }
    //     }
    //   },
    //   "sort": [
    //     {
    //       "tradeDate": {
    //         "order": "desc"
    //       }
    //     }
    //   ]
    // }

    // 평형별 거래 집계(min, max, avg, count 등)
    // GET trade/trade/_search
    // {
    //   "size" : 0,
    //   "query": {
    //     "bool": {
    //       "must": {
    //         "match_all": {}
    //       },
    //       "filter": {
    //         "term": {
    //           "aptId": "11740-4214"
    //         }
    //       }
    //     }
    //   },
    //   "aggs": {
    //     "area": {
    //       "terms": {
    //         "field": "aptArea",
    //         "size": 10,
    //         "order": {
    //           "_key": "asc"
    //         }
    //       },
    //       "aggs": {
    //         "stat": {
    //           "stats": {
    //             "field": "tradePrice"
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  }
}
