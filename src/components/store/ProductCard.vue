<template>
<q-card
  bordered
  class="bg-grey-2"
  flat>
  <div class="bg-grey-3">
    <router-link :to="link">
      <q-img
        :src="thumbnail"
        class="col-5 cursor-pointer"
        loading="lazy"
        loading-show-delay="500"
        ratio="1"
        width="100%">
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
    </router-link>
  </div>

  <q-card-section>
    <router-link
      :to="link"
      class="text-primary"
      style="text-decoration: none">
      <header
        class="text-subtitle1"
        style="height: 56px">
        {{ title }}
      </header>
    </router-link>

    <product-rating
      :rating
      :reviews/>

    <div
      class="
        text-weight-bold
        text-h6
        text-primary">
      {{ $n(price, 'currency') }}
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
      {{ $t('add_to_cart') }}
    </q-btn>
  </q-card-actions>
</q-card>
</template>

<script lang="ts" setup>
const { id } = defineProps<Product>()

defineEmits<{
  (e: 'click', productId: number): void
}>()

const link = computed(() => ({
  name: 'product',
  params: { productId: id }
}))
</script>
