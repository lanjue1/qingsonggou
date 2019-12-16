import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import toast from './components/common/Toast/index.js'

Vue.config.productionTip = false

Vue.prototype.$bus =new Vue() //添加事件总线
Vue.use(toast) //安装toast插件
Vue.use(VueLazyload,{
  loading:require('./assets/img/common/loading.gif') //懒加载途中的占位图片
})
FastClick.attach(document.body) //解决移动端300s延迟
new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
