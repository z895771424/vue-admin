import { RouteRecordRaw } from 'vue-router';

export default [
  {
    name: 'editor',
    path: '/editor',
    meta: { auth: true, menu: { title: '编辑器', icon: 'fab fa-avianex' } },
    component: () => import('@/layouts/admin.vue'),
    children: [
      {
        name: 'editor.baseEditor',
        path: 'baseEditor',
        meta: {
          permission: 'baseEditor',
          menu: {
            title: '基础文本编辑器',
          }
        },
        component: () => import('@/views/editor/baseEditor.vue')
      },
      {
        name: 'editor.markdown',
        path: 'markdown',
        meta: {
          permission:'markdownEditor',
          menu: {
            title: 'Markdown编辑器'
          }
        },
        component: () => import('@/views/editor/markdown.vue')
      }
    ]
  }
] as RouteRecordRaw[];
