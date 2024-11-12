<template>
  <q-drawer
    :model-value="drawerOpen"
    :width="drawerWidth"
    class="bg-grey-6"
    show-if-above
    @update:model-value="$emit('drawerChange', $event)"
  >
    <div
      v-if="$q.screen.lt.md"
      class="bg-primary"
      style="height: 100px"
    />
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
import { Screen } from 'quasar'

defineProps<{ drawerOpen: boolean }>()
defineEmits<{ (e: 'drawerChange', drawerOpen: boolean): void }>()

const drawerWidth = computed(() => Screen.lt.md ? 300 : 200)

const productsStore = useProductsStore()
const { data: categoriesData } = await useLazyAsyncData<Category[]>(
  'categories',
  () => productsStore.fetchCategories(),
)
</script>
