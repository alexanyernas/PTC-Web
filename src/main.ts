// Vue App
import App from './App.vue';
import { createApp } from 'vue';

// Vue-Router
import router from './router';

// Vue Sweet Alert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

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
    .use(VueSweetalert2)
    .mount('#app');