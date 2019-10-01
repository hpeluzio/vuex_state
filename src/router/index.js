import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes:[
    {
      path: '/login',
      name: 'Login',
      component: () => import('../view/auth/Login')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('../view/Home')
    },
    {
      path: '/rota1',
      name: 'Rota1',
      component: () => import('../view/rota1/Rota1')
    },
    {
      path: '/rota2',
      name: 'Rota2',
      component: () => import('../view/counter/Rota2')
    },

  ]
})

export default router

