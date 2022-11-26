<script setup lang="ts">
import v from '@/plugins/validate';
const { Form, Field } = v;

const onSubmit = () => {
  alert('验证通过时执行');
};
</script>
<template>
  <Form class="xl-form" @submit="onSubmit">
    <Field name="name" label="帐号" :rules="{ required: true, email: true }" :validate-on-input="true" #default="{ errorMessage, field }">
      <input class="xl-input" type="text" v-bind="field" />
      {{ errorMessage }}
    </Field>
    <Field class="xl-input" label="邮箱" name="email"></Field>
    <!-- <ErrorMessage class="error-msg" name="email" /> -->
    <hr />
    <button class="px-10 py-2 border border-teal-500 bg-blue-800 text-white rounded-sm">提交</button>
  </Form>
</template>
<style scoped lang="scss">
.xl-form {
  @apply w-screen h-screen flex justify-center items-center flex-col;
}
.xl-input {
  @apply h-9 border-2 border-amber-500;
}

.error-msg {
  @apply border-2 p-2 border-blue-400 mt-3 mb-3;
}
</style>
