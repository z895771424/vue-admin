import { getInfoApi, IUserInfo } from '@/apis/userApi';
import { CacheEnum } from '@/enum/cacheEnum';
import store from '@/utils/store';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userInfo: {} as null | IUserInfo
  }),

  actions: {
    async getUserInfo() {
      try {
        const token = store.get(CacheEnum.TOKEN_NAME)?.[CacheEnum.TOKEN_NAME];
        if (token) {
          const { result } = await getInfoApi();
          this.userInfo = result;
          return result;
        }
      } catch (error) {
        console.error('用户请求接口错误');
        return Promise.reject(error);
      }
    }
  }
});
