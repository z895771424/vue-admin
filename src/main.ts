import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router, { setupRouter } from '@/router/index';
console.log(import.meta.env);
async function bootstrap() {
  const app = createApp(App);
  setupRouter(app);

  await router.isReady();
  app.mount('#app');
}

bootstrap();
