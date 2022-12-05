import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean;
    guest?: boolean;
    // 显示侧边栏
    menu?: IMenu;
    permission?: string;
    enterClass?: string;
    leaveClass?: string;
  }
}
