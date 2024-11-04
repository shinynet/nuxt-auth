import type { NuxtApp } from '#app'

export const getCachedData = (key: string, nuxtApp: NuxtApp) => {
  // Check if the data is already cached in the Nuxt payload
  console.log('key: ', key)
  if (nuxtApp.isHydrating && nuxtApp.payload.data[key]) {
    console.log('found here')
    return nuxtApp.payload.data[key]
  }

  // Check if the data is already cached in the static data
  if (nuxtApp.static.data[key]) {
    console.log('found there')
    return nuxtApp.static.data[key]
  }
  console.log('not found')
  return null
}
