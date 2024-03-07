import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  // async viteFinal(config) {
  //   console.log("config:", JSON.stringify(config, null, 2));
  //   // Merge custom configuration into the default config
  //   return mergeConfig(config, {
  //     // Add storybook-specific dependencies to pre-optimization
  //     // optimizeDeps: {
  //     //   include: ['storybook-addon-designs'],
  //     // },
  //     // config.resolve.extensions.push(".ts", ".tsx");

  //     resolve: {
  //       extentions: [".ts", ".tsx"],
  //       alias: {
  //         ...config?.resolve?.alias,
  //         src: resolve(__dirname, "../src"), // Adjust this path according to your project structure
  //       },
  //     },
  //   });
  // },
  docs: {
    autodocs: "tag",
  },
};
export default config;
