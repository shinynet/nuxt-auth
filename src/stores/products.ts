export const useProductsStore = defineStore('products', () => {
  /* Products */
  const products = ref<ProductsResponse[]>([])
  const fetchProducts = (
    query: Query,
  ) => $fetch<ProductsResponse>(
    `/api/products`,
    {
      query,
      onResponse: ({ response }) => {
        if (!response.ok) return
        products.value = response._data
      },
    },
  )

  const categories = ref<Category[]>([])
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
