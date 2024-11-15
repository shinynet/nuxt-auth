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
/* Pagination */
const limit = 10
const route = useRoute()
const page = computed(() => route.query.page ? Number(route.query.page) : 1)
const query = computed(() => ({
  skip: page.value * limit - limit,
  limit,
}))
const handlePageChange = (page: number) => {
  navigateTo({ query: { page } })
}

/* Products fetching */
const storeStore = useProductsStore()
const {
  data: productsData,
} = await useLazyAsyncData<ProductsResponse>(
  'products',
  () => storeStore.fetchProducts({ query: { ...query.value } }), {
    watch: [query],
  },
)
const products = computed(() => productsData.value?.products ?? [])
const total = computed(() => productsData.value?.total ?? 0)
const pageCount = computed(() => Math.ceil(total.value / query.value.limit))
</script>

<style lang="scss" scoped>
.card {
  flex: 0 1 250px;
  @media (max-width: $breakpoint-xs-max) {
    flex: 1 0 100%;
  }

}
</style>
