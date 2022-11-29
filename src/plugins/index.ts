import { App } from 'vue';
import { setupTailwindcss } from './tailwindcss';
import _ from 'lodash';
import { setupElementPlus } from './elementplus';
import { setupPinia } from './pinia';

export const setupPlugins = (app: App) => {
  setupTailwindcss();
  setupElementPlus(app);
  autoRegisterComponent(app);
  setupPinia(app);
};

// 全局组件自动注册
function autoRegisterComponent(app: App) {
  const components = import.meta.globEager('../components/global/**/*.vue');
  Object.entries(components).forEach(([key, component]) => {
    let name = key.split('/').pop()?.split('.')[0] as string;
    // 转换为驼峰命名
    name = _.camelCase(name);
    app.component(name, component.default);
  });
}
