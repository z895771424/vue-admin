import { App } from 'vue';
import { setupTailwindcss } from './tailwindcss'

export const setupPlugins = (app: App) =>{
  setupTailwindcss()
}