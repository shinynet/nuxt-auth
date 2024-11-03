import type { User } from '~/types/User'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>()

  return {
    user,
  }
})
