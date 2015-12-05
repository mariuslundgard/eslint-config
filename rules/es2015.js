module.exports = {
  env: {
    es6: true
  },

  parser: 'babel-eslint',

  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': [2, 'always'],
    'arrow-spacing': 2,
    'constructor-super': 2,
    'generator-star-spacing': [2, {before: true, after: false}],
    'no-arrow-condition': 2,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-this-before-super': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-reflect': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'require-yield': 2
  }
}
