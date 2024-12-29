export const useUserStore = defineStore('user', () => {
  const user = ref<User>()

  const authStore = useAuthStore()

  const fetchUser = () => $fetch('/api/auth/user', {
    headers: useRequestHeaders(['cookie']), // this is important!
    onResponse: ({ response }) => {
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
