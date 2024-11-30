<template>
<q-rating
  :model-value="rating"
  class="q-mr-sm"
  color="orange"
  icon="star"
  readonly
  size="1em"/>

{{ $n(reviews.length, 'decimal') }}

<q-tooltip>
  {{
    $t('rating_out_of', {
      rating: $n(rating, 'decimal'),
      max: $n(5, 'decimal'),
    })
  }}
</q-tooltip>
</template>

<script lang="ts" setup>
defineProps<{
  rating: number
  reviews: Review[]
}>()
</script>
