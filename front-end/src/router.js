import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Home from './views/Home.vue'
import About from "./views/About.vue";

import Login from './components/Login'
import SignUp from "./components/SignUp";
import Gallery  from './components/Gallery'

Vue.use(Router)

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/signUp",
      name: "signUp",
      component: SignUp
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/gallery",
      name: "gallery",
      component: Gallery,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});

export default router;