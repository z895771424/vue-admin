import { RouteRecordRaw } from 'vue-router';

export default [
  {
    name: 'error',
    path: '/error',
    component: () => import('@/layouts/admin.vue'),
    meta: {
      auth: true,
      menu: {
        title: '错误页面',
        icon: 'fab fa-cc-stripe'
      }
    },
    children: [
      {
        name: '404',
        path: '404',
        meta: { menu: { title: '404错误页面' } },
        component: () => import('@/views/error/404.vue')
      },
      {
        name: '403',
        path: '403',
        meta: { menu: { title: '403错误页面' } },
        component: () => import('@/views/error/403.vue')
      },{
        name: '500',
        path: '500',
        meta: { menu: { title: '500错误页面' } },
        component: () => import('@/views/error/500.vue')
      },
    ]
  }
] as RouteRecordRaw[];
