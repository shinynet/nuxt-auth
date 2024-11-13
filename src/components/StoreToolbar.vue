<template>
  <q-toolbar>
    <icon-btn
      icon="menu"
      @click="$emit('toggle-drawer')"
    />
    <q-toolbar-title>
      <q-input
        v-model="search"
        borderless
        class="fullwidth"
        clearable
        dark
        dense
        filled
        label="Search Products"
        square
      >
        <template #after>
          <icon-btn
            icon="search"
            padding="24px 4px"
            square
          />
        </template>
      </q-input>
    </q-toolbar-title>
    <q-btn
      class="gt-xs"
      flat
      icon="star"
      label="Highest Rated"
    />
    <q-btn
      class="gt-xs"
      flat
      icon="inventory"
      label="Low Inventory"
    />
    <icon-btn icon="shopping_cart" />
  </q-toolbar>
</template>

<script lang="ts" setup>
defineEmits<{
  (e: 'toggle-drawer'): void
}>()

const search = ref('')
</script>

<style scoped>

</style>
