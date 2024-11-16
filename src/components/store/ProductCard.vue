<template>
  <q-card
    bordered
    class="bg-grey-2"
    flat>
    <div class="bg-grey-3">
      <q-img
        :src="thumbnail"
        class="col-5"
        loading="lazy"
        width="100%"/>
    </div>

    <q-card-section>
      <header
        class="text-subtitle1 ellipsis-2-lines"
        style="height: 56px">
        {{ title }}
      </header>
      <q-rating
        :model-value="rating"
        color="orange"
        icon="star"
        readonly
        size="1em"/>

      <div class="text-weight-bold text-h6">
        {{ formatPrice(price) }}
      </div>
      <div>{{ shippingInformation }}</div>
    </q-card-section>

    <q-card-actions>
      <q-btn
        class="bg-accent text-white"
        flat
        size="sm">
        Add to Cart
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts" setup>
defineProps<Product>()
</script>

<style scoped>

</style>
