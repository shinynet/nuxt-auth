export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig(event)
  const { token } = parseCookies(event)

  const config = useRuntimeConfig(event)
  console.log('config: ', config)

  return $fetch('/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
    baseURL: apiUrl,
  })
})
