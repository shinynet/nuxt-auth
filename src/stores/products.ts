export const useProductsStore = defineStore('products', () => {
  const categories = ref<Category[]>()

  const fetchProducts = (
    category: string,
    { query }: { query: PageQuery }) => {
    const url = category
      ? `/api/products/category/${category}`
      : '/api/products'
    return $fetch<ProductsResponse>(url, { query })
  }

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
