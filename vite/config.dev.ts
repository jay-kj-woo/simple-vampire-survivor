import path from 'path';
import { defineConfig } from 'vite';

const root = path.resolve('./');

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          phaser: ['phaser'],
        },
      },
    },
  },
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@assets': path.resolve(root, './public/assets'),
      '@scenes': path.resolve(root, './src/scenes'),
      '@config': path.resolve(root, './src/config'),
    },
  },
  assetsInclude: ['**/*.xml'],
});
