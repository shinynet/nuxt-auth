export const useProductsStore = defineStore('products', () => {
  const products = ref<ProductsResponse[]>()

  const fetchProducts = (query: { limit: number, skip: number }) => $fetch(
    '/api/products',
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
