import './bootstrap';
import App from './layouts/index.vue';
import { createApp } from 'vue';
import router from './routes/index.js';
import mixin from './mixin/index.js';
import store from './store/index.js';


createApp(App)
  .use(router)
  .use(store)
  .mixin(mixin)
  .mount('#app')