import vue from '@vitejs/plugin-vue';
import { Plugin } from 'vite';
import { setupMockPlugin } from './mock';
import { visualizer } from 'rollup-plugin-visualizer';
import setupElementPlus from './elementplus';

export default function setupPlugins(isBuild: boolean, env: Record<string, any>) {
  const plugins: Plugin[] = [vue(), visualizer()];

  plugins.push(setupMockPlugin(isBuild));

  setupElementPlus(plugins);

  return plugins;
}
