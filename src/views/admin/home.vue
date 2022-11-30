<script setup lang="ts">
import barEcharts from '@/components/echarts/barEcharts.vue';
import pieEcharts from '@/components/echarts/pieEcharts.vue';

interface ICard {
  title: string;
  price: number;
  icon: string;
  iconColor: string;
  totalTitle: string;
  total: number;
}

const cards = [
  { title: '总人数', price: 23343, iconColor: 'text-violet-500', icon: 'fas fa-address-card', total: 3892982, totalTitle: '总人数' },
  { title: '销售额', price: 18393, iconColor: 'text-green-600', icon: 'fas fa-apple-alt', total: 9387382, totalTitle: '总销售额' },
  { title: '订单数', price: 3803, iconColor: 'text-blue-500', icon: 'fas fa-award', total: 83493, totalTitle: '总订单数' },
  { title: '评论数', price: 8994, iconColor: 'text-red-500', icon: 'fas fa-baseball-ball', total: 48920, totalTitle: '总评论' }
] as ICard[];
</script>

<template>
  <div>
    <div class="grid md:grid-cols-4 gap-3">
      <el-card v-for="(item, index) in cards" :key="index" shadow="hover">
        <template #header>
          <div class="flex justify-between items-center">
            <span>{{ item.title }}</span>
            <el-tag type="danger" size="small" effect="dark">月</el-tag>
          </div>
        </template>
        <article>
          <section class="flex justify-between items-center text-3xl">
            <span>${{ item.price }}</span>
            <i :class="[item.icon, item.iconColor]"></i>
          </section>
          <section class="flex justify-between items-center mt-6">
            <span>{{ item.totalTitle }}</span>
            <span>{{ item.total }}</span>
          </section>
        </article>
      </el-card>
    </div>
    <article class="mt-2 grid md:grid-cols-2 gap-3 rounded-[4px]">
      <el-card shadow="hover">
        <template #header>
          <h1 class="text-xl">数据统计</h1>
        </template>
        <barEcharts></barEcharts>
      </el-card>
      <el-card shadow="hover">
        <template #header>
          <h1 class="text-xl">业务管理</h1>
        </template>
        <pie-echarts></pie-echarts>
      </el-card>
    </article>
  </div>
</template>
<style scoped></style>
