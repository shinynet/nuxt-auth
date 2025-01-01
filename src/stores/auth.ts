export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const authUser = ref<AuthUser>()
  const redirect = ref<string>()

  const accessToken = useCookie('accessToken')
  const refreshToken = useCookie('refreshToken')

  const me = () => $fetch('/api/auth/me', {
    headers: useRequestHeaders(['cookie']),
    onResponseError: () => {
      logout()
    },
    onResponse: ({response}) => {
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
      logout()
    },
    onResponse: ({response}) => {
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

  const refresh = () => $fetch('/api/auth/refresh', {
    method: 'POST',
    headers: useRequestHeaders(['cookie']),
    onResponseError: () => {
      logout()
    },
    onResponse: ({response}) => {
      if (!response.ok) return

      accessToken.value = response._data.accessToken
      refreshToken.value = response._data.refreshToken
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
    me,
    refresh,
    redirect
  }
})
