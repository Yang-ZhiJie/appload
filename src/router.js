import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Details from './views/Details.vue'
import Video from './views/Video.vue'
import Svideo from './views/Svideo.vue'
import User from './views/User.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path: '/video',
      name: 'video',
      component: Video,
    },
    {
      path: '/svideo',
      name: 'svideo',
      component: Svideo,
    },
    {
      path: '/user',
      name: 'user',
      component:User
    },
    {
      path: '/register',
      name: 'register',
      component:Register
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
