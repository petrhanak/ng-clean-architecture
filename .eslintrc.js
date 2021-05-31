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
  settings: {
    'import/resolver': {
      typescript: {
        project: [
          'apps/desktop/tsconfig.json',
          'apps/static-web/tsconfig.json',
          'apps/web/tsconfig.json',
          'apps/web-e2e/tsconfig.json',
          'modules/main/core/tsconfig.json',
          'modules/main/feature/tsconfig.json',
        ],
      }
    },
  },
}