import { createRouter, createWebHistory } from 'vue-router';
import home_index from '../pages/home/index.vue';
import blog_index from '../pages/home/blog/index.vue';
import contact_index from '../pages/home/contact/index.vue';
import not_found from '../pages/error/404.vue';
import auth_login from '../pages/auth/login.vue';
import auth_register from '../pages/auth/register.vue';
import dashboard_index from '../pages/dashboard/index.vue';

const routes = [
    {
        path: '/',
        name: 'home.index',
        component: home_index,
        meta: {layout: 'home-layout'}
    },
    {
        path: '/blog',
        name: 'blog.index',
        component: blog_index,
        meta: {layout: 'home-layout'}
    },
    {
        path: '/contact',
        name: 'contact.index',
        component: contact_index,
        meta: {layout: 'home-layout'}
    },
    {
        path: '/login',
        name: 'auth.login',
        component: auth_login,
        meta: {layout: 'auth-layout'}
    },
    {
        path: '/register',
        name: 'auth.register',
        component: auth_register,
        meta: {layout: 'auth-layout'}
    },
    {
        path: '/dashboard',
        name: 'dashboard.index',
        component: dashboard_index,
        meta: {layout: 'home-layout'}
    },
    {
        path: "/:notFound",
        component: not_found,
        meta: {layout: 'error-layout'}
    },
  
];

export default createRouter({
    history: createWebHistory(),
    routes,
});