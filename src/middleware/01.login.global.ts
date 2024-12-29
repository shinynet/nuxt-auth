export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.client) return

  const authStore = useAuthStore()
  const userStore = useUserStore()

  const { execute: fetchUser } = useAsyncData(() => userStore.fetchUser(), {
    immediate: false
  })

  const token = useCookie('token').value
  const isAuthenticated = authStore.isAuthenticated

  if (token && !isAuthenticated) {
    await fetchUser()
  }
})
