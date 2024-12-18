<template>
<q-expansion-item
  :label="$t('item_details')"
  header-class="bg-grey-3 text-subtitle1">
  <q-markup-table
    class="bg-grey-1"
    flat>
    <tbody>
      <tr>
        <td class="text-subtitle2">
          {{ $t('brand') }}
        </td>
        <td>{{ brand }}</td>
      </tr>
      <tr>
        <td class="text-subtitle2">
          {{ $t('sku') }}
        </td>
        <td>{{ sku }}</td>
      </tr>
      <tr>
        <td class="text-subtitle2">
          {{ $t('warranty_information') }}
        </td>
        <td>{{ warrantyInformation }}</td>
      </tr>
      <tr>
        <td class="text-subtitle2">
          {{ $t('shipping_information') }}
        </td>
        <td>{{ shippingInformation }}</td>
      </tr>
    </tbody>
  </q-markup-table>
</q-expansion-item>
</template>

<script lang="ts" setup>
defineProps<Pick<Product, 'brand' | 'sku' | 'warrantyInformation' | 'shippingInformation'>>()
</script>
