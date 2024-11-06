export default defineNuxtRouteMiddleware((to, from) => {
  console.log('to: ', to)
  console.log('from: ', from)

  const authStore = useAuthStore()
  if (from.path !== to.path)
    authStore.redirect = from.path
})
