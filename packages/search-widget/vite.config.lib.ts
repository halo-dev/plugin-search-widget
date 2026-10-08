import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
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
    rolldownOptions: {
      output: {
        extend: true,
      },
    },
  },
  plugins: [
    UnoCSS({
      mode: 'shadow-dom',
      configFile: './uno.config.ts',
    }),
    dts(),
  ],
});
