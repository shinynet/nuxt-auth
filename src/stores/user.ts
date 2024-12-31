export const useUserStore = defineStore('user', () => {
  const user = ref<User>()

  const authStore = useAuthStore()
  const cartStore = useCartStore()

  const fetchUser = () => $fetch('/api/auth/user', {
    headers: useRequestHeaders(['cookie']), // this is important!
    onResponse: async ({ response }) => {
      if (!response.ok) return

      const {
        id,
        username,
        firstName,
        lastName,
        email,
        gender,
        image
      } = response._data

      user.value = {
        id,
        username,
        firstName,
        lastName,
        email,
        gender,
        image
      }

      authStore.isAuthenticated = true
      await cartStore.fetchCarts(user.value.id)
    },
    onResponseError: () => {
      authStore.logout()
    }
  })

  return {
    user,
    fetchUser
  }
})
