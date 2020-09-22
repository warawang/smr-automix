module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['dist/*.js', '*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      project: './tsconfig.json'
    },
    ecmaVersion: 8,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'no-null'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  ignorePatterns: ['dist/', '/dev-tools'],
  rules: {
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'max-len': [
      'error',
      150,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    yoda: 'error',
    'no-console': 0,
    'linebreak-style': ['error', 'unix'],
    'no-dupe-class-members': 'off',
    'no-unused-vars': 'off',
    'no-useless-computed-key': 'error',
    'no-unsafe-finally': 'error',
    'no-unreachable': 'error',
    'no-constant-condition': 'error',
    'no-var': 'error',
    'no-console': 'off',
    'prefer-const': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Object: {
            message: 'Avoid using the `Object` type. Did you mean `object`?',
            fixWith: 'object'
          },
          Boolean: {
            message: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
            fixWith: 'boolean'
          },
          Number: {
            message: 'Avoid using the `Number` type. Did you mean `number`?',
            fixWith: 'number'
          },
          String: {
            message: 'Avoid using the `String` type. Did you mean `string`?',
            fixWith: 'string'
          }
        }
      }
    ]
  }
};