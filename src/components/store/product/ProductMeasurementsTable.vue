<template>
<q-markup-table
  class="bg-grey-4"
  flat>
  <tbody>
    <tr>
      <td class="text-subtitle2">
        Weight
      </td>
      <td>{{ weight }}</td>
    </tr>
    <tr>
      <td class="text-subtitle2">
        Width
      </td>
      <td>{{ dimensions.width }}</td>
    </tr>
    <tr>
      <td class="text-subtitle2">
        Height
      </td>
      <td>{{ dimensions.height }}</td>
    </tr>
    <tr>
      <td class="text-subtitle2">
        Depth
      </td>
      <td>{{ dimensions.depth }}</td>
    </tr>
  </tbody>
</q-markup-table>
</template>

<script lang="ts" setup>
defineProps<Pick<Product, 'weight' | 'dimensions'>>()
</script>
