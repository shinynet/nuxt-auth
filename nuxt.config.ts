// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@pinia/nuxt', 'nuxt-quasar-ui'],

  devtools: { enabled: true },

  runtimeConfig: {
    apiUrl: process.env.API_URL || 'https://dummyjson.com',
  },

  srcDir: 'src/',

  compatibilityDate: '2024-04-03',

  vite: {
    vue: {
      script: {
        globalTypeFiles: [
          './src/types/index.d.ts',
          './src/types/api.d.ts',
        ],
      },
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
