import './style.css'
import router from '@/router'
import { createApp } from 'vue'
import pinia from '@/stores'
import App from './App.vue'    

const app = createApp(App)
.use(router)
.use(pinia)
.mount('#app')