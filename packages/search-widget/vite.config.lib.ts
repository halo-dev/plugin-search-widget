import UnoCSS from 'unocss/vite';
import { defineConfig, Plugin } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'search-widget',
      fileName: 'index',
      formats: ['es'],
    },
    emptyOutDir: true,
    rollupOptions: {
      output: {
        extend: true,
      },
    },
  },
  plugins: [
    UnoCSS({
      mode: 'shadow-dom',
      configFile: './uno.config.ts',
    }) as Plugin,
    dts() as Plugin,
  ],
});
