import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "HaloSearchWidget",
      formats: ["es", "iife"],
      fileName: (format) => `halo-search-widget.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        globals: {
          vue: "Vue",
          "vue-router": "VueRouter",
        },
        exports: "named",
      },
    },
  },
});
