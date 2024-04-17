import { initializeApp } from 'firebase/app'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from '@/App.vue'
import router from '@/router'

import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'

const firebaseConfig = {
  apiKey: 'AIzaSyB7Fweh6XTHAW5C-5GJR0zKuMDUlIuEo5A',
  authDomain: 'project-120675594475132078.firebaseapp.com',
  projectId: 'project-120675594475132078',
  storageBucket: 'project-120675594475132078.appspot.com',
  messagingSenderId: '903920887135',
  appId: '1:903920887135:web:a9a44faa38bf61418242ea'
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia()).use(router).use(PrimeVue).mount('#app')
