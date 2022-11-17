import {createRouter, createWebHistory} from "vue-router";


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: () => import('../views/Home.vue')
        },
        {
            name: 'Rust',
            path: '/rs',
            component: () => import('../views/Rust.vue')
        },
        {
            name: 'Golang',
            path: '/go',
            component: () => import('../views/Go.vue')
        },
        {
            name: 'Server',
            path: '/sever',
            component: () => import('../views/Server.vue')
        },
        {
            name: 'C/C++',
            path: '/c',
            component: () => import('../views/Cpp.vue')
        },
        {
            name: 'Python',
            path: '/py',
            component: () => import('../views/Python.vue')
        },
    ]
})

export default router