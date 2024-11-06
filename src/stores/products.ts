export const useProductsStore = defineStore('products', () => {
  const products = ref<ProductsResponse[]>([])
  const categories = ref<Category[]>([])

  const fetchProducts = (query: { limit: number, skip: number }) => $fetch<ProductsResponse>(
    '/api/products',
    {
      query,
      onResponse: ({ response }) => {
        if (!response.ok) return
        products.value = response._data
      },
    },
  )

  const fetchCategories = () => $fetch<Category[]>(
    '/api/products/categories',
    {
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
