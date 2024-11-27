<template>
<q-toolbar>
  <icon-btn
    icon="menu"
    @click="$emit('toggle-drawer')"/>
  <q-toolbar-title>
    <products-search/>
  </q-toolbar-title>
  <products-sort class="gt-xs"/>
  <icon-btn icon="shopping_cart">
    <q-badge
      color="accent"
      floating>
      4
    </q-badge>
    <q-tooltip>
      {{ $t('view_cart') }}
    </q-tooltip>
  </icon-btn>
</q-toolbar>
</template>

<script lang="ts" setup>
defineEmits<{ (e: 'toggle-drawer'): void }>()
</script>
