<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { route } from '@/router/types'
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink :to="route.main">Домашняя страница</RouterLink>
      <RouterLink :to="route.signup">Зарегистрироваться</RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  gap: 30px;
}
</style>
