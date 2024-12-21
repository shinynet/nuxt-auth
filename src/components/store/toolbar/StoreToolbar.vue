<template>
<q-toolbar>
  <icon-btn
    icon="menu"
    @click="$emit('toggle-left-drawer')"/>
  <q-toolbar-title>
    <toolbar-search/>
  </q-toolbar-title>
  <toolbar-sort class="gt-xs"/>
  <toolbar-cart
    @click="$emit('toggle-right-drawer')"/>
</q-toolbar>
</template>

<script lang="ts" setup>
defineEmits<{ (e: 'toggle-left-drawer' | 'toggle-right-drawer'): void }>()
</script>
