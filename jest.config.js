const config = {
  verbose: true,
  collectCoverageFrom: [
    "src/*.jsx",
    "src/**/*.jsx",
    "packages/**/*.jsx",
    "src/*.js",
    "src/**/*.js",
    "packages/**/*.js",
  ],
  coveragePathIgnorePatterns: ["src/types", "index"],
  moduleNameMapper: {
    ".+\\.(css|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy",
  },
  coverageReporters: ["html", "text-summary"],
  collectCoverage: true,
  transformIgnorePatterns: ["node_modules/(?!axios)"],
  setupFilesAfterEnv: ["./setupTests.js", "@testing-library/jest-dom/extend-expect"],
};

module.exports = config;
