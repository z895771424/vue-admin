import { RouteRecordRaw } from 'vue-router';

const router = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/login',
    name: 'auth.login',
    meta: { guest: true },
    component: () => import('@/views/auth/login.vue')
  }
] as RouteRecordRaw[];

export default router;
