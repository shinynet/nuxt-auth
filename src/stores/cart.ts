export const useCartStore = defineStore('cart', () => {
  const carts = ref<Cart[]>()

  const fetchCarts = (userId: number) => $fetch(`/api/carts/user/${userId}`, {
    onResponse: ({ response }) => {
      if (!response.ok) return
      carts.value = response._data
    }
  })

  return {
    carts,
    fetchCarts
  }
})
