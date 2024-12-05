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
        :reviews="productData.reviews"
        class="cursor-pointer">
        <template #append>
          <q-icon
            name="arrow_drop_down"
            size="sm"/>
        </template>
        <template #default>
          <q-popup-proxy>
            <ratings-card/>
          </q-popup-proxy>
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

      <q-separator/>
    </div>
    <aside class="col-2">
      Aside
    </aside>
  </div>
  <!--  <div class="row"> -->
  <!--    Reviews -->
  <!--    <div -->
  <!--      v-for="(review, i) in productData.reviews" -->
  <!--      :key="i"> -->
  <!--      {{ review }} -->
  <!--    </div> -->
  <!--  </div> -->
</q-page>
</template>

<script lang="ts" setup>
const route = useRoute()
const productsStore = useProductsStore()

const slide = ref(0)

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
