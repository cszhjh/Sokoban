import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VueParticles from 'vue-particles'

import toast from 'components/common/toast'

import './plugins/element.js'

Vue.config.productionTip = false

Vue.use(VueParticles)

Vue.use(toast)

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
