<template>
<q-page class="page q-px-sm q-gutter-y-md">
  <q-toolbar
    class="text-caption q-px-none"
    style="grid-area: tlbr">
    <product-breadcrumbs
      :category="productData.category"
      :product-name="productData.title"
      class="text-uppercase"/>
  </q-toolbar>

  <product-carousel
    :images="productData.images"
    style="grid-area: glry"/>

  <section style="grid-area: gnrl">
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

    <p class="text-caption">
      {{ productData.shippingInformation }}
    </p>

    <div class="row q-gutter-sm">
      <product-quantity
        v-model="quantity"
        :max-quantity="productData.stock"/>

      <q-btn
        class="bg-accent text-white"
        flat>
        {{ $t('add_to_cart') }}
      </q-btn>
    </div>
  </section>

  <product-details
    :brand="productData.brand"
    :shipping-information="productData.shippingInformation"
    :sku="productData.sku"
    :warranty-information="productData.warrantyInformation"
    style="grid-area: dtls"/>

  <product-measurements
    :dimensions="productData.dimensions"
    :weight="productData.weight"
    style="grid-area: msrm"/>

  <ratings-card
    :rating="productData.rating"
    :reviews="productData.reviews"
    class="bg-grey-4"
    flat
    style="grid-area: rvwc"/>

  <product-reviews
    :reviews="productData.reviews"
    class="reviews"
    style="grid-area: rvws"/>
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
  gap: 0 $flex-gutter-md;
  grid-template-columns: repeat(8, 1fr);
  grid-template-areas:
    "tlbr tlbr tlbr tlbr tlbr tlbr tlbr tlbr"
    "glry glry glry gnrl gnrl gnrl gnrl gnrl"
    "dtls dtls dtls dtls msrm msrm msrm msrm"
    "rvwc rvwc rvwc rvws rvws rvws rvws rvws";
}

@media (max-width: $breakpoint-md-max) {
  .page {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
    "tlbr tlbr"
    "glry gnrl"
    "dtls msrm"
    "rvwc rvws";
  }
}

@media (max-width: $breakpoint-xs-max) {
  .page {
    grid-template-columns: auto;
    grid-template-areas:
    "tlbr"
    "gnrl"
    "glry"
    "dtls"
    "msrm"
    "rvwc"
    "rvws";
  }
}
</style>
