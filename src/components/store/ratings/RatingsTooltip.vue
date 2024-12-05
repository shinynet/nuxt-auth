<template>
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
defineProps<{ rating: number }>()
</script>
