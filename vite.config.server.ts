import { defineConfig } from "vite";
import path from "path";

// Server build configuration for Railway
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "server/node-build.ts"), // ✅ backend entry file
      name: "server",
      fileName: "node-build", // ✅ final output: node-build.mjs
      formats: ["es"],
    },
    outDir: "dist/server", // ✅ matches your package.json
    target: "node20", // ✅ Railway is Node 20 by default (safe)
    ssr: true,
    rollupOptions: {
      external: [
        // built-in node modules
        "fs",
        "path",
        "url",
        "http",
        "https",
        "os",
        "crypto",
        "stream",
        "util",
        "events",
        "buffer",
        "querystring",
        "child_process",

        // external deps
        "express",
        "cors",
        "mongoose",
      ],
      output: {
        format: "es",
        entryFileNames: "[name].mjs", // => node-build.mjs
      },
    },
    minify: false,
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
