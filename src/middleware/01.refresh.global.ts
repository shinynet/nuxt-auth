export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.client) return

  const authStore = useAuthStore()

  const {refresh} = useAsyncData(() => authStore.refresh(), {
    immediate: false
  })

  const refreshToken = useCookie('refreshToken').value

  if (refreshToken) {
    await refresh()
  }
})
