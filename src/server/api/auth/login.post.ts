export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig(event)
  const body = await readBody(event)

  return $fetch<LoginResponse>('/auth/login', {
    method: 'POST',
    body,
    credentials: 'include',
    baseURL: apiUrl,
  })
})
