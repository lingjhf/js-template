import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import { router } from './router'

// eslint-disable-next-line import/no-unresolved
import 'virtual:uno.css'
import './styles.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).use(router).mount('#app')