export const useStoreStore = defineStore('store', () => {
  const products = ref<ProductsResponse[]>()

  const fetchProducts = (query: { limit: number, skip: number }) => $fetch(
    '/api/store/products',
    {
      query,
      onResponse: ({ response }) => {
        if (!response.ok) return
        products.value = response._data
      },
    },
  )

  return {
    products,
    fetchProducts,
  }
})
