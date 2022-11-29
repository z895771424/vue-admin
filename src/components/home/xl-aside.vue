<script setup lang="ts">
import { useRouterStore } from '@/store/router';
import { RouteRecordNormalized, RouteRecordRaw, useRouter } from 'vue-router';

const store = useRouterStore();

const routerService = useRouter();

const resetMenu = () => {
  store.router.forEach((route) => {
    route.meta.acitve = false;
    route.children?.forEach((cRoute) => {
      if (cRoute.meta) {
        cRoute.meta.acitve = false;
      }
    });
  });
};

const handleClick = (route: RouteRecordNormalized, cRoute?: RouteRecordRaw) => {
  resetMenu();
  route.meta.acitve = true;
  if (cRoute && cRoute.meta) {
    cRoute.meta.acitve = true;
    routerService.push(cRoute);
  }
};
</script>
<template>
  <div>
    <header class="flex justify-between items-center px-8 py-4">
      <i class="fab fa-discord text-4xl text-white"></i>
      <span class="text-xl text-white">向往生活 </span>
    </header>
    <div class="menu text-white">
      <dl class="px-4" v-for="(route, index) in store.router" :key="index">
        <dt @click="handleClick(route)">
          <section class="flex items-center">
            <i class="mr-3 text-xl" :class="route.meta.icon"></i>
            <span>{{ route.meta.title }}</span>
          </section>
          <i class="fas fa-angle-right"></i>
        </dt>

        <dd
          :class="{ actived: cRoute.meta?.acitve }"
          v-for="(cRoute, cIndex) in route.children"
          :key="cIndex"
          v-show="route.meta.acitve"
          @click="handleClick(route, cRoute)">
          {{ cRoute.meta?.title }}
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
