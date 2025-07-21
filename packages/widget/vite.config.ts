import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  experimental: {
    enableNativePlugin: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: { 'process.env.NODE_ENV': "'production'" },
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
      cssFileName: 'style',
    },
    sourcemap: false,
  },
});
