import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '@/components/LandingPage/Index'
import Home from '@/components/Home/Index'

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
});
