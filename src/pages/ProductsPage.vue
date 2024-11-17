<template>
  <q-page>
    <!-- Error Banner -->
    <q-banner
      v-if="productsError"
      class="bg-negative text-white"
      inline-actions>
      Error Loading Products
    </q-banner>

    <div class="row justify-between q-pa-sm bg-grey-5">
      <category-breadcrumbs :category/>
      <span v-if="productsStatus === 'success'">
        <span class="gt-xs">Showing</span>
        {{ skip + 1 }} - {{ skip + products.length }} of {{ total }}
      </span>
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
  </q-page>
</template>

<script lang="ts" setup>
const { category } = defineProps<{ category?: string }>()

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
  error: productsError,
  status: productsStatus
} = await useLazyAsyncData<ProductsResponse>(
  'products',
  () => storeStore.fetchProducts({ query: query.value }, category), {
    deep: false,
    watch: [() => category, skip, limit]
  }
)

const products = computed(() => productsData.value?.products ?? [])
const total = computed(() => productsData.value?.total ?? 0)
const pageCount = computed(() => Math.ceil(total.value / limit.value))
</script>

<style lang="scss" scoped>
.card {
  flex: 0 1 250px;
  @media (max-width: $breakpoint-xs-max) {
    flex: 1 0 100%;
  }
}
</style>
