<template>
  <div class="menu">
    <router-link :to="route.main" class="menu__link">Home</router-link>
    <router-link v-if="!token" :to="route.signin" class="menu__link">Login</router-link>
    <router-link v-if="token" :to="route.cars" class="menu__link">Cars</router-link>
    <router-link v-if="token" :to="route.signin" class="menu__link" @click.prevent="logout"
      >Logout</router-link
    >
  </div>
  <div class="container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from './stores/auth'
import { useRouter } from 'vue-router'
import { route } from '@/router/types'

const authStore = useAuthStore()
const router = useRouter()

const token = computed(() => authStore.userInfo.token)

const checkUser = () => {
  const tokens = JSON.parse(localStorage.getItem('userTokens'))
  if (tokens) {
    authStore.userInfo.token = tokens.token
    authStore.userInfo.refreshToken = tokens.refreshToken
  }
}

const logout = () => {
  authStore.logout()
  localStorage.removeItem('userTokens')
  router.push(route.signin)
}

checkUser()
</script>

<style scoped lang="scss">
.container {
  margin: auto;
  font-family: 'Arial', sans-serif;
  max-width: 700px;
}
.menu {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 20px;

  &__link {
    color: #000;
    margin: 0 20px;
    font-family: 'Arial', sans-serif;
  }
}
</style>
