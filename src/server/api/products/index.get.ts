export default defineCachedEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig(event)
  const query = getQuery(event)

  return $fetch<ProductsResponse>('/products', {
    baseURL: apiUrl,
    query
  })
}, {
  maxAge: 3_600 // 1 hour
})
