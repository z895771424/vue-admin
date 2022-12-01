<script setup lang="ts">
import { useMenuStore } from '@/store/menuStore';
import { useUserStore } from '@/store/userStore';
import utils from '@/utils';
import { ref } from 'vue';
import XlNotification from './xl-notification.vue';
const logout = utils.user.logout;

interface IHoverItem {
  title: string;
  icon: string;
}

const hoverList: IHoverItem[] = [
  { title: '学习内容', icon: 'fab fa-bitbucket' },
  { title: '课程设计', icon: 'fab fa-black-tie' },
  { title: '精选内容', icon: 'fab fa-buysellads' },
  { title: '退出登录', icon: 'fas fa-door-closed' }
];

// 状态管理工具返回回来的响应式数据
const userInfo = useUserStore().userInfo;

const handelClose = () => {
  useMenuStore().close = !useMenuStore().close;
};

let fullScreenStatus = ref(false);
const fullScreen = async () => {
  if (fullScreenStatus.value) {
    await document.exitFullscreen();
  } else {
    await document.documentElement.requestFullscreen();
  }
};

document.addEventListener('fullscreenchange', (event) => {
  if (fullScreenStatus.value) {
    fullScreenStatus.value = false;
  } else {
    fullScreenStatus.value = true;
  }
});
</script>
<template>
  <div class="flex justify-between items-center">
    <div class="flex items-center">
      <div class="icon-content mr-3" @click="handelClose">
        <i class="text-2xl" :class="{ 'fas fa-square-caret-right': useMenuStore().close }"></i>
        <i class="text-2xl" :class="{ 'fas fa-square-caret-left': !useMenuStore().close }"></i>
      </div>
      <el-breadcrumb class="flex-1" separator="/" v-if="useMenuStore().breadList?.length">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) of useMenuStore().breadList" :key="index" :to="{ path: item.path }">{{
          item.meta.menu?.title
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <article class="flex items-center">
      <xl-notification class="mr-5"></xl-notification>
      <div class="mr-5 cursor-pointer" @click="fullScreen">
        <i class="fas fa-up-right-and-down-left-from-center text-2xl" v-if="!fullScreenStatus"></i>
        <i class="fas fa-down-left-and-up-right-to-center text-2xl" v-else></i>
      </div>

      <div class="flex justify-between items-center relative cursor-pointer group">
        <img class="w-[45px] h-[45px] rounded-full mr-2" :src="userInfo?.head" alt="" />
        <span class="text-xl">{{ userInfo?.name }}</span>
        <section
          class="absolute z-10 translate-y-24 -translate-x-4 border bg-white shadow-md rounded-sm px-3 pb-2 whitespace-nowrap cursor-pointer hidden group-hover:block">
          <nav class="pt-0 border-b border-b-white duration-150 hover:text-green-800" v-for="(item, index) of hoverList" :key="index">
            <i class="mr-2 p-1 py-2" :class="item.icon"></i>
            <span v-if="item.title === '退出登录'" @click="logout">{{ item.title }}</span>
            <span v-else>{{ item.title }}</span>
          </nav>
        </section>
      </div>
    </article>
  </div>
</template>
<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
