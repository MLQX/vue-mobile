import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/tabbar/Home'
import Member from '@/components/tabbar/Member'
import ShopCar from '@/components/tabbar/ShopCar'
import Search from '@/components/tabbar/Search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/shopcar',
      name: 'ShopCar',
      component: ShopCar
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ],
  linkActiveClass: 'mui-active'
})
