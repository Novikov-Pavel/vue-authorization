import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Signup from '@/views/SignUp.vue'
import Signin from '@/views/SignIn.vue'
import Cars from '@/views/Cars.vue'
import { useAuthStore } from '@/stores/auth'
import { route } from '@/router/types'

const routes: Array<RouteRecordRaw> = [
  {
    path: route.main,
    name: route.signup,
    component: HomeView
  },
  {
    path: route.signup,
    name: route.signup,
    component: Signup,
    meta: {
      auth: false
    }
  },
  {
    path: route.signin,
    name: route.signin,
    component: Signin,
    meta: {
      auth: false
    }
  },
  {
    path: route.cars,
    name: route.cars,
    component: Cars,
    meta: {
      auth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.auth && !authStore.userInfo.token) {
    next(route.signin)
  } else if (!to.meta.auth && authStore.userInfo.token) {
    next(route.cars)
  } else {
    next()
  }
})

export default router
