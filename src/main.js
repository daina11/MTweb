// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import mockdata from "./router/mockjs";

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:8081/api/'

// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios =axios;
Vue.use(vueAxios,axios)
Vue.use(ElementUI)

//router.beforeEach()，在访问每一个路由前调用。判断meta是否为true 是否需要拦截
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.user.username) {
      next()
    } else {
      next({
        path: 'login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
}
)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //拦截器
  store,
  components: { App },
  template: '<App/>'
})
