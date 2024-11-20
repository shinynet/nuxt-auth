<template>
  <q-card
    bordered
    class="bg-grey-2"
    flat>
    <div class="bg-grey-3">
      <q-img
        :src="thumbnail"
        class="col-5 cursor-pointer"
        loading="lazy"
        width="100%"
        @click="$emit('click', id)">
        <div
          v-if="availabilityStatus === 'Low Stock'"
          class="absolute-bottom text-subtitle1 text-center">
          {{ availabilityStatus }}
        </div>
        <div
          v-if="availabilityStatus === 'Out of Stock'"
          class="absolute-full text-subtitle2 flex flex-center">
          {{ availabilityStatus }}
        </div>
      </q-img>
    </div>

    <q-card-section>
      <header
        class="text-subtitle1 cursor-pointer"
        style="height: 56px"
        @click="$emit('click', id)">
        {{ title }}
      </header>
      <div>
        <q-rating
          :model-value="rating"
          class="q-mr-sm"
          color="orange"
          icon="star"
          readonly
          size="1em"/>
        {{ formatNumber(reviews.length) }}
        <q-tooltip>
          {{ rating.toString() }} out of 5
        </q-tooltip>
      </div>

      <div class="text-weight-bold text-h6 text-primary">
        {{ formatPrice(price) }}
      </div>
      <div class="text-caption">
        {{ shippingInformation }}
      </div>
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
defineEmits<{
  (e: 'click', productId: number): void
}>()
</script>
