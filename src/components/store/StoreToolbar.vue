<template>
  <q-toolbar>
    <icon-btn
      icon="menu"
      @click="$emit('toggle-drawer')"/>
    <q-toolbar-title>
      <q-input
        v-model="searchInput"
        borderless
        class="fullwidth"
        clearable
        dark
        dense
        filled
        label="Search Products"
        square
        @clear="clearSearch"
        @keydown.enter="search">
        <template #after>
          <icon-btn
            icon="search"
            padding="24px 4px"
            square
            @search="search"/>
        </template>
      </q-input>
    </q-toolbar-title>
    <q-btn
      class="gt-xs"
      flat
      icon="star"
      label="Highest Rated"/>
    <q-btn
      class="gt-xs"
      flat
      icon="inventory"
      label="Low Inventory"/>
    <icon-btn icon="shopping_cart">
      <q-badge
        color="accent"
        floating>
        4
      </q-badge>
    </icon-btn>
  </q-toolbar>
</template>

<script lang="ts" setup>
defineEmits<{
  (e: 'toggle-drawer'): void
}>()

const searchInput = ref('')

const search = () => {
  navigateTo({
    path: '/products/search',
    query: { q: searchInput.value }
  })
}

const clearSearch = () => {
  navigateTo('/products')
}
</script>
