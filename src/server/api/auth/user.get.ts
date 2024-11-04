export default defineEventHandler(async (event) => {
  const { token } = parseCookies(event)

  return $fetch('https://dummyjson.com/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
  })
})
