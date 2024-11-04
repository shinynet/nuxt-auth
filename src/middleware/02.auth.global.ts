export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()

  if (to.meta.auth && !authStore.isAuthenticated) {
    authStore.redirect = to.path

    // navigateTo is broken.
    // updating the store before redirecting doesn't work
    // router.push() works great.
    const router = useRouter()
    return router.push({ path: '/login' })
  }
})
