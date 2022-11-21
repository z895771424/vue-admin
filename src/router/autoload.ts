import { RouteRecordRaw } from 'vue-router';

/**
 * 路由自动注册
 */
// 父路由页面
const layouts = import.meta.globEager('@/layouts/*.vue');

// 子路由页面 (**可以遍历递归到子目录)
const layoutsChild = import.meta.globEager('@/views/**/*.vue');

function getRoutes() {
  const layoutsRouter = [] as RouteRecordRaw[];

  Object.entries(layouts).forEach(([file, module]) => {
    console.log(module);
    const route = getRouteByModule(file, module);
    route.children = getRouteChild(route);
    layoutsRouter.push(route);
  });

  return layoutsRouter;
}

function getRouteByModule(file: string, module: any) {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '');

  const route = {
    name: name.replace('/', '.'),
    path: `/${name}`,
    component: module.default
  } as RouteRecordRaw;
  return Object.assign(route,module.default?.route);
}

function getRouteChild(layoutsRoute: RouteRecordRaw) {
  const childrenRoutes = [] as RouteRecordRaw[];

  Object.entries(layoutsChild).forEach(([file, module]) => {
    if (file.includes(layoutsRoute.name as unknown as string)) {
      const route = getRouteByModule(file, module);
      childrenRoutes.push(route);
    }
  });
  return childrenRoutes;
}

export default getRoutes();
