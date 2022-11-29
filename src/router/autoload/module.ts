import { RouteRecordRaw } from 'vue-router';

function moduleAutoLoadRouter() {
  const routes = [] as RouteRecordRaw[];
  const modules = import.meta.globEager('../module/**/*.ts');
  Object.values(modules).forEach((value) => {
    routes.push(...value.default);
  });
  return routes;
}
export default moduleAutoLoadRouter();
