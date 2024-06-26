module.exports = {
  roots: ["./"],
  // preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  testPathIgnorePatterns: ["node_modules/"],
  types: ["@testing-library/jest-dom"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  coveragePathIgnorePatterns: [
    "<rootDir>/src/Components/Icon/IconElements",
    "<rootDir>/utils/sb-utils/*",
    ".*\\.theme\\.(ts|tsx)$",
  ],
  moduleDirectories: ["node_modules", "src", "utils"],
  testMatch: ["**/*.test.(ts|tsx)"],
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run.
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "identity-obj-proxy",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@mui/styled-engine$": "<rootDir>/node_modules/@mui/styled-engine",
    "^src/(.*)$": "<rootDir>/src/$1",
    "^test-utils/(.*)$": "<rootDir>/utils/test-utils/$1",
    "^sb-utils/(.*)$": "<rootDir>/utils/sb-utils/$1",
  },
};
