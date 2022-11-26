import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import layoutsRouter from './autoload';
import guard from './guard';
import routes from './routers';

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...layoutsRouter]
});

guard(router);

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
