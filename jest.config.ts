module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  preset: 'ts-jest/presets/default-esm',
  setupFilesAfterEnv: ['jest-extended/all'],
}
