import { createApp } from 'vue'
import App from './App.vue'
import i18n from './language'

import router from './router/index.js'
import store from './store/index.js'

import './assets/main.css'
import infiniteScroll from "vue-infinite-scroll"


createApp(App).use(router).use(store).use(i18n).use(infiniteScroll).mount('#app')
