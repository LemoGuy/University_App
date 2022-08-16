import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

import Dashboard from './pages/Dashboard.vue'
import Login from './pages/Login.vue'

import { Quasar } from 'quasar'
import 'quasar/src/css/index.sass'

const routes = [
    { path: '/', component: Dashboard },
    { path: '/login', component: Login }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

const app = createApp(App)

app.use(router)
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})

app.mount('#app')
