import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import removeConsole from "vite-plugin-remove-console";

export default defineConfig({
  plugins: [
    react(),
    removeConsole(),
    libInjectCss(),
    dts({
      include: ["src"],
      exclude: ["**/*.stories.tsx"],
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        /^react\//,
        "@mui/material",
        "@emotion/react",
        "@emotion/styled",
      ],
    },
  },
  resolve: {
    alias: {
      src: resolve(__dirname, "./src"),
      "test-utils": resolve(__dirname, "./utils/test-utils"),
    },
  },
});
