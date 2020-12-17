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
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
      // Emotion preset must run BEFORE reacts preset to properly convert css-prop.
      // Babel preset-ordering runs reversed (from last to first). Emotion has to be after React preset.
      require.resolve('@emotion/babel-preset-css-prop'),
    ];

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        babelrc: false,
        presets: [
          ['react-app', { flow: false, typescript: true }],
          // Emotion preset must run BEFORE reacts preset to properly convert css-prop.
          // Babel preset-ordering runs reversed (from last to first). Emotion has to be after React preset.
          require.resolve('@emotion/babel-preset-css-prop'),
        ],
        // other plugins here...
      },
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
