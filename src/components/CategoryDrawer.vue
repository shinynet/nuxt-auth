<template>
  <q-drawer
    :model-value="drawerOpen"
    :width="drawerWidth"
    class="bg-grey-4 hide-scrollbar"
    show-if-above
    @on-layout="handleLayoutChange"
    @update:model-value="handleModelValueChange"
  >
    <header
      v-if="!drawerInLayout"
      class="header"
    >
      <h2 class="text-subtitle1">
        Categories
      </h2>
      <icon-btn
        icon="close"
        @click="handleClose"
      />
    </header>

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

const emit = defineEmits<{
  (e: 'drawerChange', drawerOpen: boolean): void
}>()
const handleModelValueChange = (drawerOpen: boolean) => {
  emit('drawerChange', drawerOpen)
}
const handleClose = () => {
  emit('drawerChange', false)
}

/* Responsiveness */
const drawerInLayout = ref(false)
const handleLayoutChange = (layout: boolean) => {
  drawerInLayout.value = layout
}
const drawerWidth = computed(
  () => drawerInLayout.value ? 200 : 300,
)

/* Categories fetching */
const productsStore = useProductsStore()
const { data: categoriesData } = await useLazyAsyncData<Category[]>(
  'categories', () => productsStore.fetchCategories(),
)
</script>

<style lang="scss" scoped>
@import "~/assets/css/quasar.extend.library.scss";

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
