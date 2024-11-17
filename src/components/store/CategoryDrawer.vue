<template>
  <q-drawer
    :model-value="drawerOpen"
    :width="drawerWidth"
    bordered
    class="bg-primary text-grey-4 hide-scrollbar"
    show-if-above
    @on-layout="handleLayoutChange"
    @update:model-value="handleChange">
    <header
      v-if="!drawerInLayout"
      class="header">
      <h2 class="text-subtitle1">
        Categories
      </h2>
      <icon-btn
        icon="close"
        @click="handleChange(false)"/>
    </header>

    <q-list
      dense
      padding>
      <q-item
        v-ripple
        active-class="text-accent"
        clickable
        to="/products">
        <q-item-section>All Categories</q-item-section>
      </q-item>
      <q-item
        v-for="category in categoriesData"
        :key="category.name"
        v-ripple
        :to="`/products/category/${category.slug}`"
        active-class="text-accent"
        clickable>
        <q-item-section>{{ category.name }}</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script lang="ts" setup>
defineProps<{ drawerOpen: boolean }>()

/* Event handling */
const emit = defineEmits<{
  (e: 'drawerChange', drawerOpen: boolean): void
}>()
const handleChange = (drawerOpen: boolean) => {
  emit('drawerChange', drawerOpen)
}

/* Responsiveness */
const drawerInLayout = ref(false)
const handleLayoutChange = (layout: boolean) => {
  drawerInLayout.value = layout
}
const drawerWidth = computed(
  () => drawerInLayout.value ? 200 : 300
)

/* Categories fetching */
const productsStore = useProductsStore()
const {
  data: categoriesData
} = await useLazyAsyncData<Category[]>(
  'categories', () => productsStore.fetchCategories()
)
</script>

<style lang="scss" scoped>
@import "assets/css/quasar.extend.library";

.header {
  @extend .row;
  @extend .items-center;
  @extend .justify-between;
  @extend .bg-primary;
  @extend .text-grey-4;
  @extend .q-pa-md;
  height: 100px;
}
</style>
