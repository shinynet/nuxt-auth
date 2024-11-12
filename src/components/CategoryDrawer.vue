<template>
  <q-drawer
    :model-value="drawerOpen"
    behavior="mobile"
    bordered
    class="bg-grey-4"
    overlay
    side="left"
    @update:model-value="$emit('drawerChange', $event)"
  >
    <div class="bg-primary text-grey-4 q-pa-sm row items-center justify-between">
      <h2 class="text-subtitle1">
        Product Categories
      </h2>
      <q-btn
        class="q-mr-sm"
        flat
        icon="close"
        round
        @click="$emit('drawerChange', false)"
      />
    </div>
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
defineEmits<{ (e: 'drawerChange', drawerOpen: boolean): void }>()

const productsStore = useProductsStore()
const { data: categoriesData } = await useLazyAsyncData<Category[]>(
  'categories',
  () => productsStore.fetchCategories(),
)
</script>
