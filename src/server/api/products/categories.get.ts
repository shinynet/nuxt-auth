export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig(event)

  return $fetch<Category[]>('/products/categories', {
    baseURL: apiUrl,
  })
})
