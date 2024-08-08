import UnoCSS from 'unocss/vite';
import { defineConfig, Plugin } from 'vite';

export default defineConfig({
  plugins: [
    UnoCSS({
      mode: 'shadow-dom',
      configFile: './uno.config.ts',
    }) as Plugin,
  ],
  server: {
    proxy: {
      '/apis': {
        target: 'http://localhost:8090',
        changeOrigin: true,
      },
    },
  },
});
