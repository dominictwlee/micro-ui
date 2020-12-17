module.exports = {
  setupFilesAfterEnv: ['./src/utils/setupTests.ts'],
  transform: {
    '.(ts|tsx)$': require.resolve('babel-jest'),
    '.(js|jsx)$': require.resolve('babel-jest'),
  },
};
