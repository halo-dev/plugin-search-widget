import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    'process.env': process.env,
  },
  build: {
    outDir: fileURLToPath(
      new URL('../../src/main/resources/static', import.meta.url)
    ),
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['iife'],
      name: 'SearchWidget',
      fileName: (format) => `search-widget.${format}.js`,
    },
    sourcemap: false,
  },
});
