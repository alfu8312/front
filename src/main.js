import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import axios from 'axios'
import VueLodash from 'vue-lodash'

// axios
axios.defaults.baseURL = 'http://192.168.56.111:9200/'
Vue.prototype.$http = axios

// plugin
Vue.use(VueLodash, { name: '$_' })
Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App)
})
