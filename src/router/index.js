import Vue from 'vue'
import Router from 'vue-router'

import PagesView from '../views/PagesView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path:'/pages',
      name:'HomeView',
      component: PagesView
      // children: [
      //   {
      //     path:'',
      //     redirect: '/pages/home'
      //   },
      //   {
      //     path:'home',
      //     name:'HomeView',
      //     component: HomeView
      //   }
      // ]
    }
  ]
})
