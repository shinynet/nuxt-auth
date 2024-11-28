<template>
<q-card
  bordered
  class="bg-grey-2"
  flat>
  <!-- img -->
  <q-img
    class="col-5"
    ratio="1"
    width="100%">
    <q-skeleton
      height="100%"
      style="background: rgb(0, 0, 0, 0.12)"
      type="rect"
      width="100%"/>
  </q-img>

  <q-card-section>
    <!-- name -->
    <q-skeleton
      height="56px"
      type="text"/>

    <!-- rating -->
    <q-skeleton
      height="14px"
      type="rect"
      width="78px"/>

    <!-- price -->
    <q-skeleton
      height="32px"
      type="text"/>

    <!-- shipping -->
    <q-skeleton
      height="20px"
      type="text"/>
  </q-card-section>

  <q-card-actions>
    <q-skeleton
      height="26px"
      type="QBtn"
      width="78px"/>
  </q-card-actions>
</q-card>
</template>
