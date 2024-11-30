<template>
<q-page>
  <q-toolbar class="text-caption q-pr-none">
    <product-breadcrumbs
      :category="productData.category"
      :product-name="productData.title"
      class="text-uppercase"/>
  </q-toolbar>

  <div class="row q-col-gutter-md">
    <q-carousel
      v-model="slide"
      animated
      class="col-5"
      infinite
      swipeable
      thumbnails>
      <q-carousel-slide
        v-for="(image, i) in productData.images"
        :key="i"
        :img-src="image"
        :name="i"/>
    </q-carousel>
    <div class="col-5">
      <h1 class="text-h5">
        {{ productData.title }}
      </h1>

      <p>{{ productData.description }}</p>

      <product-rating
        :rating="productData.rating"
        :reviews="productData.reviews"/>

      <q-separator/>

      <product-price :price="productData.price"/>

      <div class="text-caption">
        {{ productData.shippingInformation }}
      </div>

      <q-input
        class="my-4"
        label="Quantity"
        max="10"
        min="1"
        model-value="1">
        <template #prepend>
          <q-btn
            dense
            flat
            icon="remove"/>
        </template>
        <template #append>
          <q-btn
            dense
            flat
            icon="add"/>
        </template>
      </q-input>
      <q-btn
        class="bg-accent text-white"
        flat>
        {{ $t('add_to_cart') }}
      </q-btn>

      <q-separator/>
    </div>
    <aside class="col-2">
      Aside
    </aside>
  </div>
</q-page>
</template>

<script lang="ts" setup>
const route = useRoute()
const productsStore = useProductsStore()

const slide = ref(0)

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
