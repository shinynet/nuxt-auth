<template>
  <q-toolbar>
    <q-btn
      dense
      flat
      icon="menu"
      round
      @click="$emit('toggle-drawer')"
    />
    <q-toolbar-title />
    <q-input
      v-model="search"
      borderless
      class="fullwidth"
      clearable
      dark
      dense
      filled
      label="Search Store"
      square
    >
      <template #after>
        <q-btn
          dense
          flat
          icon="search"
          padding="24px 4px"
        />
      </template>
    </q-input>
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
