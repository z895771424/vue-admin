<script setup lang="ts">
import { nextTick } from 'vue';
import ToastEditor from './toastEditor';

interface IProps {
  modelValue?: string;
  height?: number;
  placeholder?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  height: 600,
  placeholder: ''
});

const emit = defineEmits(['update:modelValue']);

nextTick(() => {
  const toastUi = new ToastEditor('#markdown-editor', `${props.modelValue}`, `${props.height}px`);
  toastUi.editor.on('change', (type: string) => {
    emit('update:modelValue', toastUi.editor[type === 'markdown' ? 'getMarkdown' : 'getHTML']());
  });
});
</script>
<template>
  <div id="markdown-editor"></div>
</template>
<style scoped lang="scss">
#markdown-editor {
  @apply bg-white;
  .toastui-editor-mode-switch {
    display: none !important;
  }

  .fullscreen {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background: #fff;
  }
}
</style>
