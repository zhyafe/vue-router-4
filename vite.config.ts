import { defineConfig } from "vite";
import path from "path";
import url from "url";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": url.fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
