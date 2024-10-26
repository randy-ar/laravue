import { createRouter, createWebHistory } from 'vue-router';
import home_index from '../pages/index.vue';
import blog_index from '../pages/blog/index.vue';
import contact_index from '../pages/contact/index.vue';
import not_found from '../pages/error/404.vue';

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
        path: "/:notFound",
        component: not_found,
        meta: {layout: 'error-layout'}
    },
  
];

export default createRouter({
    history: createWebHistory(),
    routes,
});