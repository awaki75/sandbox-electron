const { defaults } = require('jest-config');

module.exports = {
  transform: {
    '\\.tsx?$': 'ts-jest',
  },
  testRegex: '\\.(test|spec)\\.tsx?$',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  collectCoverage: false,
  collectCoverageFrom: ['src/renderer/**/*.{ts,tsx}'],
};
