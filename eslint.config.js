import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import love from 'eslint-config-love'
import reactPlugin from 'eslint-plugin-react'
import tsParser from '@typescript-eslint/parser'
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, love],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...globals.browser,
        ...globals.es2021
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json']
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint.plugin,
      'react': reactPlugin,
      '@stylistic': stylistic
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-indent': ['warn', 2, {
        checkAttributes: true,
        indentLogicalExpressions: true
      }],
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      'react/self-closing-comp': 'warn',
      'react/jsx-indent-props': ['warn', 2],
      'react/jsx-tag-spacing': ['warn', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }],
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      'react/jsx-curly-brace-presence': ['error'],
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      // Magic numbers rule
      '@typescript-eslint/no-magic-numbers': ['warn', {
        ignore: [-1, 0, 1, 2], // 允許常用的數字
        ignoreArrayIndexes: true, // 允許陣列索引
        ignoreDefaultValues: true, // 允許預設值
        ignoreEnums: true, // 允許列舉值
        ignoreNumericLiteralTypes: true, // 允許數字字面量類型
        ignoreReadonlyClassProperties: true, // 允許唯讀類屬性
        ignoreTypeIndexes: true // 允許類型索引
      }],
      'comma-dangle': 'off',
      'indent': 'off',
      'no-unused-vars': 'off',
      'space-before-function-paren': 'off',
      'space-infix-ops': 'off',
      'semi': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-console': ['warn', {
        allow: ['warn', 'error']
      }],
      'no-process-env': ['error'],
      'react/prop-types': 'off',
      'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
      'jsx-quotes': ['warn', 'prefer-double'],
      'react/jsx-curly-spacing': ['warn', {
        when: 'never',
        children: true
      }],
      'react/jsx-fragments': 'warn',
      'react/jsx-equals-spacing': [2, 'never'],
      'object-shorthand': 'warn',
      'react/jsx-one-expression-per-line': ['error', {
        allow: 'single-child'
      }],
      'react/jsx-props-no-multi-spaces': 'error',
      'react/jsx-no-useless-fragment': 'off',
      '@typescript-eslint/no-throw-literal': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-dynamic-delete': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/promise-function-async': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }],
      '@typescript-eslint/array-type': ['error', {
        default: 'array'
      }],
      'no-extra-semi': 'off',
      'react/jsx-key': 'warn',
      // Stylistic rules
      '@stylistic/indent': ['error', 2],
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/space-infix-ops': ['error', { int32Hint: false }],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline'
      }],
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'comma',
          requireLast: true
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false
        },
        multilineDetection: 'brackets'
      }],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/type-annotation-spacing': 'error',
      // Non-null assertion rule
      '@typescript-eslint/no-non-null-assertion': 'error'
    }
  }
)
