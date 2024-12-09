<template>
<i18n-n
  :value="price"
  format="currency"
  tag="span">
  <template #currency="slotProps">
    <sup class="text-primary">{{ slotProps.currency }}</sup>
  </template>
  <template #integer="slotProps">
    <span class="text-weight-bold text-h6 text-primary">{{ slotProps.integer }}</span>
  </template>
  <template #decimal>
    <span/>
  </template>
  <template #fraction="slotProps">
    <sup class="text-primary">{{ slotProps.fraction }}</sup>
  </template>
</i18n-n>
</template>

<script lang="ts" setup>
defineProps<{ price: number }>()
</script>
