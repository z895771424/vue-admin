<script setup lang="ts">
import { ref } from 'vue';

const activeName = ref('site');
let noteVisable = ref(false);

const handleNote = () => {
  noteVisable.value = !noteVisable.value;
};

document.documentElement.addEventListener('click', () => {
  if (noteVisable.value) {
    noteVisable.value = false;
  }
});
</script>
<template>
  <div class="relative" title="通知">
    <i class="fab fa-bandcamp text-3xl" @click.stop="handleNote"></i>
    <el-tabs v-model="activeName" class="demo-tabs" v-show="noteVisable" @click.stop>
      <el-tab-pane label="站内信息" name="site">
        <a href=""> 开始了服了时代精神的开了房间蓝思科技东方冷库设计都封了可视对讲冯老师蓝思科技地方看来是 </a>
        <a href=""> 开始了服了时代精神的开了房间蓝思科技东方冷库设计都封了可视对讲冯老师蓝思科技地方看来是 </a>
        <a href=""> 开始了服了时代精神的开了房间蓝思科技东方冷库设计都封了可视对讲冯老师蓝思科技地方看来是 </a>
      </el-tab-pane>
      <el-tab-pane label="网站消息" name="web"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<style scoped lang="scss">
.el-tabs {
  @apply absolute -left-10 bg-white p-2 rounded-lg shadow-md w-[230px] z-50;

  a {
    @apply my-1 truncate block w-auto border-b p-1 border-b-slate-300 rounded-md duration-100 hover:bg-blue-600 hover:text-white;
  }
}
</style>
