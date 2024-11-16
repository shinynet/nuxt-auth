// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    'nuxt-quasar-ui'
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
          // suppresses deprecations warnings
          silenceDeprecations: ['legacy-js-api']
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

  quasar: {
    sassVariables: '~/assets/css/quasar.variables.scss',
    quietSassWarnings: true,
    plugins: ['Screen']
  }

})
