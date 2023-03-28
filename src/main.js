import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './global.css'
import App from './App.vue'
import router from './routes'

const app = createApp(App)

app.use(router)

app.use(createPinia())

app.mount('#app')