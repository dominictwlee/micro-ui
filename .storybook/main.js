const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/**/*.stories.@(ts|tsx|js|jsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: false, // type-check stories during Storybook build
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules[0].use[0].options.presets.push(
      require.resolve('@emotion/babel-preset-css-prop')
    );

    return config;
  },
};
