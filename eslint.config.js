import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import love from 'eslint-config-love';
import reactPlugin from 'eslint-plugin-react';
import tsParser from '@typescript-eslint/parser';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, love],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint.plugin,
      react: reactPlugin,
      '@stylistic': stylistic,
      'import': importPlugin,
    },
    rules: {
      // ===== Import 相關規則 =====
      'import/order': [
        'warn',
        {
          'pathGroups': [
            {
              'pattern': 'react',
              'group': 'builtin',
              'position': 'before'
            },
            {
              'pattern': '~/**',
              'group': 'external',
              'position': 'after'
            }
          ],
          'pathGroupsExcludedImportTypes': ['react'],
          'groups': [
            'builtin',
            'external',
            'internal',
            'unknown',
            'parent',
            'sibling',
            'index',
            'object',
            'type'
          ],
          'alphabetize': {
            'order': 'asc'
          },
          'newlines-between': 'always'
        }
      ],
      // ===== React 相關規則 =====
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-key': 'warn',
      'react/jsx-no-useless-fragment': 'off',
      'react/jsx-fragments': 'warn',
      'react/self-closing-comp': 'warn',
      'react/jsx-one-expression-per-line': [
        'error',
        {
          allow: 'single-child',
        },
      ],
      'react/jsx-props-no-multi-spaces': 'error',
      'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
      'react/jsx-curly-brace-presence': ['error'],
      'react/jsx-curly-spacing': [
        'warn',
        {
          when: 'never',
          children: true,
        },
      ],
      'react/jsx-equals-spacing': [2, 'never'],
      'react/jsx-indent': [
        'warn',
        2,
        {
          checkAttributes: true,
          indentLogicalExpressions: true,
        },
      ],
      'react/jsx-indent-props': ['warn', 2],
      'react/jsx-tag-spacing': [
        'warn',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never',
        },
      ],

      // ===== React Hooks 相關規則 =====
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],

      // ===== TypeScript 相關規則 =====
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-magic-numbers': [
        'warn',
        {
          ignore: [-1, 0, 1, 2],
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true,
          ignoreEnums: true,
          ignoreNumericLiteralTypes: true,
          ignoreReadonlyClassProperties: true,
          ignoreTypeIndexes: true,
        },
      ],
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/no-throw-literal': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-dynamic-delete': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/promise-function-async': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array',
        },
      ],
      '@typescript-eslint/no-use-before-define': 'error',

      // ===== 程式碼風格規則 (使用 @stylistic) =====
      '@stylistic/indent': ['error', 2],
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/space-infix-ops': ['error', { int32Hint: false }],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'only-multiline',
        },
      ],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'comma',
            requireLast: true,
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false,
          },
          multilineDetection: 'brackets',
        },
      ],
      '@stylistic/type-annotation-spacing': 'error',
      '@stylistic/comma-spacing': ['error', {
        before: false,
        after: true
      }],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/arrow-spacing': ['error', {
        before: true,
        after: true
      }],
      '@stylistic/block-spacing': ['error', 'always'],
      '@stylistic/brace-style': ['error', '1tbs', {
        allowSingleLine: true
      }],
      '@stylistic/comma-style': ['error', 'last'],
      '@stylistic/dot-location': ['error', 'property'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/func-call-spacing': ['error', 'never'],
      '@stylistic/key-spacing': ['error', {
        beforeColon: false,
        afterColon: true
      }],
      '@stylistic/keyword-spacing': ['error', {
        before: true,
        after: true
      }],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/max-len': ['error', {
        code: 100,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }],
      '@stylistic/multiline-ternary': ['error', 'always-multiline'],
      '@stylistic/new-parens': 'error',
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', {
        max: 1,
        maxEOF: 0
      }],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true
      }],
      '@stylistic/operator-linebreak': ['error', 'after'],
      '@stylistic/padded-blocks': ['error', 'never'],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/rest-spread-spacing': ['error', 'never'],
      '@stylistic/semi-spacing': ['error', {
        before: false,
        after: true
      }],
      '@stylistic/space-before-blocks': ['error', 'always'],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/space-unary-ops': ['error', {
        words: true,
        nonwords: false
      }],
      '@stylistic/spaced-comment': ['error', 'always'],
      '@stylistic/template-curly-spacing': ['error', 'never'],
      '@stylistic/template-tag-spacing': ['error', 'never'],
      '@stylistic/wrap-iife': ['error', 'outside'],
      '@stylistic/yield-star-spacing': ['error', {
        before: false,
        after: true
      }],

      // ===== 其他規則 =====
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
      'no-process-env': ['error'],
      'object-shorthand': 'warn',
      'jsx-quotes': ['warn', 'prefer-double'],
    },
  },
);
