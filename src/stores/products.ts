export const useProductsStore = defineStore('products', () => {
  const route = useRoute()
  const categories = ref<Category[]>()

  const fetchProducts = () => $fetch<ProductsResponse>(
    `/api${route.path}`,
    { query: route.query }
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
    fetchCategories,
    getCategory,
    categories
  }
})
