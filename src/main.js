import Vue from 'vue'
import App from './App.vue'

import './plugins/vuetify';
import store from './store';
import router from './router';
import '@babel/polyfill';
import Vuetify from 'vuetify';

Vue.config.productionTip = false

Vue.config.productionTip = false
Vue.use(Vuetify);

const app = new Vue({
  vuetify : new Vuetify(),
  router,
  store,
  render: h => h(App)
}).$mount('#app');
if (window.Cypress) {
  window.app = app;
}