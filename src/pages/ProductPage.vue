<template>
<q-page class="page">
  <q-toolbar
    class="text-caption q-pr-none"
    style="grid-area: tlbr">
    <product-breadcrumbs
      :category="productData.category"
      :product-name="productData.title"
      class="text-uppercase"/>
  </q-toolbar>

  <product-carousel
    :images="productData.images"
    style="grid-area: photo"/>

  <div style="grid-area: cont">
    <h1 class="text-h5">
      {{ productData.title }}
    </h1>

    <p>{{ productData.description }}</p>

    <product-rating
      :rating="productData.rating"
      :reviews="productData.reviews"
      class="cursor-pointer"
      size="xs">
      <template #default="{ rating, reviews }">
        <q-popup-proxy>
          <ratings-card
            :rating="rating"
            :reviews="reviews"
            style="width: 300px"/>
        </q-popup-proxy>
      </template>
      <template #prepend="{ rating }">
        <span class="caption q-mr-xs">
          {{ $n(rating, 'decimal') }}
        </span>
      </template>
      <template #append>
        <q-btn
          dense
          flat
          icon="arrow_drop_down"
          size="sm"/>
      </template>
    </product-rating>

    <q-separator/>

    <product-price :price="productData.price"/>

    <div class="text-caption">
      {{ productData.shippingInformation }}
    </div>

    <product-quantity
      v-model="quantity"
      :max-quantity="productData.stock"/>

    <q-btn
      class="bg-accent text-white"
      flat>
      {{ $t('add_to_cart') }}
    </q-btn>
  </div>

  <q-toolbar style="grid-area: info">
    <q-toolbar-title class="text-subtitle1">
      Product Information
    </q-toolbar-title>
    <q-btn
      class="q-mr-xs"
      dense
      flat
      icon="keyboard_arrow_up"
      round/>
    <q-btn
      dense
      flat
      icon="keyboard_arrow_down"
      round/>
  </q-toolbar>

  <q-expansion-item
    expand-separator
    header-class="table-header"
    label="Item details"
    style="grid-area: dets"/>

  <q-expansion-item
    expand-separator
    header-class="table-header"
    label="Measurements"
    style="grid-area: meas"/>

  <product-reviews
    :reviews="productData.reviews"
    style="grid-area: rev"/>
</q-page>
</template>

<script lang="ts" setup>
const route = useRoute()
const productsStore = useProductsStore()

const quantity = ref(1)

const productId = computed(() => Number(route.params.productId))

const {
  data: productData
} = await useAsyncData<Product>(
  'product',
  async () => productsStore.fetchProduct(productId.value),
  {
    default: () => ({
      id: 0,
      title: '',
      description: '',
      category: '',
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      tags: [],
      brand: '',
      sku: '',
      weight: 0,
      dimensions: {
        width: 0,
        height: 0,
        depth: 0
      },
      warrantyInformation: '',
      shippingInformation: '',
      availabilityStatus: 'In Stock',
      reviews: [],
      returnPolicy: '',
      minimumOrderQuantity: 0,
      meta: {
        createdAt: '',
        updatedAt: '',
        barcode: '',
        qrCode: ''
      },
      images: [],
      thumbnail: ''
    }) as Product
  }
)
</script>

<style lang="scss" scoped>
.page {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "tlbr  tlbr  tlbr tlbr tlbr tlbr"
    "photo photo cont cont cont cont"
    "info  info  info info info info"
    "dets  dets  dets meas meas meas"
    "....  ....  rev  rev  rev  rev";
}
</style>
