// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css';
import App from './App'
import router from './router'
import store from './store'
// import './styles/layout.scss' 
import local from './utils/utils'
import './styles/index.scss' 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery'
import './icons'

import PictureSearch from '@/common/component/PictureSearch'
Vue.component('picture-search', PictureSearch);

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(local)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  $,
  router,
  store,
  components: { App },
  template: '<App/>'
})
