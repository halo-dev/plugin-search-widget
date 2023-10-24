import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import path from 'path';
import Dts from 'vite-plugin-dts';
import { Plugin } from 'vite';

export default defineConfig({
  plugins: [
    Dts({
      tsconfigPath: './tsconfig.json',
      entryRoot: './src',
      outDir: './dist',
      insertTypesEntry: true,
    }) as Plugin,
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'HaloSearchWidget',
      fileName: (format) => `halo-search-widget.${format}.js`,
    },
  },
});
