<script setup lang="ts">
import router from '@/router';
import { useMenuStore } from '@/store/menuStore';
import { ref } from 'vue';

const menuStore = useMenuStore();
menuStore.init();
const menus = menuStore.menus;

const resetMenu = () => {
  menus.forEach((menu) => {
    menu.isClick = false;
    menu.children?.forEach((cMenu) => {
      cMenu.isClick = false;
    });
  });
};

const handleClick = (menu: IMenu, cMenu?: IMenu) => {
  resetMenu();
  menu.isClick = true;
  if (cMenu) {
    homeStatus.value = false;
    cMenu.isClick = true;
    router.push({ name: cMenu.routeName });
  }
};

let homeStatus = ref(false);
const handleHome = () => {
  resetMenu();
  homeStatus.value = !homeStatus.value;
  console.log(homeStatus);
  router.push({ name: 'admin.home' });
};
</script>
<template>
  <div>
    <header class="flex justify-between items-center px-8 py-4">
      <i class="fab fa-discord text-4xl text-white"></i>
      <span class="text-xl text-white">向往生活 </span>
    </header>
    <div class="menu text-white">
      <dl class="px-2">
        <dt class="hover:bg-blue-400" :class="{ 'bg-blue-500': homeStatus }" @click="handleHome">
          <section>
            <i class="mr-3 text-xl fas fa-house-user"></i>
            <span>首页</span>
          </section>
        </dt>
      </dl>
      <dl class="px-2" v-for="(menu, index) in menus" :key="index">
        <dt @click="handleClick(menu)">
          <section class="flex items-center">
            <i class="mr-3 text-xl" :class="menu.icon"></i>
            <span>{{ menu.title }}</span>
          </section>
          <i class="fas fa-angle-right duration-200" :class="{ 'rotate-90': menu.isClick }"></i>
        </dt>

        <dd
          :class="{ actived: cMenu.isClick }"
          v-for="(cMenu, cIndex) in menu.children"
          :key="cIndex"
          v-show="menu.isClick"
          @click="handleClick(menu, cMenu)">
          {{ cMenu.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>
<style scoped lang="scss">
.menu {
  .actived {
    @apply bg-blue-500;
  }

  dt {
    @apply p-3  rounded-md m-2 hover:bg-blue-400 cursor-pointer flex justify-between items-center;
  }

  dd {
    @apply py-3 px-4 m-4  rounded-md hover:bg-blue-400 cursor-pointer bg-gray-500;
  }
}
</style>
