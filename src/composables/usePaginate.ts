export const usePaginate = () => {
  const route = useRoute()

  const page = computed(
    () => Number(route.query.page) || 1
  )
  const skip = computed(
    () => (page.value - 1) * 10
  )
  const limit = computed(
    () => 10
  )

  return {
    page,
    limit,
    skip
  }
}
