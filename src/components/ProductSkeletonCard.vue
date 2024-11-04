<template>
  <q-card
    bordered
    flat
  >
    <q-card-section horizontal>
      <q-skeleton
        class="col-5"
        height="256px"
        type="rect"
        width="256px"
      />

      <q-card-section style="width: 100%;">
        <!-- title -->
        <q-skeleton
          type="text"
          width="33%"
        />
        <div>
          <!-- description -->
          <q-skeleton type="text" />
          <q-skeleton type="text" />
        </div>
        <!-- rating -->
        <q-skeleton
          type="rect"
          width="100px"
        />
        <div class="text-weight-bold text-h6">
          <!-- price -->
          <q-skeleton
            type="text"
            width="75px"
          />
        </div>
        <div>
          <!-- shipping info -->
          <q-skeleton
            type="text"
            width="50%"
          />
        </div>
        <q-skeleton
          size="sm"
          type="QBtn"
        />
      </q-card-section>
    </q-card-section>
  </q-card>
</template>
