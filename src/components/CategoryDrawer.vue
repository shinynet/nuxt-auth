<template>
  <q-drawer
    :model-value="drawerOpen"
    behavior="mobile"
    bordered
    overlay
    side="left"
    @update:model-value="$emit('drawerChange', $event)"
  >
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
  </q-drawer>
</template>

<script lang="ts" setup>
defineProps<{ drawerOpen: boolean }>()
defineEmits<{
  (e: 'drawerChange', drawerOpen: boolean): void
}>()

const productsStore = useProductsStore()
const { data: categoriesData } = await useLazyAsyncData<Category[]>(
  'categories',
  () => productsStore.fetchCategories(),
)
</script>

<style scoped>

</style>
