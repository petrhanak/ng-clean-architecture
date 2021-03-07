module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleNameMapper: {
    '@ngca/module/main/feature/(.*)': '<rootDir>/modules/main/feature/src/$1',
  },
  testPathIgnorePatterns: ['/node_modules/', '/apps/'],
}
