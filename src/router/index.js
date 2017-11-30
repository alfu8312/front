import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MapMain from '@/components/MapMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hellp',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/map',
      name: 'MapMain',
      component: MapMain
    }
  ]
})
