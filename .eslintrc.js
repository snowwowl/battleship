module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    //ISSUE: Warning: React version not specified in eslint-plugin-react settings. See https://github.com/jsx-eslint/eslint-plugin-react#configuration
    extends: [
        'eslint:recommended',
        'prettier',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
    ],
    parserOptions: {
        ecmaVersion: 13,
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: ['prettier', 'react'],
    rules: {
        //Errors
        ...[
            'prettier/prettier',
            'react/jsx-uses-react',
            'react/react-in-jsx-scope',
            'react/require-render-return',
            'react/jsx-no-duplicate-props',
            'react/jsx-no-target-blank',
            'react/jsx-no-undef',
        ].reduce((acc, rule) => ((acc[rule] = 'error'), acc), {}),
        //Off Rules
        ...['react/display-name', 'react/no-unescaped-entities'].reduce(
            (acc, rule) => ((acc[rule] = 'off'), acc),
            {}
        ),
    },
}
