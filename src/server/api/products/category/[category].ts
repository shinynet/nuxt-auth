export default defineCachedEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig(event)
  const { category } = getRouterParams(event)
  const query = getQuery(event)

  return $fetch<ProductsResponse>(`/products/category/${category}`, {
    baseURL: apiUrl,
    query
  })
}, {
  maxAge: 3_600 // 1 hour
})
