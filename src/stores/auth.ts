import type { User } from '~/types/User'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const user = ref<User>()
  const redirect = ref<string>()

  const login = (username: string, password: string) => $fetch('/api/auth/login', {
    method: 'POST',
    body: {
      username,
      password,
    },
    onResponseError: () => {
      isAuthenticated.value = false
      user.value = undefined
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
        image,
        accessToken,
      } = response._data

      const currentDate = new Date()
      useCookie('token', {
        expires: new Date(currentDate.setMinutes(currentDate.getMinutes() + 60)),
      }).value = accessToken

      user.value = {
        id,
        username,
        firstName,
        lastName,
        email,
        gender,
        image,
      }

      isAuthenticated.value = true
    },
  })

  const logout = () => {
    useCookie('token', {
      expires: new Date(1970, 0, 1),
    }).value = null
    isAuthenticated.value = false
    user.value = undefined
  }

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
        image,
      } = response._data

      user.value = {
        id,
        username,
        firstName,
        lastName,
        email,
        gender,
        image,
      }

      isAuthenticated.value = true
    },
    onResponseError: () => {
      logout()
    },
  })

  return {
    isAuthenticated,
    user,
    redirect,
    fetchUser,
    login,
    logout,
  }
})
