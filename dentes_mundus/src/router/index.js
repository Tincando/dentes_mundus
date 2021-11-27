import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      needsAuth:false,
    },
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      needsAuth:true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  
  {
    path: '/termin/:cardid',
    name: 'Termin',
    meta: {
      needsAuth:true
    },
    component: () => import(/* webpackChunkName: "termin"  */'../views/Termin.vue')
  },
 
  {
    path: '/Signup',
    name: 'Signup',
    meta: {
      needsAuth:false,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "termin" */ '../views/Signup.vue')
  },

  {
    path: '/Signin',
    name: 'Sigin',
    meta: {
      needsAuth:false,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "termin" */ '../views/Signin.vue')
  },

  {
    path: '/Dodaj',
    name: 'Dodaj',
    meta: {
      needsAuth:true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "termin" */ '../views/Dodaj.vue')
  }
   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

import store from '@/store';

router.beforeEach((to, from, next) => {
  console.log('Bio sam na', from.name, 'idem na', to.name, 'a korisnik je', store.currentUser);
  const authenticated = store.currentUser !== null;
  if (!authenticated && to.meta.needsAuth) {
  alert("you need to sign in first");
  next('Signin');
  } else {
  next();
  }
 });


export default router;
