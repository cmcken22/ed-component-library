import { defineConfig } from 'vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import dts from 'vite-plugin-dts';
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: ["src"] }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime", 
        /^react\//,
        '@mui/material'
      ],
    },
  },
  // optimizeDeps: {
  //   exclude: ['**/*.stories.tsx'],
  // },
  resolve: {
    alias: {
      src: resolve(__dirname, "./src"),
    },
  },
});
