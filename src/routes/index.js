import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Edit from '../pages/Edit.vue'
import Create from '../pages/Create.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
    {path: "/", component: Home},
    {path: "/edit/:id", component: Edit},
    {path: "/create", component: Create},
    {path: "/login", component: Login},
    {path: "/register", component: Register},
    {path: "/:pathMatch(.*)*", component: NotFound},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router