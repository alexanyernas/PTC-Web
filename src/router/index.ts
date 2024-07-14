// Import VueRouter
import * as VueRouter from 'vue-router';

// Import Routes
import { routes } from './routes';

const router = VueRouter.createRouter({
    scrollBehavior() {
        return { top: 0 }
    },
    history: VueRouter.createWebHistory(),
    routes
});

export default router;