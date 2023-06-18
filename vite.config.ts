import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [{ src: "./index.html", dest: "dist" }],
      hook: "writeBundle",
    }),
  ],
  build: {
    write: true,
    rollupOptions: {
      input: {
        main: "./src/main.tsx",
        background: "./src/background.ts",
        popup: "./src/popup.tsx",
      },
      output: {
        entryFileNames: "[name].mjs",
      },
    },
  },
});
