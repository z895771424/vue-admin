<script setup lang="ts"></script>
<template>
  <a class="xl-link"><slot></slot></a>
</template>
<style scoped>
.xl-link {
  @apply text-gray-700 cursor-pointer hover:text-gray-900 duration-150;
}
</style>
