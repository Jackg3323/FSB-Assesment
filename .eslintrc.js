module.exports = {
  env: {
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: ["standard", "plugin:mocha/recommended", "prettier"],
  globals: {
    $: true,
    $$: true,
    browser: true,
    expect: true,
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["mocha"],
  rules: {},
};
