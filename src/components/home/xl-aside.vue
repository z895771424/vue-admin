<script setup lang="ts">
import router from '@/router';
import autoload from '@/router/autoload';
import { useMenuStore } from '@/store/menuStore';
import { useUserStore } from '@/store/userStore';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const menuStore = useMenuStore();

menuStore.init();
console.log('aside渲染成功');

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
  router.push({ name: 'admin.home' });
};

const addRoute = async () => {
  // const router = useRouter();
  // await useUserStore().getUserInfo();
  // autoload(router);
};

onMounted(() => {
  addRoute();
});
</script>
<template>
  <div class="content" :class="{ close: useMenuStore().close }">
    <header class="flex justify-between items-center px-4 py-4">
      <i class="fab fa-discord text-4xl text-white ml-4"></i>
      <span class="text-xl text-white mr-4">向往生活 </span>
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
      <dl class="px-2 group" v-for="(menu, index) in menus" :key="index">
        <dt @click="handleClick(menu)">
          <section class="flex items-center">
            <i class="mr-3 text-2xl" :class="menu.icon"></i>
            <span>{{ menu.title }}</span>
          </section>
          <i class="fas fa-angle-right duration-200" :class="{ 'rotate-90': menu.isClick }"></i>
        </dt>
        <div class="dd-child group-hover:!block">
          <dd
            :class="{ actived: cMenu.isClick }"
            v-for="(cMenu, cIndex) in menu.children"
            :key="cIndex"
            v-show="menu.isClick || useMenuStore().close"
            @click="handleClick(menu, cMenu)">
            {{ cMenu.title }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
<style scoped lang="scss">
.content {
  @apply duration-150;
  &.close {
    @apply w-[78px];
    header {
      i {
        @apply m-auto;
      }
      span {
        @apply hidden;
      }
    }

    dl {
      @apply relative;
    }
    dt {
      > i {
        @apply hidden;
      }
      section {
        @apply m-auto;

        i {
          @apply mr-0;
        }

        span {
          @apply hidden;
        }
      }
    }

    .dd-child {
      @apply absolute hidden bg-slate-700 rounded-r-md rounded-br-md  z-20 w-[200px] left-[90%] -top-3 peer-hover:bg-red-700;
    }
  }
}
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
