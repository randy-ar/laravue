import './bootstrap';
import App from './layouts/index.vue';
import { createApp } from 'vue';
import router from './routes/index.js';

createApp(App)
    .use(router)
    .mount('#app')