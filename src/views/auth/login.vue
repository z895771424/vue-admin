<script lang="ts" setup>
import { getUserInfoApi } from '@/apis/userApi';
import v from '@/plugins/validate';
import store from '@/utils/store';
import { useRouter } from 'vue-router';

const router = useRouter();
const { Form, Field, ErrorMessage } = v;
const schema = {
  username: v.yup.string().email().required().label('账号'),
  password: v.yup.string().min(3).max(16).required().label('密码')
};

const onSubmit = async (value: any) => {
  const {
    result: { token }
  } = await getUserInfoApi(value);
  store.set('token', { expire: 5, token });
  router.push({ name: 'longlong' });
};
</script>

<script lang="ts">
export default {
  route: {
    name: 'login'
  }
};
</script>
<template>
  <div class="h-screen bg-slate-400 flex justify-center items-center">
    <div class="w-[720px] h-[500px] bg-white flex rounded-md overflow-hidden shadow-lg justify-center">
      <div class="hidden md:block">
        <img class="w-full h-full" src="../../../public/images/login.jpg" alt="" />
      </div>
      <div class="w-[400px] flex flex-col items-center">
        <h1 class="text-2xl mt-8 mb-6 p-3">会员登录</h1>
        <Form :validation-schema="schema" #default="{ errors }" @submit="onSubmit">
          <section>
            <Field class="xl-input" name="username" value="895771424@qq.com"></Field>
            <div class="xl-error" v-if="errors.username">{{ errors.username }}</div>
          </section>
          <section class="mt-4">
            <Field class="xl-input" name="password" value="123123123"></Field>
            <div class="xl-error" v-if="errors.password">{{ errors.password }}</div>
          </section>
          <button class="xl-button mt-4">登录</button>
        </Form>
        <div class="font-con mt-8">
          <i class="icon fa-brands fa-weixin p-1 cursor-pointer bg-green-700 text-white rounded-full"></i>
        </div>
        <div class="flex justify-center gap-3 mt-5">
          <xl-link>网站首页</xl-link>
          <xl-link>会员注册</xl-link>
          <xl-link>忘记密码</xl-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
Form {
  @apply w-full flex justify-center flex-col px-14;
}

.icon {
  font-size: 22px;
  line-height: 22px;
}
</style>
