import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import removeConsole from "vite-plugin-remove-console";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log("\n\n------------");
  console.log("env:", env.BUILD_MODE);
  console.log("------------\n\n");

  const plugins: any[] = [
    react(),
    libInjectCss(),
    dts({
      include: ["src"],
      exclude: ["**/*.stories.tsx"],
    }),
  ];
  // the build for storybook doesn't like the removeConsole plugin
  // so only add it for lib build.
  // a "lib build" is for publishing the npm package
  if (env.BUILD_MODE === "lib") {
    plugins.push(removeConsole());
  }

  return {
    plugins,
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
        "sb-utils": resolve(__dirname, "./utils/sb-utils"),
      },
    },
  };
});
