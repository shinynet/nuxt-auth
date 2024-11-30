<template>
<q-page>
  <q-toolbar class="text-caption q-pr-none">
    <product-breadcrumbs
      :category="productData.category"
      :product-name="productData.title"
      class="text-uppercase"/>
  </q-toolbar>

  <q-carousel
    v-model="slide"
    animated
    infinite
    swipeable
    thumbnails>
    <q-carousel-slide
      v-for="(image, i) in productData.images"
      :key="i"
      :img-src="image"
      :name="i"/>
  </q-carousel>
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
