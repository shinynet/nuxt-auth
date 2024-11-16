<template>
  <q-page>
    <div class="row q-gutter-xs flex-center">
      <product-card
        v-for="product in products"
        :key="product.id"
        :="product"
        class="card q-mb-md"/>
    </div>

    <footer class="q-pa-lg flex flex-center">
      <q-pagination
        :max="pageCount"
        :max-pages="6"
        :model-value="page"
        boundary-numbers
        @update:model-value="handlePageChange"/>
    </footer>

    <q-page-scroller
      :offset="[18, 18]"
      :scroll-offset="150"
      position="bottom-right">
      <q-btn
        color="accent"
        fab
        icon="keyboard_arrow_up"/>
    </q-page-scroller>
  </q-page>
</template>

<script lang="ts" setup>
const { page, skip, limit } = usePaginate()

const handlePageChange = (page: number) => {
  navigateTo({ query: { page } })
}

/* Products fetching */
const storeStore = useProductsStore()

const query = computed(() => ({
  skip: skip.value,
  limit: limit.value,
}))
const { data: productsData } = await useLazyAsyncData<ProductsResponse>(
  'products',
  () => storeStore.fetchProducts({ query: query.value }), {
    deep: false,
    watch: [skip, limit],
  },
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
