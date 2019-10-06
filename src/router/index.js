import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('@/view/auth/Login')
const Home = () => import('@/view/Home')
const Rota1 = () => import('@/view/rota1/Rota1')
const Produtos = () => import('@/view/produtos/Produtos')
const Rota2 = () => import('@/view/counter/Rota2')

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes:[
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/rota1',
      name: 'Rota1',
      component: Rota1
    },
    {
      path: '/produtos',
      name: 'Produtos',
      component: Produtos
    },    
    {
      path: '/rota2',
      name: 'Rota2',
      component: Rota2
    },

  ]
})

export default router

