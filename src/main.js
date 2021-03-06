// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueWechatTitle from 'vue-wechat-title'
import Vant from 'vant';
import 'vant/lib/index.css';
import './common/rem.js'
import Api from './requests/api.js'

Vue.prototype.Api = Api;

Vue.config.productionTip = false
Vue.use(VueWechatTitle)
Vue.use(Vant)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
