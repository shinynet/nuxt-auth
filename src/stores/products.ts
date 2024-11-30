export const useProductsStore = defineStore('products', () => {
  const { query, path } = useProductsQuery()
  const categories = ref<Category[]>()

  const fetchProduct = (productId: number) => $fetch<Product>(
    `/api/products/${productId}`
  )

  const fetchProducts = () => $fetch<ProductsResponse>(
    `/api${path.value}`,
    { query: query.value }
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
    fetchProduct,
    fetchProducts,
    fetchCategories,
    getCategory,
    categories
  }
})
