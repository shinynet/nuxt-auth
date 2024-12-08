<template>
<q-page>
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

    <div class="col-xs-12 col-sm-7 col-md-8">
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

      <q-separator/>
    </div>
  </div>

  <div class="row q-col-gutter-md">
    <q-expansion-item
      class="col-xs-12 col-sm-6"
      expand-separator
      label="Item details">
      <q-markup-table>
        <tbody>
          <tr>
            <td class="text-left">
              Brand
            </td>
            <td class="text-right">
              {{ productData.brand }}
            </td>
          </tr>
          <tr>
            <td class="text-left">
              Ice cream sandwich
            </td>
            <td class="text-right">
              237
            </td>
          </tr>
          <tr>
            <td class="text-left">
              Eclair
            </td>
            <td class="text-right">
              262
            </td>
          </tr>
          <tr>
            <td class="text-left">
              Cupcake
            </td>
            <td class="text-right">
              305
            </td>
          </tr>
          <tr>
            <td class="text-left">
              Gingerbread
            </td>
            <td class="text-right">
              356
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-expansion-item>
    <q-expansion-item
      class="col-xs-12 col-sm-6"
      expand-separator
      label="Measurements">
      Measurements
    </q-expansion-item>
  </div>
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
