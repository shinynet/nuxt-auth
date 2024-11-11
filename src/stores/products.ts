export const useProductsStore = defineStore('products', () => {
  const products = ref<ProductsResponse[]>([])
  const fetchProducts = (
    category: string,
    query: Query,
  ) => $fetch<ProductsResponse>(
    `/api/products/categories/${category}`,
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
