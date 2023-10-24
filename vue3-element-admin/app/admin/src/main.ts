import { createApp } from 'vue'

import App from './App.vue'
import { router } from './router'

// eslint-disable-next-line import/no-unresolved
import 'virtual:uno.css'

const app = createApp(App)

app.use(router).mount('#app')