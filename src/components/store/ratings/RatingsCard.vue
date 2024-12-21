<template>
<q-card>
  <q-card-section class="row items-center q-pb-none">
    <product-rating
      :rating
      :reviews
      class="q-mr-lg"
      color="grey-1"
      size="sm">
      <template #append>
        <span class="q-ml-sm">
          {{ $n(rating, 'decimal') }}
          {{ $t('out') }}
          {{ $t('of') }}
          {{ $n(5, 'decimal') }}
        </span>
      </template>
    </product-rating>

    <q-space/>

    <q-btn
      v-if="isPopup"
      v-close-popup
      dense
      flat
      icon="close"
      round/>
  </q-card-section>

  <q-card-section>
    <div class="q-mb-sm">
      {{ $n(reviews.length, 'decimal') }}
      {{ $t('rating', reviews.length) }}
    </div>
    <rating-bar
      v-for="(group, key) in groupedReviews"
      :key="key"
      :count="(group ?? []).length"
      :rating="Number(key)"
      :total="reviews.length"
      class="q-mb-sm"/>
  </q-card-section>

  <q-separator dark/>

  <q-card-actions
    v-if="isPopup"
    align="center">
    <q-btn flat>
      {{ $t('see_customer_reviews') }}
    </q-btn>
  </q-card-actions>
</q-card>
</template>

<script lang="ts" setup>
const { reviews } = defineProps<{
  reviews: Review[]
  rating: number
  isPopup?: boolean
}>()

const groupedReviews = computed(
  () => Object.groupBy(reviews, ({ rating }) => rating)
)
</script>
