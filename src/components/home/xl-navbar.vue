<script setup lang="ts">
import { useUserStore } from '@/store/userStore';
import utils from '@/utils';
const logout = utils.user.logout;

interface IHoverItem {
  title: string;
  icon: string;
}

const navbarList = [
  {
    path: '/',
    title: '编辑器'
  }
];

const hoverList: IHoverItem[] = [
  { title: '学习内容', icon: 'fab fa-bitbucket' },
  { title: '课程设计', icon: 'fab fa-black-tie' },
  { title: '精选内容', icon: 'fab fa-buysellads' },
  { title: '退出登录', icon: 'fas fa-door-closed' }
];

// 状态管理工具返回回来的响应式数据
const userInfo = useUserStore().userInfo;
</script>
<template>
  <div class="flex justify-between items-center">
    <el-breadcrumb class="flex-1" separator="/">
      <el-breadcrumb-item v-for="(item, index) of navbarList" :key="index" :to="{ path: item.path }">{{ item.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="flex justify-between items-center relative cursor-pointer group">
      <img class="w-[45px] h-[45px] rounded-full mr-2" :src="userInfo?.head" alt="" />
      <span class="text-xl">{{ userInfo?.name }}</span>
      <section
        class="absolute translate-y-24 -translate-x-4 border bg-white shadow-md rounded-sm px-3 pb-2 whitespace-nowrap cursor-pointer hidden group-hover:block">
        <nav class="pt-0 border-b border-b-white duration-150 hover:text-green-800" v-for="(item, index) of hoverList" :key="index">
          <i class="mr-2 p-1 py-2" :class="item.icon"></i>
          <span v-if="item.title === '退出登录'" @click="logout">{{ item.title }}</span>
          <span v-else>{{ item.title }}</span>
        </nav>
      </section>
    </div>
  </div>
</template>
<style scoped></style>
