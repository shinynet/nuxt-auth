export default defineCachedEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig(event)

  return $fetch<Category[]>('/products/categories', {
    baseURL: apiUrl,
  })
}, {
  maxAge: 86_400, // 1 day
})
