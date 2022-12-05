import { CacheEnum } from '@/enum/cacheEnum';
import router from '@/router';
import utils from '@/utils';
import { defineStore } from 'pinia';
import { RouteLocationNormalized, RouteRecordNormalized, useRouter } from 'vue-router';

export const useMenuStore = defineStore('menuStore', {
  state: () => ({
    menus: [] as IMenu[],
    historyMenu: [] as IMenu[],
    close: false,
    breadList: null as null | RouteRecordNormalized[]
  }),
  actions: {
    init() {
      this.getMenus();
    },
    addHistoryMenu(route: RouteLocationNormalized) {
      if (route.meta.menu) {
        const menu: IMenu = { ...route.meta.menu, routeName: route.name as string };
        const isHas = this.historyMenu.some((menu) => menu.routeName === route.name);
        if (!isHas) {
          this.historyMenu.unshift(menu);
        }
        if (this.historyMenu.length > 10) {
          this.historyMenu.pop();
        }
        this.setHistoryInStore();
        // 获取当前面包屑导航
        this.breadList = route.matched;
      }
    },
    removeHistoryMenu(menu: IMenu) {
      const index = this.historyMenu.indexOf(menu);
      this.historyMenu.splice(index, 1);
      this.setHistoryInStore();
    },
    setHistoryInStore() {
      const historyStore = useMenuStore().historyMenu;
      const historyStoreFilter = historyStore.filter((cRoute) => {
        console.log(router.getRoutes().some((pRoute) => pRoute.name === cRoute.routeName));
        return router.getRoutes().some((pRoute) => pRoute.name === cRoute.routeName) ? true : false;
      });
      console.log(historyStoreFilter);
      utils.store.set(CacheEnum.HISTORY_MENU_NAME, null);
      utils.store.set(CacheEnum.HISTORY_MENU_NAME, historyStoreFilter);
    },
    getMenus() {
      useRouter()
        .getRoutes()
        .filter((route) => route.children.length && route?.meta.menu)
        .forEach((route) => {
          const menu = route.meta.menu!;
          menu.children = route.children
            .filter((cRoute) => cRoute.meta?.menu)
            .map((route) => ({
              ...route.meta?.menu,
              routeName: route.name
            })) as IMenuItem[];
          this.menus.push(menu as IMenuItem);
        });
    }
  }
});
