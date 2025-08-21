import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy:
      mode === "development"
        ? {
            "/api": {
              target: "http://localhost:4003", // ✅ FIXED
              changeOrigin: true,
              secure: false,
            },
          }
        : undefined,
  },
  build: {
    outDir: "dist/spa",
    emptyOutDir: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));
