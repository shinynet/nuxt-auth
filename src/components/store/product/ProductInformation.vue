<template>
<q-toolbar>
  <q-toolbar-title class="text-subtitle1">
    Product Information
  </q-toolbar-title>
  <q-btn
    class="q-mr-xs"
    dense
    flat
    icon="keyboard_arrow_up"
    round/>
  <q-btn
    dense
    flat
    icon="keyboard_arrow_down"
    round/>
</q-toolbar>

<div class="row q-col-gutter-x-md">
  <q-expansion-item
    class="col-xs-12 col-sm-6 bg-grey-4"
    expand-separator
    header-class="table-header"
    label="Item details">
    <product-details-table
      :brand
      :shipping-information
      :sku
      :warranty-information/>
  </q-expansion-item>
  <q-expansion-item
    class="col-xs-12 col-sm-6"
    expand-separator
    header-class="table-header"
    label="Measurements">
    <product-measurements-table
      :dimensions
      :weight/>
  </q-expansion-item>
</div>
</template>

<script lang="ts" setup>
defineProps<Product>()
</script>
