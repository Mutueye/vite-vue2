import path from 'path';
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import envCompatible from 'vite-plugin-env-compatible';
import htmlEnv from 'vite-plugin-html-env';
import legacy from '@vitejs/plugin-legacy';

const pathSrc = path.resolve(__dirname, './src');

export default defineConfig({
  plugins: [
    createVuePlugin(),
    legacy({
      targets: ['defaults', 'ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    htmlEnv(),
    envCompatible(),
  ],
  build: {
    commonjsOptions: {
      ignoreDynamicRequires: false,
    },
  },
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
