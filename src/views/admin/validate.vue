<script setup lang="ts">
import validate from '@/validate';
const { useForm, useField } = validate;

const { handleSubmit, errors } = useForm({
  initialValues: {
    username: '隆隆',
    password: ''
  },
  validationSchema: {
    username: validate.yup.string().required().email().min(3).max(10).label('邮箱'),
    password: { required: true }
  }
});

const { value: usernameValue } = useField('username', {}, { label: '用户名' });
const { value: passwordValue } = useField('password', {}, { label: '密码' });

const onSubmit = handleSubmit((value) => {
  alert('提交成功');
});
</script>
<template>
  <form @submit="onSubmit">
    <section>
      <input class="xl-input" type="text" v-model="usernameValue" />
      <p class="error">{{ errors.username }}</p>
    </section>
    <section>
      <input class="xl-input" type="password" v-model="passwordValue" />
      <p class="error">{{ errors.password }}</p>
    </section>
    <button>提交</button>
  </form>
</template>
<style scoped></style>
