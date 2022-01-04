module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb-base"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "comma-dangle": "off",
        "quotes": "off",
        "arrow-body-style": 0,
        "space-before-function-paren": 0
    }
};
