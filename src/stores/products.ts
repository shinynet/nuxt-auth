export const useProductsStore = defineStore('products', () => {
  const fetchProducts = (
    category: string,
    { query }: { query: PageQuery }) => {
    const url = category
      ? `/api/products/category/${category}`
      : '/api/products'
    return $fetch<ProductsResponse>(url, { query })
  }

  const fetchCategories = () => $fetch<Category[]>('/api/products/categories')

  return {
    fetchProducts,
    fetchCategories,
  }
})
