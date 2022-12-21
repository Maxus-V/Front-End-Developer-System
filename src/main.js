import { createApp } from 'vue'
import App from './App.vue'
import i18n from './language'

import router from './router/index.js'

import './assets/main.css'


createApp(App).use(router).use(i18n).mount('#app')
