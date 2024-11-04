export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  return $fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    body,
    credentials: 'include',
  })
})
