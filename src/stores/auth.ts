import { useUserStore } from '~/stores/user'

export const useAuthStore = defineStore('auth', () => {
  const userStore = useUserStore()

  const authenticated = ref(false)

  const login = (username: string, password: string) => $fetch('api/auth/login', {
    method: 'POST',
    body: {
      username,
      password,
    },
    onResponse: ({ response }) => {
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

      useCookie('token').value = accessToken

      userStore.user = {
        id,
        username,
        firstName,
        lastName,
        email,
        gender,
        image,
      }

      authenticated.value = true
    },
  })

  return {
    authenticated,
    login,
  }
})
