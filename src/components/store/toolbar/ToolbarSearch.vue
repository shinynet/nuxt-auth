<template>
<q-input
  :label="$t('search_products')"
  :model-value="q"
  borderless
  clearable
  dark
  dense
  filled
  square
  @clear="clearSearch"
  @update:model-value="handleModelChange"
  @keydown.enter="search">
  <template #append>
    <icon-btn
      icon="search"
      @click="search">
      <q-tooltip>
        {{ $t('search') }}
      </q-tooltip>
    </icon-btn>
  </template>
</q-input>
</template>

<script lang="ts" setup>
const { q } = useProductsQuery()

const searchTerm = ref(q.value)

const handleModelChange = (value: string | number | null) => {
  searchTerm.value = String(value)
}

const search = () => {
  navigateTo({
    path: '/products/search',
    query: { q: searchTerm.value }
  })
}

const clearSearch = () => {
  navigateTo('/products')
}
</script>
