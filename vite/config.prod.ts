import path from 'path';
import { defineConfig } from 'vite';

const phasermsg = () => {
  return {
    name: 'phasermsg',
    buildStart() {
      process.stdout.write(`Building for production...\n`);
    },
    buildEnd() {
      const line = '---------------------------------------------------------';
      const msg = `❤️❤️❤️ Tell us about your game! - games@phaser.io ❤️❤️❤️`;
      process.stdout.write(`${line}\n${msg}\n${line}\n`);

      process.stdout.write(`✨ Done ✨\n`);
    },
  };
};

const root = path.resolve('./');

export default defineConfig({
  base: './',
  logLevel: 'warn',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          phaser: ['phaser'],
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        passes: 2,
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
  },
  resolve: {
    alias: {
      '@assets': path.resolve(root, './public/assets'),
      '@scenes': path.resolve(root, './src/scenes'),
      '@config': path.resolve(root, './src/config'),
      '@characters': path.resolve(root, './src/characters'),
      '@utils': path.resolve(root, './src/utils'),
    },
  },
  assetsInclude: ['**/*.xml'],
  server: {
    port: 8080,
  },
  plugins: [phasermsg()],
});
