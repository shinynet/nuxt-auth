export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const authUser = ref<AuthUser>()
  const redirect = ref<string>()

  const accessToken = useCookie('accessToken')
  const refreshToken = useCookie('refreshToken')

  const login = (
    username: string,
    password: string
  ) => $fetch('/api/auth/login', {
    method: 'POST',
    body: {
      username,
      password
    },
    onResponseError: () => {
      isAuthenticated.value = false
      authUser.value = undefined
    },
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

      accessToken.value = response._data.accessToken
      refreshToken.value = response._data.refreshToken

      authUser.value = {
        id,
        username,
        firstName,
        lastName,
        email,
        gender,
        image
      }

      isAuthenticated.value = true
    }
  })

  const logout = () => {
    accessToken.value = null
    refreshToken.value = null
    isAuthenticated.value = false
    authUser.value = undefined
  }

  return {
    authUser,
    isAuthenticated,
    login,
    logout,
    redirect
  }
})
