export const useProductsStore = defineStore('products', () => {
  const products = ref<ProductsResponse[]>()
  const categories = ref<Category[]>()

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

  const fetchCategories = () => $fetch('/api/products/categories', {
    onResponse: ({ response }) => {
      if (!response.ok) return
      categories.value = response._data
    },
  })

  return {
    products,
    fetchProducts,
    categories,
    fetchCategories,
  }
})
