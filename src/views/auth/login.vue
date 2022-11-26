<script lang="ts" setup>
import { reactive } from 'vue';
const form = reactive({
  username: '1232',
  password: ''
});
</script>
<template>
  <div class="h-screen bg-slate-400 flex justify-center items-center">
    <div class="w-[720px] h-[500px] bg-white flex rounded-md overflow-hidden shadow-lg justify-center">
      <div class="hidden md:block">
        <img class="w-full h-full" src="../../../public/images/login.jpg" alt="" />
      </div>
      <div class="w-[400px] flex flex-col items-center">
        <h1 class="text-2xl m-8 p-3">会员登录</h1>
        <form class="w-full mt-4 flex justify-center flex-col px-14">
          <xl-input v-model="form.username" placeholder="请输入手机号或邮箱"></xl-input>
          <xl-input v-model="form.password" type="password" placeholder="请输入密码"></xl-input>
          <xl-button>登录</xl-button>
          <div class="flex justify-center gap-3 mt-5">
            <xl-link>网站首页</xl-link>
            <xl-link>会员注册</xl-link>
            <xl-link>忘记密码</xl-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
