<template>
<q-toolbar>
  <icon-btn
    icon="menu"
    @click="$emit('toggle-drawer')"/>
  <q-toolbar-title>
    <toolbar-search/>
  </q-toolbar-title>
  <toolbar-sort class="gt-xs"/>
  <toolbar-cart/>
</q-toolbar>
</template>

<script lang="ts" setup>
defineEmits<{ (e: 'toggle-drawer'): void }>()
</script>
