export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig(event)
  const { userId } = getRouterParams(event)

  return $fetch(`/carts/user/${userId}`, {
    baseURL: apiUrl
  })
})
