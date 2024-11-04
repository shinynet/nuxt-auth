<template>
  <q-page padding>
    <h1 class="text-h4">
      Store Page
    </h1>
    <product-card
      v-for="product in products"
      :key="product.id"
      :="product"
      class="q-mb-md"
    />
    <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="page"
        :max="pageCount"
        :max-pages="6"
        boundary-numbers
      />
    </div>

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
  path: '/store',
  middleware: [() => {
    if (import.meta.client) window.scrollTo(0, 0)
  }],
})

const { query } = useRoute()
const page = ref(query.page ? Number(query.page) : 1)

const limit = 10
const productsQuery = computed(() => ({
  limit,
  skip: (page.value - 1) * limit,
}))

const storeStore = useStoreStore()
const { data: productsData } = await useAsyncData(
  'products',
  () => storeStore.fetchProducts(productsQuery.value), {
    watch: [productsQuery],
  },
)

const products = computed(() => productsData.value?.products ?? [])
const total = computed(() => productsData.value?.total ?? 0)
const pageCount = computed(() => Math.ceil(total.value / limit))

watch(page, (newPage) => {
  navigateTo(`/store?page=${newPage}`)
})
</script>

<style scoped>

</style>
