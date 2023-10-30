<<<<<<< HEAD
=======
import './assets/main.scss'
>>>>>>> f30e627f7a64d74acf267c40967c4e5a9f22b7f4

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
