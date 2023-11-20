module.exports = {
  setupFiles: ['./jest.polyfills.js'],
  preset: 'ts-jest/presets/js-with-ts',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/mocks/fileMock.ts',
    '\\.(css|scss)$': '<rootDir>/mocks/styleMock.ts',
  },
  //collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  verbose: true,
  testMatch: ['<rootDir>/src/**/*.test.ts', '<rootDir>/src/**/*.test.tsx'],
};
