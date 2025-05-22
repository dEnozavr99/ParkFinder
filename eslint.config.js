// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const expoPlugin = require("eslint-plugin-expo");
const simpleImportSortConfig = require("eslint-plugin-simple-import-sort");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
    plugins: {
      expo: expoPlugin,
      "simple-import-sort": simpleImportSortConfig,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
]);
