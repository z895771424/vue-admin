<script setup lang='ts'>
interface ITag {
  title: string
}

const tagList = [
  {title: '错误页面'},
  {title: '错误页面'},
  {title: '错误页面'},
  {title: '错误页面'},
  {title: '错误页面'},
]as ITag[]
</script>
<template>
  <div class="flex justify-start items-center flex-wrap gap-3 bg-white">
    <nav class="flex items-center border py-1 px-2  rounded-md bg-gray-300" v-for="(item,index) of tagList" :key="index">
      <span class="mr-2  ">{{item.title}}</span>
      <i class="fas fa-circle-xmark text-gray-600 cursor-pointer"></i>
    </nav>
  </div>
</template>
<style scoped lang="scss">
</style>