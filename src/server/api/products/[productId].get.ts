export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig(event)
  const { productId } = getRouterParams(event)

  return $fetch<ProductsResponse>(`/products/${productId}`, {
    baseURL: apiUrl
  })
})
