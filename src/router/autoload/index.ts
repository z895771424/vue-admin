import viewAutoloadRouter from './view';
import moduleAutoloadRouter from './module';
import { RouteRecordRaw } from 'vue-router';
import env from '@/utils/env';

let router = [] as RouteRecordRaw[];

if (env.VITE_ROUTE_AUTOLOAD) {
  router = viewAutoloadRouter;
} else {
  router = moduleAutoloadRouter;
}

export default router;
