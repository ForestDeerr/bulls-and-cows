import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import globals from 'globals';

export default tseslint.config(
    {
        ignores: ['dist/**', 'node_modules/**'],
    },

    js.configs.recommended,
    ...tseslint.configs.recommended,

    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2020,
                process: 'readonly',
            },
        },
        plugins: {
            prettier: prettier,
            import: pluginImport,
        },
        rules: {
            'no-undef': 'off',

            'no-debugger': 'off',
            'no-console': 'off',
            'class-methods-use-this': 'off',
            '@typescript-eslint/no-explicit-any': 'error',

            'prettier/prettier': 'error',
        },
    },

    configPrettier
);
