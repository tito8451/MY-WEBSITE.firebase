import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";
import svgr from "vite-plugin-svgr";
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "common",
        replacement: "src/common",
      },
    ],
  },
  plugins: [[react()], envCompatible(), svgr({ svgrOptions: {} })],
});
// vite.config.ts
