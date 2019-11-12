import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // 一个css的标准化样式表，为了让不同浏览器的css样式都兼容

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import * as filters from './filters' // 全局引入过滤器

// import './mock/index'

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

// 全局注册过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
