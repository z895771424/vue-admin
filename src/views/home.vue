<script setup lang="ts"></script>
<script lang="ts">
export default {};
</script>

<template>
  <div class="w-screen h-screen bg-slate-600 flex justify-center items-center flex-col">
    <img class="w-40 h-40 rounded-full" src="../assets/img/head.jpg" />
    <div class="p-8">
      <router-link class="xl-button w-36 text-center m-2 px-4 text-2xl" :to="{ name: 'auth.login' }">账号登录</router-link>
      <router-link class="xl-button w-36 text-center m-2 px-4 text-2xl" :to="{ name: 'admin.home' }">后台管理</router-link>
    </div>
    <h1 class="text-4xl text-white">人生得意须尽欢，莫使金樽空对月</h1>
  </div>
</template>

<style scoped></style>
