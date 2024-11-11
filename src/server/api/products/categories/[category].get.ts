export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig(event)
  const query = getQuery(event)
  const category = getRouterParam(event, 'category')
  console.log('category: ', category)

  return $fetch<ProductsResponse>(`/products/category/${category}`, {
    baseURL: apiUrl,
    query,
  })
})
