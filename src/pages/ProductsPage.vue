<template>
  <q-page padding>
    <h1>{{ category }}</h1>
    <product-card
      v-for="product in products"
      :key="product.id"
      :="product"
      class="q-mb-md"
    />
    <footer class="q-pa-lg flex flex-center">
      <q-pagination
        :max="pageCount"
        :max-pages="6"
        :model-value="page"
        boundary-numbers
        @update:model-value="handlePageChange"
      />
    </footer>

    <q-page-scroller
      :offset="[18, 18]"
      :scroll-offset="150"
      position="bottom-right"
    >
      <q-btn
        color="accent"
        fab
        icon="keyboard_arrow_up"
      />
    </q-page-scroller>
  </q-page>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Store',
  path: '/products/categories/:category?',
  props: ({ params, query }) => ({
    category: params.category,
    page: Number(query.page ?? 0),
  }),
})

const { category = '', page = 1 } = defineProps<{
  category?: string
  page?: number
}>()

/* Pagination */
const limit = 10
const productsQuery = computed<Query>(() => ({
  limit,
  skip: (page - 1) * limit,
}))

const handlePageChange = (page: number) => {
  navigateTo({
    path: '/products/categories',
    query: { page },
  })
  window.scrollTo(0, 0)
}

/* Products fetching */
const storeStore = useProductsStore()
const {
  data: productsData,
} = await useLazyAsyncData<ProductsResponse>(
  'products',
  () => storeStore.fetchProducts(category, productsQuery.value), {
    watch: [productsQuery],
  },
)
console.log('productsData', productsData.value)
const products = computed(() => productsData.value?.products ?? [])

const total = computed(() => productsData.value?.total ?? 0)
const pageCount = computed(() => Math.ceil(total.value / limit))
</script>

<style scoped>

</style>
