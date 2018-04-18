require(`quasar/dist/quasar.${__THEME}.css`)

import Vue from 'vue'
import Quasar from 'quasar'
import wrouter from './router'
import mobileRouter from './mobileRouter'

Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework
let router = wrouter
// console.log(window.innerWidth)
if (window.navigator.appVersion.indexOf('Mobile') >= 0 || window.innerWidth <= 1024) {
  router = mobileRouter
  require(`./themes/moblie.${__THEME}.styl`)
}
window.onresize = function () {
  if (window.innerWidth <= 1024 && window.navigator.appVersion.indexOf('Mobile') < 0) {
    location.reload()
  }
}
if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/animate'
import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
import 'quasar-extras/material-icons'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    data: {
      eventHub: new Vue()
    },
    render: h => h(require('./App').default)
  })
})

let socketVue = new Vue()
Vue.prototype.socket = socketVue
