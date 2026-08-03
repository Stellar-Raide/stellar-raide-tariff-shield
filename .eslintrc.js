module.exports = {
  root: true,
  extends: ["stellar-raide-tariff-shield"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      "./apps/api/tsconfig.json",
      "./apps/web/tsconfig.json",
      "./packages/sdk/tsconfig.json",
    ],
  },
  ignorePatterns: ["dist/**", "node_modules/**", ".next/**", "playwright-report/**"],
};
