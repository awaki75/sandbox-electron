const { defaults } = require('jest-config');

module.exports = {
  transform: {
    '\\.ts$': 'ts-jest',
    '\\.vue$': 'vue-jest',
  },
  testRegex: '\\.(test|spec)\\.ts$',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
  collectCoverage: false,
  collectCoverageFrom: ['src/renderer/**/*.{ts,vue}', '!src/renderer/vue-shims.d.ts'],
};
