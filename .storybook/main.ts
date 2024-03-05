import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from 'vite';

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
  async viteFinal(config) {
    console.log('config:', JSON.stringify(config, null, 2));
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add storybook-specific dependencies to pre-optimization
      // optimizeDeps: {
      //   include: ['storybook-addon-designs'],
      // },
    });
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
