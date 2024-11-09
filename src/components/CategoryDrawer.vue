<template>
  <q-list
    dense
    padding
  >
    <q-item
      v-for="category in categoriesData"
      :key="category.name"
      v-ripple
      clickable
    >
      <q-item-section>{{ category.name }}</q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts" setup>
const productsStore = useProductsStore()
const { data: categoriesData } = await useLazyAsyncData<Category[]>(
  'categories',
  () => productsStore.fetchCategories(),
)
</script>

<style scoped>

</style>
