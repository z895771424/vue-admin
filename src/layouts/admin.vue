<script setup lang="ts">
import XlAside from '@/components/home/xl-aside.vue';
import xlNavbar from '@/components/home/xl-navbar.vue';
import xlHistorylink from '@/components/home/xl-historylink.vue';
import { Transition } from 'vue';
</script>

<template>
  <div class="w-screen h-screen grid grid-cols-[auto_1fr]">
    <XlAside class="w-[240px] bg-gray-700 hidden md:block"></XlAside>
    <article class="bg-slate-300 grid grid-rows-[auto_1fr]">
      <div>
        <xl-navbar class="pytepx-6 bg-white"></xl-navbar>
        <xl-historylink class="m-2 p-2 rounded-[4px]"></xl-historylink>
      </div>
      <div class="mx-2 rounded-[4px] relative overflow-y-auto">
        <router-view #default="{ Component, route }">
          <Transition
            appear
            :enter-active-class="route.meta.enterClass ?? 'animate__animated animate__fadeInRightBig'"
            :leave-active-class="route.meta.leaveClass ?? 'animate__animated animate__fadeOutLeft'">
            <component class="absolute w-full" :is="Component"></component>
          </Transition>
        </router-view>
      </div>
    </article>
  </div>
</template>

<style scoped></style>
