export const useProductsStore = defineStore('products', () => {
  const categories = ref<Category[]>()

  const fetchProduct = (productId: number) => $fetch<Product>(
    `/api/products/${productId}`
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
    fetchCategories,
    getCategory,
    categories
  }
})
