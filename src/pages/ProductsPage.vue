<template>
<q-page>
  <q-banner
    v-if="productsError"
    class="bg-negative text-white"
    inline-actions>
    Error Loading Products
  </q-banner>

  <q-toolbar class="text-caption q-pr-none">
    <product-breadcrumbs
      :category
      class="text-uppercase"/>
    <q-space/>
    <span class="gt-xs q-mx-sm">
      {{
        $t('showing_of', {
          start: $n(skip + 1, 'decimal'),
          end: $n(skip + products.length, 'decimal'),
          total: $n(total, 'decimal'),
        })
      }}
    </span>
  </q-toolbar>

  <div class="row q-gutter-xs flex-center">
    <template v-if="productsStatus === 'pending'">
      <product-skeleton-card
        v-for="i in 10"
        :key="i"
        class="card q-mb-md"/>
    </template>
    <template v-else-if="productsStatus === 'success'">
      <product-card
        v-for="product in products"
        :key="product.id"
        :="product"
        class="card q-mb-md"/>
    </template>
  </div>

  <footer
    v-if="pageCount > 1"
    class="q-pa-lg flex flex-center">
    <q-pagination
      :max="pageCount"
      :max-pages="6"
      :model-value="page"
      boundary-numbers
      @update:model-value="updatePage"/>
  </footer>

  <page-scroller/>
</q-page>
</template>

<script lang="ts" setup>
const {
  category = defaults.category,
  limit = defaults.paging.limit,
  skip = defaults.paging.skip,
  sortBy = defaults.paging.sortBy,
  order = defaults.paging.order,
  q = defaults.paging.q
} = defineProps<{
  category?: string
  limit?: number
  skip?: number
  sortBy?: string
  order?: string
  q?: string
}>()

const {
  data: productsData,
  error: productsError,
  status: productsStatus
} = useQuery<ProductsResponse>({
  key: () => [
    { type: 'Product' },
    { type: 'Category', id: category },
    { type: 'Search', q },
    { type: 'Sort', sortBy, order },
    { type: 'Pagination', limit, skip }
  ],
  query: () => $fetch('/api/products', {
    params: { category },
    query: { limit, skip, sortBy, order, q }
  })
})

const page = computed(
  () => Math.floor(skip / limit) + 1
)
const products = computed(
  () => productsData.value?.products ?? []
)
const total = computed(
  () => productsData.value?.total ?? 0
)
const pageCount = computed(
  () => Math.ceil(total.value / limit)
)

const updatePage = (newPage: number) => {
  const skip = (newPage - 1) * limit
  navigateTo({
    query: { limit, skip, sortBy, order, q }
  })
}
</script>

<style lang="scss" scoped>
.card {
  flex: 0 1 250px;
  @media (max-width: $breakpoint-xs-max) {
    flex: 1 0 100%;
  }
}
</style>
