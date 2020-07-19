import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
 import connect from '../pages/connection.vue'
 import friends from '../pages/Friends.vue'
 import User from '../pages/User.vue'
 import Profile from '../pages/Profile.vue'
 import Users from '../pages/Users.vue'
 import Requests from '../pages/Requests.vue'
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
    path: '/',
    name: 'Users',
    component:Users,
    meta: { 
      requiresAuth: true
    },
  },
  {
    path: '/requests',
    name: 'Requests',
    component:Requests,
    meta: { 
      requiresAuth: true
    },
  },
  {
  path: '/user/:id',
  name: 'user',
  component: User,
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
