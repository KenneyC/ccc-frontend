module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"]
};