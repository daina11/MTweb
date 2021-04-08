import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/index',
      component: index,
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
      redirect:'/index',
      children:[
        {
          path:'/index',
          name:'index',
          component:index,
          meta:{
            requireAuth:true
          }
        }
      ]
    },
  ]
})
