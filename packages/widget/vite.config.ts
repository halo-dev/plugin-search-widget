import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: { 'process.env.NODE_ENV': "'production'" },
  build: {
    outDir: 'build/dist',
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['iife'],
      name: 'SearchWidget',
      fileName: (format) => `search-widget.${format}.js`,
      cssFileName: 'style',
    },
    sourcemap: false,
  },
});
