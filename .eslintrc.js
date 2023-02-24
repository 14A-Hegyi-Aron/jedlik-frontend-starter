// If you change the settings you will need to restart the ESLint server or VSCode
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["prettier", "@typescript-eslint"],
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-namespace": "off",
    "max-len": ["error", 120],
    "vue/multi-word-component-names": "off",
    "prettier/prettier": ["error", { printWidth: 120 }],
    // "sort-imports": ["error", { ignoreCase: true }],
    "vue/attributes-order": ["error", { alphabetical: true }],
    // "no-console": "error",
  },
  ignorePatterns: ["coverage", "dist", "node_modules"],
};
