import { RouteRecordRaw } from 'vue-router';

export default [
  {
    name: 'admin',
    path: '/admin',
    redirect: '/admin/home',
    meta: { auth: true },
    component: () => import('@/layouts/admin.vue'),
    children: [
      {
        name: 'admin.home',
        path: 'home',
        meta: { auth: true },
        component: () => import('@/views/admin/home.vue')
      }
    ]
  }
] as RouteRecordRaw[];
