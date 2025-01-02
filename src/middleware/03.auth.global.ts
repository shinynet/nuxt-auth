export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()

  if (to.meta.auth && !authStore.isAuthenticated) {
    return { name: 'login', query: { redirect: to.path } }
  }
})
