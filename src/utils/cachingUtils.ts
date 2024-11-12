import type { NuxtApp } from '#app'

export const getCachedData = (key: string, nuxtApp: NuxtApp) => {
  // Check if the data is already cached in the Nuxt payload
  if (nuxtApp.isHydrating && nuxtApp.payload.data[key]) {
    return nuxtApp.payload.data[key]
  }

  // Check if the data is already cached in the static data
  if (nuxtApp.static.data[key]) {
    return nuxtApp.static.data[key]
  }
  return null
}
