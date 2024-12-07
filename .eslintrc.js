module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json', // Required for Airbnb TypeScript config
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    quotes: ['error', 'single'],
    'prettier/prettier': [
      'error',
      {
        semi: true,
        jsxBracketSameLine: false,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['off'], // Disable the rule for JSX in .tsx files
    'import/extensions': 'off', // Disable the rule for file extensions in import statements
    'object-curly-newline': 'off', // Disable the rule for object curly newlines
    'react/jsx-props-no-spreading': 'off', // Disable the rule for spreading props
  },
};
