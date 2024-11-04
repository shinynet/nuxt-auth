export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore()

  const { execute: login } = useAsyncData(() => authStore.fetchUser(), {
    immediate: false,
  })

  const token = useCookie('token').value
  const isAuthenticated = authStore.isAuthenticated

  if (token && !isAuthenticated) {
    await login()
  }
})
