import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

//BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'; //追加
Vue.use(BootstrapVue); //追加
Vue.use(IconsPlugin); //追加
import 'bootstrap/dist/css/bootstrap.css'; //追加
import 'bootstrap-vue/dist/bootstrap-vue.css'; //追加

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
