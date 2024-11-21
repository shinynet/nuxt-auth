export const usePagination = (page: Ref<number>) => {
  const route = useRoute()

  const limit = computed(
    () => Number(route.query.limit ?? 10)
  )

  const skip = computed(
    () => (page.value - 1) * limit.value
  )

  watch(page, () => {
    navigateTo({
      query: {
        ...route.query,
        limit: limit.value,
        skip: skip.value
      }
    })
  })

  return {
    limit,
    skip,
    route
  }
}
