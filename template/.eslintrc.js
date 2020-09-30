module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'react-hooks',
    'jsx-a11y'
  ],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": ["warn", { "extensions": [".tsx", ".ts", ".jsx", ".js"] }],
    "import/prefer-default-export": "off",
    "prettier/prettier": "error",
    "react/jsx-props-no-spreading": "off",
    "no-use-before-define": "off"

  },
  settings: {
    "react": { "version": "detect" },
    "import/resolver": { "typescript": {} }
  }
};
