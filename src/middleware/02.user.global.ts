export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.client) return

  const authStore = useAuthStore()

  const { execute: me } = useAsyncData(() => authStore.me(), {
    immediate: false
  })

  const accessToken = useCookie('accessToken').value

  if (accessToken) {
    await me()
  }
})
