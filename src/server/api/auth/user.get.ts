export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig(event)
  const { token } = parseCookies(event)

  return $fetch<User>('/auth/me', {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
    baseURL: apiUrl,
  })
})
