# eslint-config-ml [![Build Status](https://travis-ci.org/mariuslundgard/eslint-config-ml.svg?branch=master)](https://travis-ci.org/mariuslundgard/eslint-config-ml) [![Coverage Status](https://img.shields.io/coveralls/mariuslundgard/eslint-config-ml/master.svg?style=flat)](https://coveralls.io/github/mariuslundgard/eslint-config-ml?branch=master) [![npm version](https://img.shields.io/npm/v/eslint-config-ml.svg?style=flat)](https://www.npmjs.com/package/eslint-config-ml)

A complete [ESLint](http://eslint.org/) configuration.

## Installation

First install the package using [npm](http://npmjs.com/):

```sh
npm install eslint-config-ml
```

Then create an `.eslintrc.json` file:

```json
{
  "extends": [
    "ml"
  ]
}
```

When not using ES6, extend only the core rules:

```json
{
  "extends": [
    "ml/rules/core"
  ]
}
```

## Overriding rules

If you prefer to use semicolons, then add the `semi` rule like this:

```json
{
  "extends": [
    "ml"
  ],
  "rules": {
    "semi": [2, "always"]
  }
}
```

Similarly, other rules can be overridden. Check the list of available [ESLint rules](http://eslint.org/docs/rules/).
