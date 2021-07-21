import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@vant/touch-emulator'
import 'normalize.css'
import './utils/flexible'

Vue.config.productionTip = false

// require('./mock')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
