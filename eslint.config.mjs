// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
)
  .override('nuxt/vue/rules', {
    rules: {
      'vue/html-closing-bracket-newline': [
        'error',
        {
          multiline: 'never',
          selfClosingTag: {
            multiline: 'never'
          }
        }
      ],

      'vue/html-closing-bracket-spacing': ['error', {
        selfClosingTag: 'never'
      }]
    }
  })
  .override('nuxt/stylistic', {
    rules: {
      '@stylistic/comma-dangle': ['error', 'never']
    }
  })

/* configs
gitignore,
nuxt/javascript,
nuxt/typescript/setup,
nuxt/typescript/rules,
nuxt/vue/setup,
nuxt/vue/rules,
nuxt/import/rules,
nuxt/setup,
nuxt/vue/single-root,
nuxt/rules,
nuxt/sort-config,
nuxt/stylistic,
nuxt/disables/routes,
nuxt/import-globals
 */
