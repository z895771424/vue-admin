<script setup lang="ts">
import { CacheEnum } from '@/enum/cacheEnum';
import router from '@/router';
import { useMenuStore } from '@/store/menuStore';
import utils from '@/utils';
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const routeJump = (menu: IMenu) => {
  useMenuStore().menus.forEach((menu) => {
    menu.isClick = false;
    menu.children?.forEach((cmenu) => {
      cmenu.isClick = false;
    });
  });
  
  useMenuStore().menus.forEach((pmenu) => {
    if (
      pmenu.children?.find((cmenu) => {
        if (cmenu.title === menu.title) {
          cmenu.isClick = true;
          return true;
        }
      })
    ) {
      pmenu.isClick = true;
    }
  });

  router.push({
    name: menu.routeName
  });
};

const route = useRoute();
if (route.meta.menu) {
  useMenuStore().historyMenu = utils.store.get(CacheEnum.HISTORY_MENU_NAME) ?? [{ title: route.meta.menu.title, routeName: route.name }];
  routeJump(route.meta.menu);
}

watch(
  () => route.name,
  () => {
    useMenuStore().addHistoryMenu(route);
  },
  { immediate: true }
);
</script>
<template>
  <transition appear enter-active-class="animate__animated animate__fadeInDown">
    <div class="flex justify-start items-center flex-wrap gap-3 bg-white" v-show="useMenuStore().historyMenu.length">
      <div
        class="flex items-center border border-gray-300 py-1 px-2 rounded-md text-gray-600 hover:bg-blue-500 hover: duration-150 hover:text-white hover:border-blue-500 group"
        :class="{ 'bg-blue-500 !text-white': $route.name === menu.routeName }"
        v-for="(menu, index) of useMenuStore().historyMenu"
        :key="index">
        <span class="mr-2" @click="routeJump(menu)">{{ menu.title }}</span>
        <i
          class="fas fa-circle-xmark text-gray-400 cursor-pointer group-hover:text-white hover:scale-125 duration-150"
          :class="{ 'bg-blue-500 !text-white': $route.name === menu.routeName }"
          @click="useMenuStore().removeHistoryMenu(menu)"></i>
      </div>
    </div>
  </transition>
</template>
<style scoped lang="scss"></style>
