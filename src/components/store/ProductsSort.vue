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
    <span>{{ $t('sort_by') }}: {{ selectedSort.label }}</span>
  </template>
</q-select>
</template>

<script lang="ts" setup>
const { t } = useI18n()

const options: ProductSort[] = [
  {
    label: t('low_to_high'),
    sortBy: 'price',
    order: 'asc'
  },
  {
    label: t('high_to_low'),
    sortBy: 'price',
    order: 'desc'
  },
  {
    label: t('rating'),
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
