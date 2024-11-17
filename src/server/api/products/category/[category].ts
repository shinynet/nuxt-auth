export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig(event)
  const { category } = getRouterParams(event)
  const query = getQuery(event)

  return $fetch<ProductsResponse>(`/products/category/${category}`, {
    baseURL: apiUrl,
    query
  })
})
