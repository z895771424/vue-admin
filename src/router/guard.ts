import store from '@/utils/store';
import { RouteLocationNormalized, Router } from 'vue-router';

class Guard {
  constructor(private router: Router) {}

  public run(): void {
    this.router.beforeEach((to, form) => {
      // 需要登录
      if (this.isLogin(to) === false) return { name: 'login' };
    });
  }

  private isLogin(route: RouteLocationNormalized) {
    const token = store.get('token')?.expire;

    return Boolean(!route.meta.auth || (route.meta.auth && token));
  }
}

export default (router: Router) => {
  new Guard(router).run();
};
