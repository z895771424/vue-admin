<script setup lang="ts">
import { getUserInfoApi } from './apis/user';
const res = await getUserInfoApi();
console.log(res.result);
</script>

<template>
  <router-view />
</template>

<style scoped></style>
