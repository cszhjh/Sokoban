import Vue from 'vue'
import App from './App.vue'
import store from "./store"

import VueParticles from 'vue-particles'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'

import toast from "components/common/toast";

Vue.config.productionTip = false

Vue.use(VueParticles)
Vue.use(ElementUI)

Vue.use(toast);

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
