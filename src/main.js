import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './css/styles.css'
import PrimaryButton from './components/global/PrimaryButton.vue'
Vue.component('pry-btn', PrimaryButton)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
