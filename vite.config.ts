import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import typescript from "@rollup/plugin-typescript";
// import path from "path";
// import { typescriptPaths } from "rollup-plugin-typescript-paths";
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import dts from 'vite-plugin-dts';
import css from 'vite-plugin-css';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

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
  optimizeDeps: {
    exclude: ['**/*.stories.tsx'],
  },
  resolve: {
    alias: {
      // Example alias for src directory
      src: resolve(__dirname, "./src"),
      // You can add more aliases as needed
      // For example:
      // 'components': path.resolve(__dirname, 'src/components'),
      // 'utils': path.resolve(__dirname, 'src/utils'),
    },
  },
});

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     typescript(),
//     typescriptPaths({
//       preserveExtensions: true,
//     }),
//     dts(),
//   ],
//   build: {
//     minify: 'esbuild',
//     lib: {
//       entry: path.resolve(__dirname, 'src/index.ts'),
//       name: 'my-lib',
//       fileName: (format) => `my-lib.${format}.js`,
//     },
//     rollupOptions: {
//       external: [],
//     },
//   },
//   resolve: {
//     alias: {
//       'src': path.resolve(__dirname, './src'),
//     },
//   },
// })

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     dts(),
//     typescriptPaths({
//       preserveExtensions: true,
//     }),
//     typescript({
//       sourceMap: false,
//       declaration: true,
//       outDir: "dist",
//     }),
//   ],
//   // build: {
//   //   minify: 'esbuild',
//   //   lib: {
//   //     entry: path.resolve(__dirname, 'src/index.ts'),
//   //     name: 'my-lib',
//   //     fileName: 'my-lib',
//   //   },
//   // },
//   build: {
//     manifest: true,
//     minify: true,
//     reportCompressedSize: true,
//     lib: {
//       entry: path.resolve(__dirname, "src/index.ts"),
//       // fileName: "index",
//       formats: ["es", "cjs"],
//       fileName: (format) => `index.${format}.js`
//     },
//     rollupOptions: {
//       external: [
//         'react',
//         'react-dom',
//       ],
//       // plugins: [
//       //   // typescriptPaths({
//       //   //   preserveExtensions: true,
//       //   // }),
//       //   // typescript({
//       //   //   sourceMap: false,
//       //   //   declaration: true,
//       //   //   outDir: "dist",
//       //   // }),
//       // ],
//     },
//   },
//   optimizeDeps: {
//     include: [
//       '@mui/material',
//       // Add other packages that may cause issues during the build
//     ],
//   },
//   resolve: {
//     alias: {
//       // Example alias for src directory
//       'src': path.resolve(__dirname, './src'),
//       // You can add more aliases as needed
//       // For example:
//       // 'components': path.resolve(__dirname, 'src/components'),
//       // 'utils': path.resolve(__dirname, 'src/utils'),
//     },
//   },
// })
