import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Edit from '../pages/Edit.vue'
import Login from '../pages/Login.vue'
import Create from '../pages/Create.vue'

const routes = [
    {path: "/", component: Home},
    {path: "/edit/:id", component: Edit},
    {path: "/login", component: Login},
    {path: "/create", component: Create},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router