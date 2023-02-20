module.exports = {
  "env": {
    "node": true,
    "es6": true,
    "mocha": true
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      }
    }
  },
  "extends": "eslint:recommended",
  "rules": {
    "space-before-function-paren": 0
  },
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "requireConfigFile": false
  }
}
