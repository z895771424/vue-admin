import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

export const useRouterStore = defineStore('routerStore', {
  state: () => ({
    router: getRoutes()
  })
});

function getRoutes() {
  const router = useRouter();
  const routes = router
    .getRoutes()
    .filter((route) => route.meta.show && route.children.length)
    .map((route) => {
      route.children = route.children.filter((cRoute) => cRoute.meta?.show && cRoute);
      return route;
    });
  return routes;
}
