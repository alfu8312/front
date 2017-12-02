import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MapMain from '@/components/MapMain'
import ErrorPage from '@/components/common/ErrorPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/help',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'MapMain',
      component: MapMain
    },
    {
      path: '*',
      name: 'pageNotFound',
      component: ErrorPage,
      props: {code: '404'}
    }
  ]
})
