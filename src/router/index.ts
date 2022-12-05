import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import guard from './guard';
import routes from './routers';
import autoload from './autoload';
import { useUserStore } from '@/store/userStore';

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes]
});

export async function setupRouter(app: App) {
  await useUserStore().getUserInfo();
  autoload(router);
  guard(router);
  app.use(router);
}

export default router;
