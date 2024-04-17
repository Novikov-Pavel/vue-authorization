import { createRouter, createWebHistory } from 'vue-router'
import { route } from '@/router/types'
import { HomeView, SignUp } from '@/views'

const routes = [
  {
    path: route.main,
    name: 'home',
    component: HomeView
  },
  {
    path: route.signup,
    name: 'signup',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
