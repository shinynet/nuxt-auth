<template>
  <q-card
    bordered
    flat
  >
    <q-card-section horizontal>
      <q-img
        :src="thumbnail"
        class="col-5"
        style="max-width: 256px"
      />

      <q-card-section>
        <div>{{ title }}</div>
        <div>{{ rating }}</div>
        <div>{{ price }}</div>
        <div>{{ shippingInformation }}</div>
        <q-btn
          class="bg-accent text-white"
          size="sm"
        >
          Add to Cart
        </q-btn>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
defineProps<Product>()
</script>

<style scoped>

</style>
