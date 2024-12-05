<template>
<div>
  <q-rating
    :model-value="rating"
    class="q-mr-sm"
    color="orange"
    icon="star"
    readonly
    size="1em"/>
  <slot name="append"/>
  <slot name="default"/>
</div>
</template>

<script lang="ts" setup>
defineProps<{
  rating: number
  reviews: Review[]
}>()
</script>
