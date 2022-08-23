import { createApp } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import App from './App.vue'
import Dashboard from './pages/Dashboard.vue'
import Login from './pages/Login.vue'
import CreateUser from '@/pages/users/Create.vue'
import SearchUser from './pages/users/Search.vue'


import { Quasar } from 'quasar'
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'

import { token, setToken } from './services/token'

const routes = [
    {
        path: '/', component: Dashboard,
        meta: { authRequired: true }

    },
    { path: '/login', component: Login },
    {
        path: '/dashboard',
        component: Dashboard,
        meta: { authRequired: true }
    },
    {
        path: '/users/create',
        component: CreateUser,
        meta: { authRequired: true }
    },
    {
        path: '/users/search',
        component: SearchUser,
        meta: { authRequired: true }
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})
router.beforeEach((to, from) => {
    if (to.meta.authRequired && !token.value) {
        return "/login";
    }
    return true
})

const app = createApp(App)

app.use(router)
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})

app.mount('#app')
