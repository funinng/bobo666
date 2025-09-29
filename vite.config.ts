import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import VueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  plugins: [vue(), tailwindcss(), VueDevTools()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
