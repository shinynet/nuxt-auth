<template>
<div>
  <q-toolbar>
    <q-toolbar-title class="text-subtitle1">
      Reviews
    </q-toolbar-title>
  </q-toolbar>

  <q-list>
    <q-item
      v-for="({ reviewerName, comment, date, rating }, i) in reviews"
      :key="i">
      <q-item-section>
        <q-item-label>{{ reviewerName }}</q-item-label>
        <q-item-label caption>
          {{ comment }}
        </q-item-label>
      </q-item-section>

      <q-item-section
        side
        top>
        <q-item-label caption>
          {{ date }}
        </q-item-label>
        <div class="text-orange">
          <q-icon
            v-for="n in rating"
            :key="n"
            name="star"/>
        </div>
      </q-item-section>
    </q-item>
  </q-list>
</div>
</template>

<script lang="ts" setup>
defineProps<{ reviews: Review[] }>()
</script>

<style scoped>

</style>
