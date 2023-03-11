import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import type { UserConfig as VitestUserConfigInterface } from "vitest/config";

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "setupTest.ts",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: vitestConfig.test,
  resolve: {
    alias: {
      "@netbook": path.resolve(__dirname, "./src"),
    },
  },
});
