export const useProductsStore = defineStore('products', () => {
  const categories = ref<Category[]>()

  const fetchProducts = (query: PageQuery) => $fetch<ProductsResponse>(
    '/api/products',
    { query }
  )

  const fetchProductsByCategory = (category: string, query: PageQuery) =>
    $fetch<ProductsResponse>(
      `/api/products/category/${category}`,
      { query }
    )

  const searchProducts = (query: PageQuery) => $fetch<ProductsResponse>(
    `/api/products/search`,
    { query }
  )

  const fetchCategories = () => $fetch<Category[]>(
    '/api/products/categories',
    {
      onResponse: ({ response }) => {
        if (response.ok) categories.value = response._data
      }
    }
  )

  const getCategory = (slug: string) =>
    categories.value?.find(c => c.slug === slug)

  return {
    fetchProducts,
    fetchProductsByCategory,
    searchProducts,
    fetchCategories,
    getCategory,
    categories
  }
})
