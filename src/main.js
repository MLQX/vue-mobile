// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Index from '@/components/Index'
import '../lib/mui.min.css'
import 'mint-ui/lib/style.min.css'
import { Header } from 'mint-ui'

Vue.config.productionTip = false

Vue.component(Header.name, Header)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  render: c => c(Index)
})
