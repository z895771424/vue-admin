<script setup lang="ts"></script>
<template>
  <button class="xl-button"><slot></slot></button>
</template>
<style scoped lang="scss">
.xl-button {
  @apply w-full bg-emerald-700 hover:bg-emerald-600 duration-150 py-2 rounded-md text-white;
}
</style>
