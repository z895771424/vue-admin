<script setup lang="ts">
const props = defineProps(['modelValue']);
</script>
<template>
  <input class="xl-input" :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" type="text" />
</template>
<style scoped lang="scss">
.xl-input {
  @apply w-full border-2 p-1 rounded-md  mb-6 h-10;
}
</style>
