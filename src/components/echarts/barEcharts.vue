<script setup lang="ts">
import echarts, { ECOption } from '@/plugins/echarts';
import { nextTick } from 'process';
import { onMounted } from 'vue-demi';

onMounted(() => {
  nextTick(() => {
    const instance = echarts.init(document.getElementById('echarts') as HTMLElement);
    window.onresize = () => {
      instance.resize();
    };

    instance.setOption<ECOption>({
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  });
});
</script>
<template>
  <div id="echarts"></div>
</template>
<style scoped lang="scss">
#echarts {
  // width: 600px;
  height: 400px;
}
</style>
