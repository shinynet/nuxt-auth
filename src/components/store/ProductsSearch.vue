<template>
  <q-input
    v-model="searchInput"
    borderless
    clearable
    dark
    dense
    filled
    label="Search Products"
    square
    @clear="clearSearch"
    @keydown.enter="search">
    <template #append>
      <icon-btn
        icon="search"
        @click="search"/>
    </template>
  </q-input>
</template>

<script lang="ts" setup>
const route = useRoute()
const searchInput = ref('')
const search = () => {
  navigateTo({
    path: '/products/search',
    query: { q: searchInput.value }
  })
}
watch(() => route.query.q, (q) => {
  searchInput.value = q as string
})

const clearSearch = () => {
  navigateTo('/products')
}
</script>
