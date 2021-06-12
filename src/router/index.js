import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Register from '@/pages/register'
import adminRegister from '@/pages/adminregister'
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
      path: '/adminregister',
      name: 'adminRegister',
      component: adminRegister
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
          path: '/shopindex',
          name: 'shopindex',
          component: () => import('../components/shangdian/shopindex'),
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
          path: '/search',
          name: 'search',
          component: () => import('../components/search/searchindex'),
          meta: {
            requireAuth: false
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
