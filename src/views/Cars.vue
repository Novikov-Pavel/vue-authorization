<template>
  <div>
    <h2>Cars</h2>
    <div class="flex flex-column gap-3">
      <Card v-for="car in cars" :key="car.name">
        <template #title> {{ car.name }} </template>
        <template #subtitle> {{ car.type }} </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card'

const cars = [
  { name: 'BMW', type: 'passenger car' },
  { name: 'Kamaz', type: 'cargo car' },
  { name: 'Audi', type: 'passenger car' }
]
</script>
