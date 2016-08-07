module.exports = {
    "root": true,
    "env": {
        "browser": true
    },
    "extends": "airbnb-base",
    "rules": {
        "indent": ["error", 4],
        "max-len": ["error", 120],
        "valid-jsdoc": ["error", { "requireReturnDescription": false }],
        "require-jsdoc": "error",
        "import/prefer-default-export": "off"
    },
};
