import { RouteRecordRaw } from 'vue-router';

function moduleAutoLoadRouter() {
  const routes = [] as RouteRecordRaw[];
  const modules = import.meta.globEager('../module/**/*.ts');
  console.log(modules);
  Object.values(modules).forEach((value) => {
    routes.push(...(value as any).default);
  });
  return routes;
}
export default moduleAutoLoadRouter();
