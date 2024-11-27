<template>
<q-page>
  <q-banner
    v-if="productsError"
    class="bg-negative text-white"
    inline-actions>
    Error Loading Products
  </q-banner>

  <q-toolbar
    class="text-caption q-pr-none">
    <category-breadcrumbs
      :category
      class="text-uppercase"/>
    <q-space/>
    <span class="gt-xs q-mx-sm">{{
      $t('showing_of', {
        start: $n(skip + 1, 'decimal'),
        end: $n(skip + products.length, 'decimal'),
        total: $n(total, 'decimal'),
      })
    }}&nbsp;</span>
  </q-toolbar>

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
      @update:model-value="updatePage"/>
  </footer>

  <page-scroller/>
</q-page>
</template>

<script lang="ts" setup>
const { category } = defineProps<{ category?: string }>()

const { query, limit, skip } = useProductsQuery()

const { page, updatePage } = usePagination(limit, skip)

const productsStore = useProductsStore()

const {
  data: productsData,
  error: productsError
} = await useLazyAsyncData<ProductsResponse>(
  'products',
  () => productsStore.fetchProducts(),
  {
    watch: [() => category, query]
  }
)

const products = computed(
  () => productsData.value?.products ?? []
)
const total = computed(
  () => productsData.value?.total ?? 0
)
const pageCount = computed(
  () => Math.ceil(total.value / limit.value)
)
</script>

<style lang="scss" scoped>
.card {
  flex: 0 1 250px;
  @media (max-width: $breakpoint-xs-max) {
    flex: 1 0 100%;
  }
}
</style>
