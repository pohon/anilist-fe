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
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/*.mocks.js'
  ],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "\\.(gql|graphql)$": "jest-transform-graphql",
    ".*": "babel-jest"
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)