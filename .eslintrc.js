/**
 *@Description: eslint config
 *@author: Wangsenyang
 *@Date: 2019/11/22
 */

// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
    },
    env: {
        browser: true,
    },
    extends: ['plugin:vue/recommended', 'airbnb-base'],
    // extends: 'recommended',
    // required to lint *.vue files
    plugins: [
        'vue',
    ],
    // check if imports actually resolve
    settings: {
        'import/resolver': {
            webpack: {
                config: 'node_modules/@vue/cli-service/webpack.config.js',
            },
        },
    },
    rules: {
        'indent': 0,
        'vue/script-indent': ['warn', 4, { 'baseIndent': 0 }],
        'vue/html-indent': ['error', 4],
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            js: 'never',
            vue: 'never',
        }],
        'import/no-cycle': ['off'],
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: [
                'state', // for vuex state
                'acc', // for reduce accumulators
                'e' // for e.returnvalue
            ],
        }],
        'import/no-extraneous-dependencies': ['error', {
            optionalDependencies: ['test/unit/index.js'],
        }],
        'max-len': ['error', { code: 200 }],
        'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
        'semi': 0,
        'no-console': 0,
        'radix': 0,
        'no-multi-assign': 0,
        'linebreak-style': 0,
        'vue/order-in-components': 0,
        'no-underscore-dangle': 0,
        'import/no-unresolved': 2,
        'no-alert': 0,
        'object-curly-newline': 0,
        'no-param-reassign': 0,
        //规则自行扩展
    },
};
