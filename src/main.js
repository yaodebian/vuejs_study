// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '../node_modules/pikaday/css/pikaday.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    name: 'yaodebian',
    age: 20
  },
  router,
  components: { App },
  template: '<App/>'
})
