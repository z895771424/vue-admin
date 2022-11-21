import { App, VueElement } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import layoutsRouter from './autoload';
import routes from './routers';

const router = createRouter({
  history: createWebHistory(),
  routes:[...routes,...layoutsRouter],
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
