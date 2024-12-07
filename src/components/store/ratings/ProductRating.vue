<template>
<div class="row items-center">
  <slot
    :rating="rating"
    :reviews="reviews"
    name="prepend"/>
  <q-rating
    :model-value="rating"
    class="q-mr-sm"
    color="orange"
    icon="star"
    readonly
    size="1em"
    style="margin-right: 0"
    v-bind="$attrs"/>
  <slot
    :rating="rating"
    :reviews="reviews"
    name="append"/>
  <slot
    :rating="rating"
    :reviews="reviews"
    name="default"/>
</div>
</template>

<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})

defineProps<{
  rating: number
  reviews: Review[]
}>()
</script>
