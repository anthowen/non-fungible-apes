module.exports = {
  moduleNameMapper: { '\\.css$': 'identity-obj-proxy' },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.stories\\.tsx?$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
}
