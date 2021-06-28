import path from 'path'
import { defineConfig } from 'vite';
const { createVuePlugin } = require('vite-plugin-vue2');

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env,
  },
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
