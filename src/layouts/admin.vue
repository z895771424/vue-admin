<script setup lang="ts">
import XlAside from '@/components/home/xl-aside.vue';
import xlNavbar from '@/components/home/xl-navbar.vue';
import xlHistorylink from '@/components/home/xl-historylink.vue';
</script>

<template>
  <div class="w-screen min-h-screen flex">
    <XlAside class="w-[240px] bg-gray-700 hidden md:block"></XlAside>
    <article class="flex-1 bg-slate-300">
      <xl-navbar class="py-2 px-6 bg-white"></xl-navbar>
      <xl-historylink class="m-2 p-2 rounded-[4px]"></xl-historylink>
      <div class="m-2 rounded-[4px] overflow-hidden">
        <router-view></router-view>
      </div>
    </article>
  </div>
</template>

<style scoped></style>
