<template>
  <v-navigation-drawer fixed v-model="drawerRight" right clipped app width="600">
    <v-data-table v-bind:headers="headers" :items="items" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item._source.tradeDate }}</td>
        <td class="text-xs-right">{{ props.item._source.aptArea }}</td>
        <td class="text-xs-right">{{ props.item._source.aptFloor }}</td>
        <td class="text-xs-right">{{ props.item._source.tradePrice }}</td>
      </template>
    </v-data-table>
  </v-navigation-drawer>
</template>

<script>
import map from '@/js/map.js'

export default {
  name: 'rightInfo',
  data: function() {
    return {
      headers: [
        { text: 'tradeDate', value: 'tradeDate' },
        { text: 'aptArea', value: 'aptArea' },
        { text: 'aptFloor', value: 'aptFloor' },
        { text: 'tradePrice', value: 'tradePrice' }
      ],
      items: []
    }
  },
  methods: {
    onLoad: function() {
      // TODO aptId 로 실거래가 조회 요청 map.tradeList 후 리턴 받은 데이터로 right 그리기
      const _this = this
      map.tradeList(this.aptId).then(lists => {
        console.log(lists[0]._source.aptName)
        _this.items = lists
      })
    }
  },
  mounted: function() {},
  props: {
    drawerRight: {
      type: Boolean,
      default() {
        return false
      }
    },
    aptId: {
      type: String,
      default() {
        return null
      }
    }
  },
  watch: {
    aptId: function(val, oldVal) {
      if (val !== oldVal) {
        this.onLoad()
      }
    }
  }
}
</script>


