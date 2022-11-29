import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean;
    guest?: boolean;
    // 显示侧边栏
    show?: boolean;
    title?: string;
    icon?: string;
    acitve?: boolean;
  }
}
