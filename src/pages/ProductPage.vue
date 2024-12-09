<template>
<q-page class="q-gutter-y-sm">
  <q-toolbar class="text-caption q-pr-none">
    <product-breadcrumbs
      :category="productData.category"
      :product-name="productData.title"
      class="text-uppercase"/>
  </q-toolbar>

  <div class="row q-px-sm q-col-gutter-md items-start">
    <product-carousel
      :images="productData.images"
      class="col-xs-12 col-sm-5 col-md-4"/>

    <div class="col-xs-12 col-sm-7 col-md-8 q-gutter-y-sm">
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
  </div>

  <product-information :="productData"/>

  <q-toolbar>
    <q-toolbar-title class="text-subtitle1">
      Reviews
    </q-toolbar-title>
  </q-toolbar>
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

<style lang="scss">
.table-header {
  border: solid 1px $grey-5;
}
</style>
