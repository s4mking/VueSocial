import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
 import connect from '../pages/connection.vue'
 import friends from '../components/Friends.vue'
 import Profile from '../pages/Profile.vue'
 import Users from '../pages/Users.vue'
 import store from '../store'
// import Secure from './components/Secure.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/auth',
    name: 'Connect',
    component: connect
  },
  {
    path: '/about',
    name: 'About',
    meta: { 
      requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/friends',
    name: 'Friends',
    component: friends,
    meta: { 
      requiresAuth: true
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component:Profile,
    meta: { 
      requiresAuth: true
    },
  },
  {
    path: '/users',
    name: 'Users',
    component:Users,
    meta: { 
      requiresAuth: true
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/auth') 
  } else {
    next() 
  }
})
export default router
