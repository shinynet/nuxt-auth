<template>
<q-drawer
  :model-value="drawerOpen"
  :width="drawerWidth"
  bordered
  side="right"
  class="bg-primary text-grey-4 hide-scrollbar"
  show-if-above
  @update:model-value="handleChange">
  Cart Drawer
</q-drawer>
</template>

<script lang="ts" setup>
defineProps<{ drawerOpen: boolean }>()

const emit = defineEmits<{ (e: 'drawerChange', drawerOpen: boolean): void
}>()
const handleChange = (drawerOpen: boolean) => {
  emit('drawerChange', drawerOpen)
}
</script>
