<template>
<q-input
  v-model="model"
  dense
  filled
  label="Qty"
  style="max-width: 120px;">
  <template #prepend>
    <q-btn
      dense
      flat
      icon="remove"
      size="sm"
      @click="decrement"/>
  </template>
  <template #append>
    <q-btn
      dense
      flat
      icon="add"
      size="sm"
      @click="increment"/>
  </template>
</q-input>
</template>

<script lang="ts" setup>
const { maxQuantity = 10 } = defineProps<{
  maxQuantity?: number
}>()

const model = defineModel<number>({
  default: 1
})

const increment = () => {
  if (model.value < maxQuantity)
    model.value++
}

const decrement = () => {
  if (model.value > 1)
    model.value--
}
</script>
