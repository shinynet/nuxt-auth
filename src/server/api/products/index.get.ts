export default defineCachedEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig(event)
  const query = getQuery(event)
  console.log('query: ', query)
  console.log('log anything....')

  return $fetch<ProductsResponse>('/products', {
    baseURL: apiUrl,
    query,
  })
}, {
  maxAge: 3_600, // 1 hour
})
