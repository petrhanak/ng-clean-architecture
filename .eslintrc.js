const typescript = require('@linters/eslint-config-angular/typescript')
const components = require('@linters/eslint-config-angular/components')
const templates = require('@linters/eslint-config-angular/templates')

module.exports = {
  overrides: [{
    ...typescript,
    extends: [
      ...typescript.extends,
      '@linters/eslint-config-jest'
    ]
  }, components, templates],
  ignorePatterns: ['lib'],
}