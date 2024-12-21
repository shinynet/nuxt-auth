<template>
<div class="row">
  <span class="col-3">
    {{ $n(rating, 'decimal') }}
    {{ $t('star', rating) }}
  </span>
  <q-linear-progress
    :value="percent"
    class="col-9"
    color="accent"
    rounded
    size="24px"
    stripe
    track-color="primary">
    <div class="absolute-full flex flex-center">
      <q-badge
        :label="$n(percent, 'percent')"
        color="grey-5"
        text-color="primary"/>
    </div>
  </q-linear-progress>
  <span>{{ }}</span>
</div>
</template>

<script lang="ts" setup>
const { count, total } = defineProps<{
  rating: number
  count: number
  total: number
}>()

const percent = computed(() => count / total)
</script>
