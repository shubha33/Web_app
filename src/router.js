import { createRouter, createWebHistory,  } from "vue-router";

const Home = () => import('./pages/home/home.vue');
const Login = () => import('./pages/auth/login.vue');

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/',  component: Home },
        { path: '/login', component: Login },
    ]
});


export default router;