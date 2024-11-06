export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()
  if (from.path !== to.path)
    authStore.redirect = from.path
})
