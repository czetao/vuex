// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入element-ui 样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import store from './vuex/store'

//引入axios
import axios from 'axios'
//挂载在Vue的原型上。
Vue.prototype.axios = axios

Vue.config.productionTip = false
//注册elementui
Vue.use(ElementUI);
/* eslint-disable no-new   挂载在vue*/
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
