<template>
  <q-select
    v-model="model"
    :option-value="optionValue"
    :options="options"
    dense
    filled
    hide-bottom-space
    label="Sort by:"
    square>
    <!--    <template #option="{ opt }"> -->
    <!--      <q-item dense> -->
    <!--        <q-item-label caption> -->
    <!--          {{ opt.label }} -->
    <!--        </q-item-label> -->
    <!--      </q-item> -->
    <!--    </template> -->
  </q-select>
</template>

<script lang="ts" setup>
const options: ProductSort[] = [
  { label: 'Price: Low to High', sortBy: 'price', order: 'asc' },
  { label: 'Price: High to Low', sortBy: 'price', order: 'desc' },
  { label: 'Rating', sortBy: 'rating', order: 'desc' }
]
const model = ref(options[0])

const optionValue = (option: ProductSort) =>
  `${option.sortBy}:${option.order}`
</script>
