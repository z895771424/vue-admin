import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import guard from './guard';
import routes from './routers';
import autoloadRouter from './autoload';

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...autoloadRouter]
});

guard(router);

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
