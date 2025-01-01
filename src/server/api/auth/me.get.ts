export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig(event)
  const { accessToken } = parseCookies(event)

  return $fetch<AuthUser>('/auth/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    credentials: 'include',
    baseURL: apiUrl
  })
})
