import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.config.devtools = false // Disable Vue DevTools
app.mount('#app')
if (process.env.NODE_ENV === 'production') {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__ = undefined;
  }
  