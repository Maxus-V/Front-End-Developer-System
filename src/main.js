import { createApp } from 'vue'
import App from './App.vue'
import i18n from './language'

import router from './router/index.js'
import store from './store/index.js'

import './assets/main.css'
import infiniteScroll from "vue3-infinite-scroll-good"


createApp(App).use(infiniteScroll).use(router).use(store).use(i18n).mount('#app')
