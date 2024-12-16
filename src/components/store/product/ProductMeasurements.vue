<template>
<q-expansion-item
  :label="$t('measurements')"
  header-class="bg-grey-3">
  <q-markup-table
    class="bg-grey-1"
    flat>
    <tbody>
      <tr>
        <td class="text-subtitle2">
          {{ $t('weight') }}
        </td>
        <td>{{ $n(weight, 'weight') }}</td>
      </tr>
      <tr>
        <td class="text-subtitle2">
          {{ $t('width') }}
        </td>
        <td>{{ $n(dimensions.width, 'dimension') }}</td>
      </tr>
      <tr>
        <td class="text-subtitle2">
          {{ $t('height') }}
        </td>
        <td>{{ $n(dimensions.height, 'dimension') }}</td>
      </tr>
      <tr>
        <td class="text-subtitle2">
          {{ $t('depth') }}
        </td>
        <td>{{ $n(dimensions.depth, 'dimension') }}</td>
      </tr>
    </tbody>
  </q-markup-table>
</q-expansion-item>
</template>

<script lang="ts" setup>
defineProps<Pick<Product, 'dimensions' | 'weight'>>()
</script>

<style scoped>

</style>
