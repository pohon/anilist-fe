const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  collectCoverage: true,
  collectCoverageFrom: [
    "components/*.{js,jsx}",
    "pages/*.{js,jsx}",
    "pages/**/*.{js,jsx}",
    "pages/**/**/*.{js,jsx}",
    "pages/**/**/**/*.{js,jsx}",
    "components/*.{js,jsx}"
  ],
  coverageReporters: ['html', 'lcov'],
  coverageThreshold: {
    "global": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "\\.(gql|graphql)$": "jest-transform-graphql",
    ".*": "babel-jest"
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)