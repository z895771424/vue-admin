<script setup lang="ts">
import echarts, { ECOption } from '@/plugins/echarts';
import { nextTick } from 'process';
import { onMounted } from 'vue-demi';

onMounted(() => {
  nextTick(() => {
    const instance = echarts.init(document.getElementById('echarts1') as HTMLElement);
    window.onresize = () => {
      instance.resize();
    };

    instance.setOption<ECOption>({
      series: [
        {
          type: 'pie',
          data: [
            {
              value: 335,
              name: '直接访问'
            },
            {
              value: 122,
              name: '联盟广告'
            },
            {
              value: 333,
              name: '搜索引擎'
            }
          ]
        }
      ]
    });
  });
});
</script>
<template>
  <div id="echarts1"></div>
</template>
<style scoped lang="scss">
#echarts1 {
  height: 400px;
}
</style>
