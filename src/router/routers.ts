import { RouteRecordRaw } from 'vue-router';

const router = [
  {
    path: '/',
    component: () => import('@/layouts/admin.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home.vue')
      }
    ]
  }
] as RouteRecordRaw[];

export default router