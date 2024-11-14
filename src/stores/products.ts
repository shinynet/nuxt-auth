export const useProductsStore = defineStore('products', () => {
  const fetchProducts = (query: Query) => $fetch<ProductsResponse>(`/api/products`, {
    query,
  })

  const fetchCategories = () => $fetch<Category[]>('/api/products/categories')

  return {
    fetchProducts,
    fetchCategories,
  }
})
