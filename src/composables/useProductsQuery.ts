export const useProductsQuery = () => {
  const route = useRoute()

  enum queryDefaults {
    limit = 10,
    skip = 0,
    sortBy = 'rating',
    order = 'desc'
  }

  const limit = computed(
    () => Number(route.query.limit ?? queryDefaults.limit)
  )
  const skip = computed(
    () => Number(route.query.skip ?? queryDefaults.skip)
  )
  const sortBy = computed(
    () => String(route.query.sortBy ?? queryDefaults.sortBy)
  )
  const order = computed(
    () => String(route.query.order ?? queryDefaults.order)
  )
  const q = computed(
    () => route.query.q ? String(route.query.q) : undefined
  )
  const query = computed(() => ({
    limit: limit.value,
    skip: skip.value,
    sortBy: sortBy.value,
    order: order.value,
    q: q.value
  }))

  return { limit, skip, sortBy, order, q, query }
}
