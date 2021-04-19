import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Default',
      redirect: '/index',
      component: Home,
      meta: {
        requireAuth: true
      }
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('../components/shopindex/spindex'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/sdindex',
          name: 'sdindex',
          component: () => import('../components/shopdetail/sdindex')
        },

      ]
    },
  ]
})
