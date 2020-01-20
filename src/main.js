import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Shy from './components/index.js';
// import '../lib/shy-ui.css';

Vue.use(Shy);
Vue.config.productionTip = false;
// toast
Vue.prototype.$toast = Shy.ShyToast;
// loading
Vue.prototype.$loading = Shy.ShyLoading;
// dialog
Vue.prototype.$dialog = Shy.ShyDialog;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
