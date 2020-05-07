import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NoFound from '@/views/noFound/NoFound'

Vue.use(Router)

let routes = new Router({
  mode: 'history',
  routes: [
    {
      path: 'home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Register',
      component: ()=>import('@/views/register/Register')
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=>import('@/views/login/Login')
    },
    {path: '/home', component: (r)=>{require(['@/views/home/Home.vue'], r)}},
    {path: '/', redirect: '/home'},
    {path: '*', component: NoFound},
  ]
})

export default routes