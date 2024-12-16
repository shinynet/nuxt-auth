<template>
<q-drawer
  :model-value="drawerOpen"
  bordered
  class="bg-grey-4 text-grey-4 hide-scrollbar"
  show-if-above
  side="right"
  @update:model-value="handleChange">
  Cart Drawer
</q-drawer>
</template>

<script lang="ts" setup>
defineProps<{ drawerOpen: boolean }>()

const emit = defineEmits<{
  (e: 'drawerChange', drawerOpen: boolean): void
}>()
const handleChange = (drawerOpen: boolean) => {
  emit('drawerChange', drawerOpen)
}
</script>
