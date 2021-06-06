import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Register from '@/pages/register'
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
        requireAuth: false
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
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
            requireAuth: false
          }
        },
        {
          path: '/my_detail',
          name: 'mdindex',
          component: () => import('../components/mydetail/mdindex'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/payindex',
          name: 'payindex',
          component: () => import('../components/pay/payindex'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/sdindex',
          name: 'sdindex',
          component: () => import('../components/goodscategory/gcindex')
        },

      ]
    },
  ]
})
