<template>
  <q-breadcrumbs class="q-pa-xs">
    <template #separator>
      <q-icon
        color="primary"
        name="chevron_right"
        size="1.5em"/>
    </template>

    <q-breadcrumbs-el
      icon="store"
      label="Store"
      to="/products"/>
    <q-breadcrumbs-el
      :label="categoryName"/>
  </q-breadcrumbs>
</template>

<script lang="ts" setup>
const { category } = defineProps<{ category: string }>()

const productsStore = useProductsStore()

const categoryName = computed(
  () => productsStore.getCategory(category)?.name ?? 'All'
)
</script>

<style scoped>

</style>
