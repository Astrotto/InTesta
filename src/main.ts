import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerIcons } from './plugins/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { vReveal } from './directives/reveal'

const app = createApp(App)

registerIcons()
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.directive('reveal', vReveal)

app.use(router)

app.mount('#app')
