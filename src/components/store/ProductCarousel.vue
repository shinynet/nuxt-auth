<template>
<div class="row q-gutter-x-xs items-start">
  <nav
    v-if="showThumbnails"
    class="column justify-start q-gutter-y-xs col-auto">
    <q-img
      v-for="(image, i) in images"
      :key="image"
      :class="{ active: slide === i }"
      :src="image"
      class="thumbnail cursor-pointer"
      @click="slide = i"/>
  </nav>

  <q-carousel
    v-model="slide"
    animated
    class="col"
    infinite
    style="height: unset"
    swipeable>
    <q-carousel-slide
      v-for="(image, i) in images"
      :key="i"
      :name="i"
      draggable="false">
      <q-img
        :src="image"
        fit="contain"
        ratio="1"/>
    </q-carousel-slide>
  </q-carousel>
</div>
</template>

<script lang="ts" setup>
const { images } = defineProps<{ images: string[] }>()

const slide = ref(0)

const showThumbnails = computed(() => images.length > 1)
</script>

<style lang="scss" scoped>
.thumbnail {
  height: 50px;
  width: 50px;
  border: solid 1px $grey-6;
  background-color: $grey-1;
}

.active {
  border: solid 2px $accent;
}
</style>
