<script setup lang="ts">
import Editor from '@/components/markdown/editor.vue';
import { ref } from 'vue';
const content = ref('Markdown init data');
</script>
<template>
  <div>
    <Editor v-model="content" :height="600" placeholder="请输入markdown内容"></Editor>
  </div>
</template>
<style scoped></style>
