// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    'nuxt-quasar-ui',
    '@nuxtjs/i18n'
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  devtools: { enabled: true },

  css: [
    '~/assets/css/styles.scss',
    '~/assets/css/quasar.extend.library.scss'
  ],

  runtimeConfig: {
    apiUrl: process.env.API_URL || 'https://dummyjson.com'
  },

  srcDir: 'src/',

  compatibilityDate: '2024-04-03',

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          silenceDeprecations: ['import', 'global-builtin', 'legacy-js-api']
        },
        scss: {
          silenceDeprecations: ['import', 'global-builtin', 'legacy-js-api']
        }
      }
    },
    vue: {
      script: {
        // makes types globally available in .vue files
        globalTypeFiles: [
          './src/types/index.d.ts',
          './src/types/api.d.ts'
        ]
      }
    }
  },

  eslint: {
    config: {
      stylistic: true
    }
  },

  i18n: {
    locales: [
      { code: 'en', language: 'en-US' }
    ],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts'
  },

  quasar: {
    sassVariables: '~/assets/css/quasar.variables.scss',
    quietSassWarnings: true,
    extras: {
      font: 'roboto-font'
    }
  }

})
