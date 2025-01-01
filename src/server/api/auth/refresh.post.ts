export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig(event)
  const { refreshToken } = parseCookies(event)

  return $fetch<LoginResponse>('/auth/refresh', {
    method: 'post',
    body: { refreshToken },
    baseURL: apiUrl
  })
})
