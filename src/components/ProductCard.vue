<template>
  <q-card
    bordered
    flat
  >
    <q-card-section horizontal>
      <q-img
        :src="thumbnail"
        class="col-5"
        loading="lazy"
        width="256px"
      />

      <q-card-section>
        <h2 class="text-h6">
          {{ title }}
        </h2>
        <div>{{ description }}</div>
        <q-rating
          :model-value="rating"
          color="orange"
          icon="star"
          readonly
          size="1em"
        />
        <div class="text-weight-bold text-h6">
          {{ formatPrice(price) }}
        </div>
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
import { formatPrice } from '../utils/formatUtils'

defineProps<Product>()
</script>

<style scoped>

</style>
