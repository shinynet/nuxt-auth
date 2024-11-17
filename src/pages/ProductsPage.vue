<template>
  <q-page>
    <q-pull-to-refresh @refresh="refresh">
      <category-breadcrumbs :category/>
      {{ productsStatus }}
      {{ productsStatus === 'pending' && 'Loading products' }}
      <!--      {{ productsStatus === 'error' && 'Error loading products' }} -->
      <!--      {{ productsStatus === 'success' && `Showing ${skip.value + 1} - ${skip.value + products.value.length} of ${total.value}` }} -->
      <div v-if="productsStatus === 'pending'">
        Loading...
      </div>
      <div class="row q-gutter-xs flex-center">
        <product-card
          v-for="product in products"
          :key="product.id"
          :="product"
          class="card q-mb-md"/>
      </div>

      <footer
        v-if="pageCount > 1"
        class="q-pa-lg flex flex-center">
        <q-pagination
          :max="pageCount"
          :max-pages="6"
          :model-value="page"
          boundary-numbers
          @update:model-value="handlePageChange"/>
      </footer>

      <page-scroller/>
    </q-pull-to-refresh>
  </q-page>
</template>

<script lang="ts" setup>
const { category } = defineProps<{ category: string }>()

const { page, skip, limit } = usePaginate()

const handlePageChange = (page: number) => {
  navigateTo({ query: { page } })
}

/* Products fetching */
const storeStore = useProductsStore()

const query = computed<PageQuery>(() => ({
  skip: skip.value,
  limit: limit.value
}))

const {
  data: productsData,
  refresh: refreshProducts,
  status: productsStatus
} = await useLazyAsyncData<ProductsResponse>(
  'products',
  () => storeStore.fetchProducts(category, { query: query.value }), {
    deep: false,
    watch: [() => category, skip, limit]
  }
)

const products = computed(() => productsData.value?.products ?? [])
const total = computed(() => productsData.value?.total ?? 0)
const pageCount = computed(() => Math.ceil(total.value / limit.value))

const refresh = (done: () => void) => {
  refreshProducts()
  done()
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
