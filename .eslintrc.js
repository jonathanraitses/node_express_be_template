module.exports = {
    plugins: ['prettier', '@typescript-eslint'],
    extends: [
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
    ],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    },
};
