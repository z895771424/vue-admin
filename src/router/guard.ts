import { CacheEnum } from '@/enum/cacheEnum';
import { useMenuStore } from '@/store/menuStore';
import { useUserStore } from '@/store/userStore';
import utils from '@/utils';
import store from '@/utils/store';
import { RouteLocationNormalized, Router } from 'vue-router';

class Guard {
  constructor(private router: Router) {}

  public run(): void {
    this.router.beforeEach(async (to, from) => {
      // 需要登录
      if (this.isLogin(to) === false) return { name: 'auth.login' };
      // 游客登录后不可以跳回登录页面
      if (this.isGuest(to) === false) return from;
      // 都通过之后请求用户信息
      await useUserStore().getUserInfo();
    });
  }

  private getToken() {
    return store.get(CacheEnum.TOKEN_NAME)?.token;
  }

  private isLogin(route: RouteLocationNormalized) {
    const state = Boolean(!route.meta.auth || (route.meta.auth && this.getToken()));
    if (state === false) {
      utils.store.set(CacheEnum.REDIRECT_ROUTE_NAME, route.name);
    }
    return state;
  }

  private isGuest(route: RouteLocationNormalized) {
    return Boolean(!route.meta.guest || (route.meta.guest && !this.getToken()));
  }
}

export default (router: Router) => {
  new Guard(router).run();
};
