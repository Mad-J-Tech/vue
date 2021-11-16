import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';

//BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'; //追加
Vue.use(BootstrapVue); //追加
Vue.use(IconsPlugin); //追加
import 'bootstrap/dist/css/bootstrap.css'; //追加
import 'bootstrap-vue/dist/bootstrap-vue.css'; //追加

//router
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
