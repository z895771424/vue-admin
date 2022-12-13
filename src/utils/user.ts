import { getUserInfoApi, ILoginData } from '@/apis/userApi';
import { CacheEnum } from '@/enum/cacheEnum';
import router from '@/router';
import { useUserStore } from '@/store/userStore';
import store from './store';

export async function login(values: ILoginData) {
  const {
    result: { token }
  } = await getUserInfoApi(values);
  store.set(CacheEnum.TOKEN_NAME, { token }, 100000);

  const routerName = store.get(CacheEnum.REDIRECT_ROUTE_NAME) ?? 'home';

  await useUserStore().getUserInfo();

  router.push({ name: routerName });
}

export function logout() {
  store.remove(CacheEnum.TOKEN_NAME);
  useUserStore().userInfo = null;
  router.push({ path: '/' });
}
