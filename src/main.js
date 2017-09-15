// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import store from './store'

/* to register my component globally */
import Panel from './components/Panel'
Vue.component('panel', Panel)

Vue.config.productionTip = false
Vue.use(BootstrapVue)

import 'babel-polyfill'
import Datatable from 'vue2-datatable-component'
Vue.use(Datatable) // done!

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }, 
})
