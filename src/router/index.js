import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes:[
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/Login')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/Home')
    },
    {
      path: '/rota1',
      name: 'Rota1',
      component: () => import('../components/Rota1')
    },
    {
      path: '/rota2',
      name: 'Rota2',
      component: () => import('../components/Rota2')
    },

  ]
})

export default router

