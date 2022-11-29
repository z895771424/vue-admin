import { RouteRecordRaw } from 'vue-router';

export default [
  {
    name: 'error',
    path: '/error',
    component: () => import('@/layouts/admin.vue'),
    meta: { auth: true, show: true, title: '错误页面', icon: 'fab fa-cc-stripe', acitve: false },
    children: [
      {
        name: '404',
        path: '404',
        meta: { show: true, title: '404错误页面', acitve: false },
        component: () => import('@/views/error/404.vue')
      },
      {
        name: '403',
        path: '403',
        meta: { show: true, title: '403错误页面', acitve: false },
        component: () => import('@/views/error/403.vue')
      }
    ]
  }
] as RouteRecordRaw[];
