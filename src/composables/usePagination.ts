export const usePagination = (limit: Ref<number>, skip: Ref<number>) => {
  const route = useRoute()

  const page = ref(1)

  const updatePage = (newPage: number) => {
    page.value = newPage
    const skip = (newPage - 1) * limit.value
    navigateTo({
      path: route.path,
      query: { ...route.query, skip, limit: limit.value }
    })
  }

  watch(route, () => {
    page.value = Math.floor(skip.value / limit.value) + 1
  }, { immediate: true })

  return { page, updatePage }
}
