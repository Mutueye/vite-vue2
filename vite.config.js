import path from 'path';
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import legacy from '@vitejs/plugin-legacy';

const pathSrc = path.resolve(__dirname, './src');

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env,
  },
  plugins: [
    createVuePlugin(),
    legacy({
      targets: ['defaults', 'ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "${pathSrc}/library/style/index.scss";` },
    },
  },
});
