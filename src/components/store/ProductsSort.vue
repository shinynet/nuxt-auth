<template>
  <q-select
    :model-value="selectedSort"
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
    square
    @update:model-value="updateSort">
    <template #selected>
      <span>Sort by: {{ selectedSort.label }}</span>
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

const { sortBy, order, path, q } = useProductsQuery()

const selectedSort = computed(
  () => options.find(
    o => o.sortBy === sortBy.value
      && o.order === order.value)
    ?? options[0]
)

const optionValue = (option: ProductSort) =>
  `${option.sortBy}:${option.order}`

const updateSort = (sortOption: ProductSort) => {
  navigateTo({
    path: path.value,
    query: {
      q: q.value,
      sortBy: sortOption.sortBy,
      order: sortOption.order
    }
  })
}
</script>
