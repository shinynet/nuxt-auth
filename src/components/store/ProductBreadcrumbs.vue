<template>
<q-breadcrumbs gutter="none">
  <template #separator>
    <q-icon
      color="primary"
      name="chevron_right"
      size="1.5em"/>
  </template>

  <q-breadcrumbs-el
    :label="$t('store')"
    :to="{ name: 'products' }"
    icon="store"/>
  <q-breadcrumbs-el
    :label="categoryName"
    :to="{ name: 'productsByCategory', params: { category } }"/>
  <q-breadcrumbs-el
    v-if="productName"
    :label="productName"/>
</q-breadcrumbs>
</template>

<script lang="ts" setup>
const { category } = defineProps<{
  category?: string
  productName?: string
}>()

const { t } = useI18n()

const productsStore = useProductsStore()

const categoryName = computed(() => {
  if (!category) return 'All'
  const c = productsStore.getCategory(category)
  return c ? c.name : t('all')
})
</script>

<style scoped>

</style>
