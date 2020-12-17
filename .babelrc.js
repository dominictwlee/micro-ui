const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
  presets: isTest
    ? [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
        '@emotion/babel-preset-css-prop',
      ]
    : ['@emotion/babel-preset-css-prop'],
};
