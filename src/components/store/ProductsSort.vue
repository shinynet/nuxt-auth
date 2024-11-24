<template>
  <q-select
    v-model="model"
    :option-value="optionValue"
    :options="options"
    borderless
    dark
    dense
    filled
    hide-bottom-space
    options-dense
    options-selected-class="bg-primary text-grey-4"
    popup-content-class="bg-secondary"
    square>
    <template #selected>
      <span>Sort by: {{ model.label }}</span>
    </template>
  </q-select>
</template>

<script lang="ts" setup>
const options: ProductSort[] = [
  {
    label: 'Price: Low to High',
    sortBy: 'price',
    order: 'asc'
  },
  {
    label: 'Price: High to Low',
    sortBy: 'price',
    order: 'desc'
  },
  {
    label: 'Rating',
    sortBy: 'rating',
    order: 'desc'
  }
]
const model = ref(options[0])

const optionValue = (option: ProductSort) =>
  `${option.sortBy}:${option.order}`
</script>
