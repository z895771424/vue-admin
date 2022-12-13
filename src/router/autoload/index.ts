import viewAutoloadRouter from './view';
import moduleAutoloadRouter from './module';
import { Router, RouteRecordRaw,useRouter } from 'vue-router';
import env from '@/utils/env';
import { useUserStore } from '@/store/userStore';

let routes: RouteRecordRaw[] = env.VITE_ROUTE_AUTOLOAD ? viewAutoloadRouter : moduleAutoloadRouter;

function autoload(router: Router) {
  const permissons = useUserStore().userInfo?.permissons;
  routes.forEach((r) => {
    r.children = r.children?.filter((cRoute) => {
      return cRoute.meta?.permission ? permissons?.includes(cRoute.meta.permission) : true;
    });
    router.addRoute(r);
  });
  router.isReady()
}

export default autoload;
