<template>
<q-markup-table
  class="bg-grey-4"
  flat>
  <tbody>
    <tr>
      <td class="text-subtitle2">
        Brand
      </td>
      <td>{{ brand }}</td>
    </tr>
    <tr>
      <td class="text-subtitle2">
        SKU
      </td>
      <td>{{ sku }}</td>
    </tr>
    <tr>
      <td class="text-subtitle2">
        Warranty Information
      </td>
      <td>{{ warrantyInformation }}</td>
    </tr>
    <tr>
      <td class="text-subtitle2">
        Shipping Information
      </td>
      <td>{{ shippingInformation }}</td>
    </tr>
  </tbody>
</q-markup-table>
</template>

<script lang="ts" setup>
defineProps<Pick<Product, 'brand' | 'sku' | 'warrantyInformation' | 'shippingInformation'>>()
</script>
