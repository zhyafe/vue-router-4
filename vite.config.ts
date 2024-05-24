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
  server: {
    port: 8888,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
