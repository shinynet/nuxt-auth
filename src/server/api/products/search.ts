export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig(event)
  const query = getQuery(event)

  return $fetch<ProductsResponse>('/products/search', {
    baseURL: apiUrl,
    query
  })
})
