import UnoCSS from 'unocss/vite';
import { defineConfig, type UserConfig } from 'vite';

export default defineConfig({
  plugins: [
    UnoCSS({
      mode: 'shadow-dom',
      configFile: './uno.config.ts',
    }),
  ],
  server: {
    proxy: {
      '/apis': {
        target: 'http://localhost:8090',
        changeOrigin: true,
      },
    },
  },
}) satisfies UserConfig;
