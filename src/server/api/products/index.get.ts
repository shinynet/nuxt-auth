export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig(event)
  const query = getQuery(event)

  return $fetch<ProductsResponse>('/products', {
    baseURL: apiUrl,
    query
  })
})
