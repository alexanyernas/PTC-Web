// Vue App
import App from './App.vue';
import { createApp } from 'vue';

// Vue-Router
import router from './router';

// Pinia
import pinia from './plugins/pinia';

// Vuetify
import vuetify from './plugins/vuetify';

// Styles
import './styles/global.css';

createApp(App)
    .use(pinia)
    .use(router)
    .use(vuetify)
    .mount('#app');