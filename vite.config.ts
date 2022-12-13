import { ConfigEnv, defineConfig, loadEnv } from 'vite';
import alias from './vite/alias';
import { parseEnv } from './vite/util';
import setupPlugins from './vite/plugins';

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build';
  const root = process.cwd();
  const env = parseEnv(loadEnv(mode, root));

  return {
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias
    },
    build: {
      rollupOptions: {
        // 是否清空目录
        emptyOutDir: true,
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      }
    }
  };
};
