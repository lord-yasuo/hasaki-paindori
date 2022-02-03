import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hasaki-paindori/',
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      entry: 'src/main.ts',
      template: 'index.html',
      inject: {
        data: {
          title: 'Hasaki Paindori',
          injectScript: `A fansub webpp`,
        },
      },
    })
  ],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
    }
  }
});

