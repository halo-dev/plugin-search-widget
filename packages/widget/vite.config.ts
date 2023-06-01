import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  build: {
    outDir: fileURLToPath(
      new URL("../../src/main/resources/static", import.meta.url)
    ),
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["iife"],
      name: "SearchWidget",
      fileName: (format) => `search-widget.${format}.js`,
    },
    sourcemap: false,
  },
  optimizeDeps: {
    include: ["vue"],
  },
});
